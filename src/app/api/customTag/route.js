// app/api/customTag/route.js

import axios from 'axios';

export async function GET(req) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}custom-tag-injection?populate=*`);

    return new Response(JSON.stringify({
      success: true,
      data: response?.data?.data,
    }), {
      status: 200,
    });

  } catch (error) {
    console.error("Custom Tag API error:", error);

    return new Response(JSON.stringify({
      success: false,
      message: "Something went wrong while fetching custom tags.",
    }), {
      status: error?.response?.status || 500,
    });
  }
}