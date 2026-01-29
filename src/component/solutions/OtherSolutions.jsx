import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import ImageWithSkeleton from "../ImageWithSkeleton";
import Image from "next/image";



const OtherSolutions = ({ othersSolutions }) => {
    const [loading, setLoading] = useState('')
    const router = useRouter();
    return (
        <>
            <h2 className={'text-[24px] md:text-[32px] font-bold text-white text-center mt-[50px] md:mt-20'} style={{
                background: 'linear-gradient(to right, #fff 40%, #BEFDF2 )',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
            }}>See Our Other Solutions</h2>
            <Swiper
                freeMode={true}
                spaceBetween={30}
                slidesPerView={1}
                loop
                modules={[Autoplay]}
                // autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className={'mt-[25px] md:mt-10'}
            >
                {othersSolutions?.data?.map((solution, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-white shadow-lg px-[20px] md:px-0">
                            <Link href={solution.url} target="_blank" className="relative rounded-[20px] overflow-hidden cursor-pointer" onClick={() => {
                                // router.push(`${solution.url}`);
                            }}>

                                <Image quality={70}
                                    src={solution.image.url}
                                    alt={'' || ''}
                                    className={` w-full  aspect-28/17 relative!`}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />

                                {solution.url && (loading === index ? <>
                                    <FaSpinner className="animate-spin absolute bottom-6 right-6" size={20} />
                                </> : <img
                                    src="/assets/blog/proicons-arrow-up.svg"
                                    className="absolute bottom-4 right-4 text-white  cursor-pointer text-white"
                                    alt=""
                                />)}




                            </Link>
                            <div className=" pt-[20px] md:py-6">
                                <h3 className="text-[22px] font-bold text-white pb-2">
                                    {solution.title}
                                </h3>
                                <p className="text-base/[20px] font-normal text-white/85">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default OtherSolutions;
