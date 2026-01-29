import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import Image from "next/image";


export default function TeamMembers({ allTeamMembers }) {

    return (
        <section className="text-white mt-[100px] md:mt-[150px]">
            <div className="text-white flex flex-col items-center justify-center md:flex-row md:justify-between px-[20px] md:px-[53px]">
                <h2 className=" font-bold text-[24px] md:text-[32px]/[36px]  tracking-[-0%] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#BEFDF2] mb-5 max-w-[367px]  text-left">
                    Meet the talented team who make all this happen
                </h2>
                <div>
                    <p className="md:max-w-[584px]  font-normal text-[16px] md:text-[18px] leading-[26px] tracking-0 text-[#FFFFFFCC] text-left md:text-right">
                        Born from the Israeli tech ecosystem, Synaptix Labs emerged from a simple yet powerful observation: the traditional approach to product management wasn't keeping pace with the rapid evolution of technology.
                    </p>
                </div>
            </div>
            <div className={' px-[20px] md:pr-0 md:pl-[53px] mt-[30px] md:mt-[57px] text-white'}>

                <Swiper
                    slidesPerView={1}
                    // height={true}
                    // autoplay={{
                    //     delay: 2000,
                    //     disableOnInteraction: true,
                    // }}
                    spaceBetween={30}
                    loop={true}
                    modules={[Autoplay]}
                    className="p-4 flex !justify-center Team_slider"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                       
                        1441: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {allTeamMembers?.data
                        ?.sort((a, b) => a.order - b.order)
                        ?.map((member, index) => (
                            <SwiperSlide key={index} className="h-auto!">
                              <div className="flex flex-col items-center justify-between group p-[15px] rounded-[10px] bg-gradient-to-r from-[#122238] to-[#12242e] h-full!">
                               
                               <div><div className="relative w-full aspect-1/1 mb-[20px] mx-auto md:mx-0 ">
                                    {!member?.profileImage?.url ? (
                                        <div className="flex items-center justify-center rounded-[10px]
                                        text-white font-bold bg-[#3ba5c6] text-lg w-full h-full ">PHOTO</div>
                                    ) : (
                                     
                                        <Image
                                        quality={70}
                                        src={member?.profileImage?.url}
                                        alt={'' || ''}
                                        className={`w-full h-full object-cover rounded-lg  opacity-100`}
                                        layout="fill"
                                        objectFit="cover"
                                        priority
                                      />
                                   )}
                                </div>
                                <p className="font-bold text-[20px]  tracking-[-0%] text-white mb-[10px] text-center md:text-left">
                                    {member?.name} - {member?.role}
                                </p>
                                <p className="font-normal text-[16px] text-gray-400 text-center md:text-left " title={member.description}>
                                    {member?.description}
                                </p>
                                </div> 
                                <div className="flex justify-center md:justify-start w-full">
                                    <a href={member?.LinkedInUrl} target="_blank" className="mt-3 "> 
                                        <img className="h-[40px] w-[40px]" src={member?.linkedinLogo?.url} alt="" /> 
                                    </a>
                                </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
}
