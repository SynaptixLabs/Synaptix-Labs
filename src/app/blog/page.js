'use server';
import Blog from '../pages/Blog';

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}open-graph-data?populate=*`, { cache: 'no-store' });
  const openGraphData = await response.json();
  
  return {
    title: openGraphData?.data?.blogPage?.metaTitle || 'synaptix-labs',
    description: openGraphData?.data?.blogPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
    openGraph: {
      title: openGraphData?.data?.blogPage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.blogPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
      images: ['https://www.synaptixlabs.ai/assets/icon/logowhite.png'],
      url: 'https://www.synaptixlabs.ai',
      type:  'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphData?.data?.blogPage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.blogPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
      images:  ['https://www.synaptixlabs.ai/assets/icon/logowhite.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}



async function getArticles(page, pageSize, categoryName, categorySearch) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}blog-posts?fields=title,slug,shortDescription,favourite,createdAt,uploaded&populate[previewImage][fields]=url&populate[author][fields]=authName,authEmail&populate[author][populate][authImage][fields]=url&populate[categories][fields]=name&pagination[page]=${1}&pagination[pageSize]=${pageSize}`;
  
  if (categoryName || categorySearch) {
    url += `&populate[categories][fields]=name&filters[categories][name][$eq]=${categoryName || categorySearch}`;
  }

  const res = await fetch(url, { cache: 'no-store' });

  return res.json();
}

export default async function Page({ searchParams }) {
  const { page: pageParam = '10', category: categoryName, categorySearch } = await searchParams || {};
  const pageNumber = parseInt(pageParam, 10);
  const pageSize = pageParam;

 
  const [articles, catRes, favRes, contactRes,aboutBannerResponse] = await Promise.all([
    getArticles(pageNumber, pageSize, categoryName, categorySearch),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}categories?fields=name`, { cache: 'no-store' }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}blog-posts?fields=title,shortDescription,slug,favourite,createdAt,uploaded&populate[previewImage][fields]=url&populate[author][fields]=authName,authEmail&populate[author][populate][authImage][fields]=url&populate[categories][fields]=name&filters[favourite][$eq]=true${(categoryName || categorySearch) ? `&populate[categories][fields]=name&filters[categories][name][$eq]=${categoryName || categorySearch}` : ''}`, {
      cache: 'no-store'
    }),
    
    fetch(`${process.env.NEXT_PUBLIC_API_URL}contact-info`, { cache: 'no-store' }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}about-banner?fields=videoUrl,videoText&populate[video][fields]=url`, { cache: 'no-store' }),
  ]);

  

  const getCategory = await catRes.json();
  const favouriteArticles = await favRes.json();
  const contactInfo = await contactRes.json();
  const aboutBanner = await aboutBannerResponse.json();

  return (
    <div>
      <Blog
        articles={articles}
        getCategory={getCategory}
        favouriteArticles={favouriteArticles}
        contactInfo={contactInfo}
        aboutBanner={aboutBanner}
      />
    </div>
  );
}