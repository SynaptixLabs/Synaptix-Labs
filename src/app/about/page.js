'use server';
import About from "@/app/pages/About";
import { Toaster } from "react-hot-toast";


export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}open-graph-data?populate=*`, { cache: 'no-store' });
  const openGraphData = await response.json();
  
  return {
    title: openGraphData?.data?.AboutUsPage?.metaTitle || 'synaptix-labs',
    description: openGraphData?.data?.AboutUsPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
    openGraph: {
      title: openGraphData?.data?.AboutUsPage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.AboutUsPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
      images: ['https://www.synaptixlabs.ai/assets/icon/logowhite.png'],
      url: 'https://www.synaptixlabs.ai',
      type:  'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphData?.data?.AboutUsPage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.AboutUsPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
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
    const [teamMembersResponse, contactInfoResponse, aboutBannerResponse, synaptixLabsTodayResponse, visionAndInnovationResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}team-members?fields=name,role,order,description,LinkedInUrl&populate[profileImage][fields]=url&populate[linkedinLogo][fields]=url`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}contact-info`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}about-banner?fields=totalProject,projectText,videoUrl,videoText,customerText,SatisfiedCustomer&populate[images][fields]=url&populate[video][fields]=url`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}synaptix-labs-today?populate=*`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}vision-and-innovation?fields=mainTitle&populate[image][fields]=url&populate[textList][fields]=*`, { cache: 'no-store' }),
    ]);
 
    const allTeamMembers = await teamMembersResponse.json();
    const contactInfo = await contactInfoResponse.json();
    const aboutBanner = await aboutBannerResponse.json();
    const synaptixLabsToday = await synaptixLabsTodayResponse.json();
    const visionAndInnovation = await visionAndInnovationResponse.json();

    return (
      <div>
         <Toaster position="top-right"  toastOptions={{
                 duration: 3000,
                    style: {
                        zIndex: 9999999999,
                    },
                }} />
        <About
          allTeamMembers={allTeamMembers}
          contactInfo={contactInfo}
          aboutBanner={aboutBanner}
          synaptixLabsToday={synaptixLabsToday}
          visionAndInnovation={visionAndInnovation}
        />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data: ', error);
    return <div>Error loading data: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }
}
