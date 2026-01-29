import { useState } from 'react';

export default function ImageWithSkeletonMarkdown({ src, alt, className = '',imageClasname='' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={`relative block ${className}`}>
  {!loaded && (
    <span className="absolute inset-0 block animate-pulse bg-gray-800 rounded-lg" />
  )}

  <img
    src={src}
    alt={alt}
    onLoad={() => setLoaded(true)}
    className={`w-full h-full object-cover rounded-lg transition-opacity duration-700 ${imageClasname} ${loaded ? 'opacity-100' : 'opacity-0'}`}
  />
</span>

  );
}
