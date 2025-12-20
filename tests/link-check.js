// Link checker test: verifies local href targets in HTML files resolve to existing files.
const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const htmlFiles = [];
const missingLinks = [];

function collectHtmlFiles(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) {
      continue;
    }
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules') {
        continue;
      }
      collectHtmlFiles(fullPath);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

function isLocalHref(href) {
  const trimmed = href.trim();
  if (!trimmed) {
    return false;
  }
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
  if (lower.startsWith('#')) {
    return false;
  }
  return true;
}

function resolveTarget(sourceFile, href) {
  const cleaned = href.split('#')[0].split('?')[0].trim();
  if (!cleaned) {
    return null;
  }
  if (cleaned.startsWith('/')) {
    return path.join(rootDir, cleaned);
  }
  return path.resolve(path.dirname(sourceFile), cleaned);
}

collectHtmlFiles(rootDir);

const hrefRegex = /href\s*=\s*["']([^"']+)["']/gi;

for (const htmlFile of htmlFiles) {
  const contents = fs.readFileSync(htmlFile, 'utf8');
  let match = null;
  while ((match = hrefRegex.exec(contents)) !== null) {
    const href = match[1];
    if (!isLocalHref(href)) {
      continue;
    }
    const targetPath = resolveTarget(htmlFile, href);
    if (!targetPath) {
      continue;
    }
    if (!fs.existsSync(targetPath)) {
      missingLinks.push({ source: htmlFile, href, target: targetPath });
    }
  }
}

if (missingLinks.length) {
  console.error('Missing local link targets found:');
  for (const link of missingLinks) {
    console.error(`- ${path.relative(rootDir, link.source)} -> ${link.href} (resolved: ${path.relative(rootDir, link.target)})`);
  }
  process.exit(1);
}

console.log(`Link check passed (${htmlFiles.length} HTML files scanned).`);
