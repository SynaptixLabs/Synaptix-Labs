// app/api/subscribe/route.js

import axios from 'axios';

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}subscribes`, {
      data: body,
    });

    return new Response(JSON.stringify({
      success: true,
      data: response.data,
    }), {
      status: 200,
    });

  } catch (error) {
    console.error("Subscribe API error:", error);

    return new Response(JSON.stringify({
      success: false,
      message: "Something went wrong while subscribing.",
    }), {
      status: error?.response?.status || 500,
    });
  }
}
