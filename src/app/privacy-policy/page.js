'use server';
import PrivacyPolicy from "@/app/pages/PrivacyPolicy";
import { Toaster } from "react-hot-toast";


export async function generateMetadata() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}open-graph-data?populate=*`, { cache: 'no-store' });
  const openGraphData = await response.json();
  
  return {
    title: openGraphData?.data?.privacyPolicyPage?.metaTitle || 'synaptix-labs',
    description: openGraphData?.data?.privacyPolicyPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
    openGraph: {
      title: openGraphData?.data?.privacyPolicyPage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.privacyPolicyPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
      images: ['https://www.synaptixlabs.ai/assets/icon/logowhite.png'],
      url: 'https://www.synaptixlabs.ai',
      type:  'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphData?.data?.privacyPolicyPage?.metaTitle || 'synaptix-labs',
      description: openGraphData?.data?.privacyPolicyPage?.metaDescription || 'Welcome to Synaptix Labs - read expert blogs on AI, machine learning, and modern tech. Stay updated.',
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
    const [privacyPolicyResponse,contactInfoResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}privacy-policy`, { cache: 'no-store' }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}contact-info`, { cache: 'no-store' }),
    ]);


    const privacyPolicy = await privacyPolicyResponse.json();
    const contactInfo = await contactInfoResponse.json();
    return (
      <div className="h-full">
         <Toaster position="top-right"  toastOptions={{
                 duration: 3000,
                    style: {
                        zIndex: 9999999999,
                    },
                }} />
        <PrivacyPolicy privacyPolicy={privacyPolicy}
        contactInfo={contactInfo}
        />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data: ', error);
    return <div>Error loading data: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }
}
