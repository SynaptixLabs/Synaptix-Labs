'use server';
import Home from "@/app/pages/Home";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}open-graph-data?populate=*`, { cache: 'no-store' });
  const openGraphData = await response.json();
  
  return {
    title: openGraphData?.data?.homePage?.metaTitle || 'synaptix-labs',
    description: openGraphData?.data?.homePage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
    openGraph: {
      title: openGraphData?.data?.homePage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.homePage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
      images: ['https://www.synaptixlabs.ai/assets/icon/logowhite.png'],
      url: 'https://www.synaptixlabs.ai',
      type:  'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphData?.data?.homePage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.homePage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
      images:  ['https://www.synaptixlabs.ai/assets/icon/logowhite.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}



export default async function Page() {
  try {
    const [brandLogoResponse, contactInfoResponse, feedbackResponse,aboutBannerResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}brand-logo?populate[logo][fields]=url`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}contact-info`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}feedbacks`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}about-banner?fields=videoUrl,videoText&populate[video][fields]=url`, { cache: 'no-store' }),
     
    ]);

    // if (!brandLogoResponse.ok || !contactInfoResponse.ok) {
    //   throw new Error('Failed to fetch data');
    // }

    const allLogo = await brandLogoResponse.json();
    const contactInfo = await contactInfoResponse.json();
    const feedback = await feedbackResponse.json();
    const aboutBanner = await aboutBannerResponse.json();
    

    return (
      <div>
        <Home brandLogo={allLogo} contactInfo={contactInfo} feedback={feedback} aboutBanner={aboutBanner}/>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data: ', error);
    return <div>Error loading data</div>;
  }
}