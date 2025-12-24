// Link checker test: scans HTML files for local href targets and ensures referenced files exist.
// Run via `npm test` or `node tests/link-check.js` before publishing changes.

const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

function collectHtmlFiles(dirPath, files = []) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) {
      continue;
    }

    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === 'node_modules') {
        continue;
      }
      collectHtmlFiles(fullPath, files);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function isLocalHref(href) {
  const trimmed = href.trim();
  if (!trimmed) return false;

  const lower = trimmed.toLowerCase();
  if (
    lower.startsWith('http://') ||
    lower.startsWith('https://') ||
    lower.startsWith('//') ||
    lower.startsWith('mailto:') ||
    lower.startsWith('sms:') ||
    lower.startsWith('tel:')
  ) {
    return false;
  }

  return !lower.startsWith('#');
}

function resolveTarget(sourceFile, href) {
  const cleaned = href.split('#')[0].split('?')[0].trim();
  if (!cleaned) return null;

  return cleaned.startsWith('/')
    ? path.join(rootDir, cleaned)
    : path.resolve(path.dirname(sourceFile), cleaned);
}

function extractLocalHrefs(contents) {
  const hrefRegex = /href\s*=\s*["']([^"']+)["']/gi;
  const hrefs = [];
  let match;
  while ((match = hrefRegex.exec(contents)) !== null) {
    const href = match[1];
    if (isLocalHref(href)) {
      hrefs.push(href);
    }
  }
  return hrefs;
}

function main() {
  const htmlFiles = collectHtmlFiles(rootDir);
  const missingLinks = [];

  for (const htmlFile of htmlFiles) {
    const contents = fs.readFileSync(htmlFile, 'utf8');

    for (const href of extractLocalHrefs(contents)) {
      const targetPath = resolveTarget(htmlFile, href);
      if (!targetPath) continue;

      if (!fs.existsSync(targetPath)) {
        missingLinks.push({
          source: path.relative(rootDir, htmlFile),
          href,
          resolved: path.relative(rootDir, targetPath),
        });
      }
    }
  }

  if (missingLinks.length) {
    console.error('Missing local link targets found:');
    for (const link of missingLinks) {
      console.error(`- ${link.source} -> ${link.href} (resolved: ${link.resolved})`);
    }
    process.exit(1);
  }

  console.log(`Link check passed (${htmlFiles.length} HTML files scanned).`);
}

main();
