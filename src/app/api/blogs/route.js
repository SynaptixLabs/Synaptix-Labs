// /app/api/articles/route.js
export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page') || '1'
    const pageSize = searchParams.get('pageSize') || '10'
    const category = searchParams.get('category')
    const categorySearch = searchParams.get('categorySearch')
  
    let url = `${process.env.NEXT_PUBLIC_API_URL}blog-posts?fields=title,shortDescription,favourite,uploaded` +
    '&populate[previewImage][fields]=url' +
    '&populate[author][fields]=authName,authEmail' +
    '&populate[author][populate][authImage][fields]=url' +
    '&populate[categories][fields]=name'
  
    if (category || categorySearch) {
      url += `&filters[categories][name][$eq]=${category || categorySearch}`
    }
  
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch articles' }), { status: res.status })
    }
  
    const data = await res.json()
    return new Response(JSON.stringify(data), { status: 200 })
  }
  