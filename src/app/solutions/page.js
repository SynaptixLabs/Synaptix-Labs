'use server';
import Solution from "@/app/pages/Solution";

export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}open-graph-data?populate=*`, { cache: 'no-store' });
  const openGraphData = await response.json();
  
  return {
    title: openGraphData?.data?.solutionsPage?.metaTitle || 'synaptix-labs',
    description: openGraphData?.data?.solutionsPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
    openGraph: {
      title: openGraphData?.data?.solutionsPage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.solutionsPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
      images: ['https://www.synaptixlabs.ai/assets/icon/logowhite.png'],
      url: 'https://www.synaptixlabs.ai',
      type:  'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphData?.data?.solutionsPage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.solutionsPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
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
    const [allSolutionResponse, contactInfoResponse,othersSolutionsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}solution-pages?fields=title&populate[banner][fields]=title,description,siteName,bookAdemo,visitWebsite&populate[banner][populate][logo][fields]=url&populate[banner][populate][Bannerimage][fields]=url&populate[video][fields]=url`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}contact-info`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}others-solutions?fields=title,description,url&populate[image][fields]=url`, { cache: 'no-store' }),
    ]);

    // if (!allSolutionResponse.ok || !contactInfoResponse.ok || !othersSolutionsResponse.ok) {
    //   throw new Error('Failed to fetch data');
    // }

    const allSolutionData = await allSolutionResponse.json();
    const contactInfo = await contactInfoResponse.json();
    const othersSolutions = await othersSolutionsResponse.json();

    return (
      <div>
        
        <Solution
          allSolutionData={allSolutionData}
          contactInfo={contactInfo}
          othersSolutions={othersSolutions}
        />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data: ', error);
    return <div>Error loading data: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }
}
