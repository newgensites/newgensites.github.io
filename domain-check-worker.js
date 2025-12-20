export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (url.pathname !== "/check-domain") {
      return new Response("Not found", { status: 404, headers: corsHeaders });
    }

    if (request.method !== "GET") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    const domain = (url.searchParams.get("domain") || "").trim().toLowerCase();

    if (!isValidDomain(domain)) {
      return jsonResponse({ available: false, invalid: true }, 400, corsHeaders);
    }

    try {
      const rdapUrl = `https://rdap.verisign.com/com/v1/domain/${encodeURIComponent(domain)}`;
      const rdapResponse = await fetch(rdapUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (rdapResponse.status === 404) {
        return jsonResponse({ available: true }, 200, corsHeaders);
      }

      if (rdapResponse.ok) {
        return jsonResponse({ available: false }, 200, corsHeaders);
      }

      return jsonResponse({ available: false }, 502, corsHeaders);
    } catch (error) {
      return jsonResponse({ available: false }, 502, corsHeaders);
    }
  },
};

const isValidDomain = (value) => {
  const pattern = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/;
  return pattern.test(value) && value.endsWith(".com");
};

const jsonResponse = (payload, status, headers) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
