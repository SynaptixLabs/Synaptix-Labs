// /app/api/categories/route.js
export async function GET() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}categories?fields=name`, {
      cache: 'no-store',
    })
  
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch categories' }), {
        status: res.status,
      })
    }
  
    const data = await res.json()
    return new Response(JSON.stringify(data), { status: 200 })
  }
  