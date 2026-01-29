import React from "react";
import Image from "next/image";
import ImageWithSkeleton from "../ImageWithSkeleton";

const VisionMissionSection = ({ visionAndInnovation }) => {
  return (
    <div className=" text-white  mt-[50px] md:mt-[150px] ">

      <div className="">
        <div className="border-t-1  border-l-1 border-b-0  border-white/30 h-[13px]"></div>
        <h2 className="font-bold text-[24px] md:text-[32px] 
         bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300 tracking-0 pt-[16px] md:pt-[9px]">{visionAndInnovation?.data?.mainTitle}</h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-[25px] md:gap-[50px] md:items-center ">

        <div className="space-y-8 md:w-1/2  md:pt-[76px]">
          {visionAndInnovation?.data?.textList?.map((item, index) => {
            return (

              <div key={index}>
                <div className="border-t-1  border-l-1 border-b-0  border-white/30 h-[13px]"></div>
                <h3 className="font-medium text-[20px] md:text-[24px] leading-[28px] tracking-0 pb-2 mb-2 pt-[15px]">
                  {item?.title}
                </h3>
                <p className="text-gray-300 font-normal text-[18px] leading-[26px] tracking-0">
                  {item?.content}
                </p>
              </div>

            )
          })}

        </div>

        <div className="md:w-1/2 h-full flex md:justify-center relative mt-[25px] md:mt-0">

          {/* <ImageWithSkeleton imageClasname={'rounded-lg shadow-lg   h-full relative z-10'} className='h-full'
            src={process.env.NEXT_PUBLIC_BASE_API_URL + visionAndInnovation?.data?.image?.url} /> */}
          <Image
            src={visionAndInnovation?.data?.image?.url}
            alt={'' || ''}
            className={`w-full h-full! object-cover rounded-lg shadow-lg   h-full relative! z-10' opacity-100`}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-1/2  left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#79FD66] to-[#27E7DB] w-[286px] 
            h-[247px] blur-[250px] opacity-100 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default VisionMissionSection;