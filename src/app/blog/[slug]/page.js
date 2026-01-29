
'use server';

import BlogDetails from "@/app/pages/BlogDetails";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}blog-posts?filters[slug][$eq]=${slug}&populate[previewImage][fields]&populate[author][fields]=authName,authEmail&populate[author][populate][authImage][fields]=url&populate[categories][fields]=name`,
    { cache: "no-store" }
  );
  const articleData = await response.json();
  const article = articleData?.data?.[0];

  return {
    title: article?.metaTitle || article?.title,
    description: article?.metaDescription || article?.shortDescription,
    openGraph: {
      title: article?.metaTitle || article?.title,
      description:  article?.metaDescription || article?.shortDescription,
      images: [article?.previewImage?.formats?.thumbnail?.url],
      url: `https://www.synaptixlabs.ai/blog/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article?.metaTitle || article?.title,
      description: article?.metaDescription || article?.shortDescription,
      images: [article?.previewImage?.formats?.thumbnail?.url],
    },
    robots: {
      index:  true,
      follow: true,
    },
  };
}



export default async function BlogPage({ params }) {
  const { slug } = await params;
  const url = `${process.env.NEXT_PUBLIC_API_URL}blog-posts?fields=title,slug,shortDescription,favourite,uploaded&populate[previewImage][fields]=url&populate[author][fields]=authName,authEmail&populate[author][populate][authImage][fields]=url&populate[categories][fields]=name`;
  const fetchallBlog = await fetch(url, {
    cache: "no-store",
  });
  const allBlog = await fetchallBlog.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}blog-posts?filters[slug][$eq]=${slug}&populate[previewImage][fields]=url&populate[author][fields]=authName,authEmail&populate[author][populate][authImage][fields]=url&populate[categories][fields]=name`,
    { cache: "no-store" }
  );

  // if (!res.ok) {
  //   throw new Error(`Failed to fetch article ${slug}: ${res}`);
  // }

  const articleData = await res.json();


  const contactInfoResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}contact-info`,
    { cache: "no-store" }
  );

  const contactInfo = await contactInfoResponse.json();

  return (
    <div>
      <BlogDetails articles={articleData} allBlog={allBlog} contactInfo={contactInfo} />
    </div>
  );  
}