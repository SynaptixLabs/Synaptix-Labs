import React, { useEffect, useRef } from "react";
import { CalendarDays, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from "swiper/modules";
import ImageWithSkeleton from "../ImageWithSkeleton";
import Image from "next/image";

const slides = [

    {
        logo: "./assets/solution/backupShop/logo.png",
        title: "Online Backup Service for Etsy Shops",
        description: "Join thousands of successful Etsy sellers boosting profits with our powerful SEO, AI insights, and secure backups. Protect your business and grow your sales effortlessly.",
        image: "./assets/solution/backupShop/bannerImage.png",
        visitWebsite: true,
        siteName: 'backupShop'
    },

    {
        logo: "./assets/solution/youtuber/logo.png",
        title: "AI-Powered Subtitles In Minutes",
        description: "Saving Time for YouTubers: we're dedicated to streamlining content creation, giving YouTubers more time for what truly matters.",
        image: "./assets/solution/youtuber/bannerImage.png",
        visitWebsite: true,
        siteName: 'youtuberIo'
    },

    {
        logo: "./assets/solution/sentom/logo.png",
        title: "Real estate trading SaaS platform",
        description: "This platform leverages state-of-the-art technologies to connect real estate properties and projects with a diverse network of high networth investors locally and globally.",
        image: "./assets/solution/sentom/bannerImage.png",
        visitWebsite: true,
        siteName: 'sentom'
    },

    {
        logo: "./assets/solution/crm/logo.png",
        title: "Customer Relationship Management",
        description: "Our platform uses AI to analyze  buyer behavior, learns from engagement patterns, and auto-optimizes your campaigns for maximum impact.",
        image: "./assets/solution/crm/bannerImage.png",
        visitWebsite: false,
        siteName: 'crm'
    },

];


export default function Banner({ allSolutionData, setSolutionPage, getlidePrev, getlideNext }) {
    const swiperRef = useRef(null);
    // const []
    useEffect(() => {
        if (getlideNext.length > 0) {
            swiperRef.current.swiper.slidePrev()
        }
    }, [getlideNext?.length])

    useEffect(() => {
        if (getlidePrev.length > 0) {
            swiperRef.current.swiper.slideNext()
        }
    }, [getlidePrev?.length])



    return (
        <>
            <div className="relative mt-[0px]">
                <Swiper
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoHeight={true}
                    pagination={false}
                    loop={true}
                    effect={typeof window !== 'undefined' && window.innerWidth > 768 ? 'fade' : undefined}
                    modules={[Autoplay, EffectFade]}
                    onSlideChange={(swiper) => {
                        const realIndex = swiper.realIndex;
                        setSolutionPage(allSolutionData?.data[realIndex]?.banner?.siteName)
                    }}
                >
                    {allSolutionData?.data?.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative text-white mt-[25px] md:mt-0 ">
                                <div className="md:absolute mb-[30px] md:mb-0 bottom-12 left-12 z-10">
                                    <div className="relative px-6 py-3 rounded-full shadow-md w-fit overflow-hidden">
                                        <img src={`${slide?.banner?.logo?.url}`} className="realtive max-w-[173px]  z-20" alt="Logo" />
                                        <div className=' bg-gradient-to-r from-[#323232] via-[#fff] to-[#fff] blur-[20px] opacity-30  absolute left-0 top-0 
                                    w-full h-full'></div>

                                    </div>

                                    <h2 className="text-[24px]/[28px] md:text-[38px] font-bold text-white py-[15px]">{slide?.banner?.title}</h2>
                                    <p className="text-[16px]/[20px] max-w-md pb-[35px]">
                                        {slide?.banner.description}
                                    </p>

                                    <div className="flex items-center gap-4">

                                        {slide?.banner?.bookAdemo &&
                                            <Link className={''} target="_blank" href={slide?.banner?.bookAdemo}>
                                                <button className="bg-gradient-to-r from-[#008DB0] cursor-pointer to-[#16A38A] text-base font-medium text-white rounded-full px-6 py-3 flex items-center gap-2">
                                                    <CalendarDays size={20} />
                                                    Book a Demo
                                                </button>
                                            </Link>}
                                        {slide?.banner?.visitWebsite && <Link target="_blank" href={slide?.banner?.visitWebsite} className="rounded-full h-[42px] w-40 flex gap-2 items-center justify-center bg-no-repeat bg-[100%_cover] bg-[url('/assets/solution/border.png')]">
                                            <ExternalLink size={20} />
                                            <p className="text-base font-medium text-white">
                                                Visit website
                                            </p>
                                        </Link>
                                        }
                                    </div>
                                </div>
                                <div className={'w-full '}>
                                    <div className='hidden md:block bg-gradient-to-r from-[#000000] via-[#000000]/53 to-[#000000]/1
                                 opacity-44  absolute left-0 top-0 w-full h-full rounded-[30px]'></div>
                                   
                                    <div className="relativeh-full ">
                                        <Image
                                            src={ slide?.banner?.Bannerimage?.url}
                                            alt={'' || ''}
                                            className={`w-full md:max-h-[calc(100dvh-100px)] rounded-[30px] object-cover relative!`}
                                            layout="fill"
                                            objectFit="cover"
                                            priority
                                        /></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>


            </div>

        </>
    );
}
