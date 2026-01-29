'use server';
import Services from "@/app/pages/Services";
import { Toaster } from "react-hot-toast";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}open-graph-data?populate=*`, { cache: 'no-store' });
  const openGraphData = await response.json();
  
  return {
    title: openGraphData?.data?.servicesPage?.metaTitle || 'synaptix-labs',
    description: openGraphData?.data?.servicesPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
    openGraph: {
      title: openGraphData?.data?.servicesPage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.servicesPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
      images: ['https://www.synaptixlabs.ai/assets/icon/logowhite.png'],
      url: 'https://www.synaptixlabs.ai',
      type:  'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphData?.data?.servicesPage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.servicesPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
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
    const [ourServicesResponse, servicesQuestionsResponse, contactInfoResponse,trustVideoResponse,serviceNameResponse,latestBlogResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}our-services`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}service-questions`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}contact-info`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}why-trust-video?populate[video][fields]=url`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}service-names`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}blog-posts?fields=title,slug,shortDescription,favourite,createdAt,uploaded&populate[previewImage][fields]=url&populate[author][fields]=authName,authEmail&populate[author][populate][authImage][fields]=url&populate[categories][fields]=name&sort=createdAt:desc&pagination[limit]=1`, {
        cache: 'no-store'
      })
     
    ]);

    // if (!ourServicesResponse.ok || !contactInfoResponse.ok || !servicesQuestionsResponse.ok) {
    //   throw new Error('Failed to fetch data');
    // }

    const allService = await ourServicesResponse.json();
    const contactInfo = await contactInfoResponse.json();
    const QuestionsResponse = await servicesQuestionsResponse.json();
    const trustVideo = await trustVideoResponse.json();
    const serviceName = await serviceNameResponse.json();
    const latestBlog = await latestBlogResponse.json();
    

    
    

    return (
      <div>
         <Toaster position="top-right"  toastOptions={{
                 duration: 3000,
                    style: {
                        zIndex: 9999999999,
                    },
                }} />
        <Services
          allService={allService}
          contactInfo={contactInfo}
          questionsResponse={QuestionsResponse}
          trustVideo={trustVideo}
          serviceName={serviceName}
          latestBlog={latestBlog}
        />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data: ', error);
    return <div>Error loading data: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }
}
