// components/CustomTagProvider.jsx (or .tsx)
import { fetchCustomTags } from '@/lib/fetchCustomTags';
import React from 'react';


export default async function CustomTagProvider({ children }) {
  const customTag = await fetchCustomTags();

  return (
    <>
      {/* Pass customTag as a prop or context */}
      {children(customTag)}
    </>
  );
}
