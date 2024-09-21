# Stock Charts App v0.0.1

Built with Vite.js, the Stock Charts App is a user-friendly interactive application that aims to assist users in understanding stock market trends.

To run the project on your local machine, clone the repository and follow these commands:

# Installation

$ npm install

# Serve with hot reload at localhost:3000

$ npm run dev

Please remember to add the .env.local file to the root directory of your project before running the app. You’ll want to include a proxied API of the Alpha Vantage API URI in the .env file:

# API URI

VITE_STOCKS_API_URI=YOUR_API_TO_PROXY_WITH_API_KEY

## Supabase Edge Function

I use a simple Supabase Edge Function to rewrite the API calls, attaching the apiKey directly to the request.

Here is the corresponding code I implemented:

```
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  const url = req.url;
  const { searchParams } = new URL(url + "");
  const apiUrl = `https://www.alphavantage.co/query?${searchParams.toString()}&apikey=ALPHA_VENTAGE_API_KEY`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});

```
