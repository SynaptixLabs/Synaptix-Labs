import { useState } from 'react';

export default function ImageWithSkeleton({ src, alt, className = '',imageClasname='' }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative ${className}`}>
      
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-800 rounded-lg" />
      )}

     
      <img
        src={src}
        alt={''}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-700 ${imageClasname} ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
