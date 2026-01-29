import Image from 'next/image';

const customLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_BASE_API_URL}${src}?w=${width}&q=${quality || 75}`;
};

export default function ImageLoad({ className, src, alt }) {

    return (
       
            <Image
                loader={customLoader}
                src={src}
                alt={alt || ''}
                fill
                priority
                quality={70}
                className={className}
            />
      
    );
}