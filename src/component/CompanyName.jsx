import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Ensure you import Image from next/image
import { motion } from 'framer-motion'; // Import motion from framer-motion
import ImageWithSkeletonMarkdown from './ImageWithSkeletonMarkdown';


const InfiniteScrollingLogosAnimation = ({brandLogo}) => {

  const [logoArray, setlogoArray]=useState([])

  
 

  useEffect(() => {
    if (brandLogo?.data?.logo) {
      setlogoArray(
        brandLogo?.data?.logo?.map((item,index) => ({
          src:item?.url, 
          alt: index,
          width: 173,
          height: 56,
        }))
      );
    }
  }, [brandLogo?.data?.logo]);


  return (
    <div className="max-w-90%] mx-auto py-5">
     
      <div className="flex relative  md:mt-[30px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10  md:before:w-100 
      before:bg-gradient-to-r before:from-[#090d1f] before:to-transparent before:content-[''] after:absolute after:right-0
       after:top-0 after:h-full after:w-10 md:after:w-100 after:bg-gradient-to-l after:from-[#090d1f] after:to-transparent after:content-['']">
        <motion.div
          transition={{
            duration: 100,
            ease: 'linear',
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: '-50%' }}
          className="flex flex-none gap-16 pr-16"
        >
          {[...new Array(6)]?.fill(0)?.map((_, index) => (
            <React.Fragment key={index}>
              {logoArray?.map(({ src, alt, width, height }) => (
                <Image
                quality={70}
                key={alt}
                src={`${src}`}
                alt={alt || ""}
                // layout='fill'
                width={width}
                height={height}
                className="h-[120px] w-[120px] relative! "
              
                
              />

              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollingLogosAnimation;