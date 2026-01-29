// /app/api/favourites/route.js
export async function GET() {
    const url = `${process.env.NEXT_PUBLIC_API_URL}blog-posts?fields=title,shortDescription,favourite,uploaded&populate[previewImage][fields]=url&populate[author][fields]=authName,authEmail&populate[author][populate][authImage][fields]=url&populate[categories][fields]=name&filters[favourite][$eq]=true`
  
    const res = await fetch(url, { cache: 'no-store' })
  
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch favourite articles' }), {
        status: res.status,
      })
    }
  
    const data = await res.json()
    return new Response(JSON.stringify(data), { status: 200 })
  }
  