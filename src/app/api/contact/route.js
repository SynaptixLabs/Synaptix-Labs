// app/api/contact/route.js

import axios from 'axios';

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}contact-uses`, {
      data: body,
    });

    return new Response(JSON.stringify({ success: true, data: response.data }), {
      status: 200,
    });
  } catch (error) {
    const formattedErrors =
      error?.response?.data?.error?.details?.errors?.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {}) || {};

    return new Response(JSON.stringify({
      success: false,
      errors: formattedErrors,
      message: 'Failed to submit contact form',
    }), {
      status: error.response?.status || 500,
    });
  }
}
