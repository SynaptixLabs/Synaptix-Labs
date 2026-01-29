import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const AIProductMobileView = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <div className={'text-center mt-[50px] mb-[30px] px-[20px] md:px-[53px] '}>
                <h2 className={' bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BEFDF2] text-[24px]/[32px] md:text-[32px]/[32px] font-bold pb-1.5'}>
                    AI-Driven Product-Management-As-a-Service
                </h2>
                <p className={'text-white/[74%] text-[16px]/[20px] mdtext-lg/[22px] font-normal '}>
                    Reimagining Your Product Capabilities
                </p>
            </div>

            <Swiper className='pagination_hide home_pegination bg-gradient-to-r from-[#081829] to-[#1b3c486e]'
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: (index, className) => {
                        const backgroundColor = index === activeIndex ? '#fff' : '#fff';
                        return `<span class="${className}" style="background-color: ${backgroundColor}; height: 9px; width: 9px;"></span>`;
                    },
                }}
                autoHeight={true}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                modules={[Autoplay, Pagination]}
            // autoplay={{ delay: 3000 }} 
            >
                <SwiperSlide>
                    <div className=" w-full relative pb-[50px] ">
                        <div className=" w-full max-w-[972px] shadow-md text-white px-[20px] pt-[30px]  relative">

                            <div
                                className='absolute top-[150px]  left-1/2 transform -translate-x-1/2  
                              bg-gradient-to-r from-[#27E7DB]   via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                                <div className="w-full h-full bg-black/40"></div>
                            </div>
                            <div className=" w-full  relative z-10  ">


                                <div className="w-full">
                                    <div className="relative px-[20px] pt-[11px] pb-[7px] rounded-full shadow-md flex items-center gap-2 w-fit overflow-hidden">
                                        <div className={'bg-gradient-to-r from-[#00FFD1] via-[#70DDE2] to-[#94EAFF] opacity-30 absolute left-0 top-0 w-full h-full'}></div>
                                        <img className="max-w-[132px] relative" src="./assets/images/ReplyFastLogo.png" alt="" />
                                    </div>
                                    <h2 className="text-[22px] font-medium text-white mt-4">
                                        AI-powered Customer Service
                                    </h2>
                                    <p className="pt-3 text-base/[20px] font-normal text-white/[82%]">
                                        Deliver exceptional customer service with AI-driven responses.
                                        Provide 24/7 assistance and achieve superior satisfaction effortlessly.
                                    </p>


                                    <div className="mt-6 grid grid-cols-2 gap-[15px] ">
                                        <div className="flex items-center gap-2">
                                            <img src="/assets/icon/wallet.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Cost Savings</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="/assets/icon/user_1.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>User Experience</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="/assets/icon/Support.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>24/7 Support</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="/assets/icon/Safety.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Safety Guaranteed</p>
                                        </div>
                                    </div>


                                    <Link href="https://www.replyfast.ai/" target="_blank" className="mt-6 bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-base font-medium px-6 py-2 rounded-full shadow-lg flex inline-flex items-center gap-2">
                                        Learn More <ArrowUpRight size={24} />
                                    </Link>
                                </div>

                                <div className='mt-[30px] flex flex-col justify-center'>
                                    <img className={' pb-6 rounded-xl'} src="/assets/images/feature.png" alt="feature" />
                                    <img className={''} src="/assets/images/feature2.png" alt="feature2" />
                                </div>
                            </div>
                            <div
                                className='absolute bottom-[150px]  left-1/2 transform -translate-x-1/2  
                              bg-gradient-to-r from-[#27E7DB]   via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                                <div className="w-full h-full bg-black/40"></div>
                            </div>
                        </div>
                        <div className="absolute top-1/2   right-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#27E7DB] w-[286px] h-[247px] blur-[100px] opacity-10 rounded-full"></div>
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className=" w-full relative pb-[50px]  ">
                        <div className=" w-full max-w-[972px] shadow-md text-white px-[20px] pt-[30px]  relative">

                            <div
                                className='absolute top-[150px]  left-1/2 transform -translate-x-1/2  
                              bg-gradient-to-r from-[#27E7DB]   via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                                <div className="w-full h-full bg-black/40"></div>
                            </div>
                            <div className=" w-full  relative z-10  ">


                                <div>
                                    <div className="relative px-5 py-3 rounded-full shadow-md flex items-center gap-2 w-fit overflow-hidden">
                                        <div className={'bg-gradient-to-r from-[#00FFD1] via-[#70DDE2] to-[#94EAFF] opacity-30 absolute left-0 top-0 w-full h-full'}></div>
                                        <img className={'w-[130px] relative'} src="./assets/images/BackupShop.png" alt="" />
                                    </div>
                                    <h2 className="text-[22px] font-medium text-white mt-4">
                                        Online Backup Service for Etsy Shops
                                    </h2>
                                    <p className="pt-3 text-base/[20px] font-normal text-white/[82%] w-[400px]">
                                        Enable users to save previous versions of their store, preventing traffic loss and recovering from accidental changes.
                                    </p>


                                    <div className="mt-6 grid grid-cols-2 gap-[15px] ">
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/wallet.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Affordable Plans</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/investigation.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Key Research</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/Mask.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Generate Etsy Listing Details</p>
                                        </div>
                                    </div>


                                    <Link href="https://www.backupshop.io/" target="_blank" className="mt-6 bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-base font-medium px-6 py-2 rounded-full shadow-lg flex inline-flex items-center gap-2">
                                        Learn More <ArrowUpRight size={24} />
                                    </Link>
                                </div>

                                <div className='mt-[30px] flex flex-col justify-center'>
                                    <img src="./assets/images/img_BS.png" alt="feature" />
                                </div>
                            </div>
                            <div
                                className='absolute bottom-[150px]  left-1/2 transform -translate-x-1/2  
                              bg-gradient-to-r from-[#27E7DB]   via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                                <div className="w-full h-full bg-black/40"></div>
                            </div>
                        </div>
                        <div className="absolute top-1/2   right-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#27E7DB] w-[286px] h-[247px] blur-[100px] opacity-10 rounded-full"></div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className=" w-full relative pb-[50px]  ">
                        <div className=" w-full max-w-[972px] shadow-md text-white px-[20px] pt-[30px]  relative">

                            <div
                                className='absolute top-[150px]  left-1/2 transform -translate-x-1/2  
                              bg-gradient-to-r from-[#27E7DB]   via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                                <div className="w-full h-full bg-black/40"></div>
                            </div>
                            <div className=" w-full  relative z-10  ">


                                <div className="md:w-1/2 text-left md:text-left">
                                    <div className="relative px-[20px] py-[8px] rounded-full shadow-md w-fit overflow-hidden">
                                        <div className={'bg-gradient-to-r from-[#00FFD1] via-[#70DDE2] to-[#94EAFF] opacity-30 absolute left-0 top-0 w-full h-full'}></div>
                                        <img className='relative' src="./assets/images/YoutuberLogo.png" alt="" />
                                    </div>
                                    <h2 className="text-[22px] font-medium text-white mt-4">
                                        AI-Powered Subtitles
                                    </h2>
                                    <p className="pt-3 text-base/[20px] font-normal text-white/[82%]">
                                        Saving Time for YouTubers: we're dedicated to streamlining content creation, giving YouTubers more time for what truly matters.
                                    </p>


                                    <div className="mt-6 grid grid-row-2 gap-[15px] ">
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/arrow_1.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Exceptional accuracy rate</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/align.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Industry-standard formats: TXT, SRT, and VTT</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/language.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Multiple language support</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/wallet_2.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Competitive rates as low as $0.02/min</p>
                                        </div>
                                    </div>


                                    <Link href="https://youtuber.ai/" target="_blank" className="mt-6 bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-base font-medium px-6 py-2 rounded-full shadow-lg flex inline-flex items-center gap-2">
                                        Learn More <ArrowUpRight size={24} />
                                    </Link>
                                </div>

                                <div className='mt-[30px] flex flex-col justify-center'>
                                    <img className="mb-[20px] rounded-xl" src="./assets/images/screen_2.png" alt="feature" />
                                    <img className="rounded-xl" src="./assets/images/screen_1.png" alt="feature2" />
                                </div>
                            </div>
                            <div
                                className='absolute bottom-[150px]  left-1/2 transform -translate-x-1/2  
                              bg-gradient-to-r from-[#27E7DB]   via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                                <div className="w-full h-full bg-black/40"></div>
                            </div>
                        </div>
                        <div className="absolute top-1/2   right-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#27E7DB] w-[286px] h-[247px] blur-[100px] opacity-10 rounded-full"></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="  w-full relative ">
                    
                        <div className=" w-full max-w-[1020px] text-white  overflow-hidden  h-full  relative  px-[20px] pt-[30px] pb-[50px]">
                        <div
                                className='absolute top-[150px]  left-1/2 transform -translate-x-1/2  
                              bg-gradient-to-r from-[#27E7DB]   via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                                <div className="w-full h-full bg-black/40"></div>
                            </div>
                            {/* Left Section */}
                            <div className="md:w-1/2 text-start md:text-left flex  items-center relative z-10">
                                <div>
                                    <div className="relative px-5 py-[10px] rounded-full shadow-md flex items-center gap-2 w-fit overflow-hidden">
                                        <div className={'bg-gradient-to-r from-[#00FFD1] via-[#70DDE2] to-[#94EAFF] opacity-30 absolute left-0 top-0 w-full h-full'}></div>
                                        <img className="relative" src="./assets/icon/SentomREicon.svg" alt="" />
                                        <p className={'text-white text-base relative font-medium'}>Sentom RE</p>
                                    </div>
                                    <h1 className="text-[22px] font-medium text-white mt-4">
                                        Real estate trading SaaS platform
                                    </h1>
                                    <p className="pt-3 text-base/[20px] text-start font-normal text-white/[82%] w-[360px]">
                                        This platform leverages state-of-the-art technologies to connect real estate properties and projects with a diverse network of high networth investors locally and globally.
                                    </p>

                                    {/* Features */}
                                    <div className="mt-6 grid grid-cols-2 gap-[15px] ">
                                        <div className="flex items-center gap-[15px]">
                                            <img src="./assets/icon/tool.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Campaign Builder</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/clipboard.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Property Listings</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/location_5.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Prime Locations</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/investigation_1.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Advanced Search</p>
                                        </div>
                                    </div>


                                    {/* Button */}
                                    <Link href="https://sentom-re.com/home" target="_blank" className="mt-6 bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-base font-medium px-6 py-2 rounded-full shadow-lg flex inline-flex items-center gap-2">
                                        Learn More <ArrowUpRight size={24} />
                                    </Link>
                                </div>
                            </div>
                            

                            <div className="flex flex-col gap-[15px]  relative z-10 mt-[30px] ">
                                <img className="" src="./assets/images/image_RE.png" alt="feature" />
                                <img className="" src="./assets/images/img_RE2.png" alt="feature2" />
                            </div>
                            <div
                                className='absolute bottom-[150px]  left-1/2 transform -translate-x-1/2  
                              bg-gradient-to-r from-[#27E7DB]   via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                                <div className="w-full h-full bg-black/40"></div>
                            </div>
                        </div>
                      
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className=" w-full relative pb-[50px]  ">
                        <div className=" w-full max-w-[972px] shadow-md text-white px-[20px] pt-[30px]  relative">

                            <div
                                className='absolute top-[150px]  left-1/2 transform -translate-x-1/2  
                              bg-gradient-to-r from-[#27E7DB]   via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                                <div className="w-full h-full bg-black/40"></div>
                            </div>
                            <div className=" w-full  relative z-10  ">


                                <div className=" w-full text-left">
                                    <div className="relative px-5 py-3 rounded-full shadow-md flex items-center gap-2 w-fit overflow-hidden">
                                        <div className={'bg-gradient-to-r from-[#00FFD1] via-[#70DDE2] to-[#94EAFF] opacity-30 absolute left-0 top-0 w-full h-full'}></div>
                                        <img src="./assets/icon/SentomREicon.svg" alt="" />
                                        <p className={'text-white text-base font-medium'}>CRM</p>
                                    </div>
                                    <h2 className="text-[22px] font-medium text-white mt-4">
                                        Customer Relationship Management
                                    </h2>
                                    <p className="pt-3 text-base/[20px] font-normal text-white/[82%]">
                                        Our platform uses AI to analyze  buyer behavior, learns from engagement patterns, and auto-optimizes your campaigns for maximum impact.
                                    </p>

                                    {/* Features */}
                                    <div className="mt-6 grid grid-cols-2 gap-[15px] ">
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/EmbeddedAI.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Embedded AI</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/FlexibleBoard.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>Flexible Board</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="./assets/icon/Interface.svg" alt="wallet" />
                                            <p className={'text-base/[20px] font-normal '}>User-friendly Interface</p>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <Link href="https://sentom-re.com/home" target="_blank" className="mt-6 bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-base font-medium px-6 py-2 rounded-full shadow-lg flex inline-flex items-center gap-2">
                                        Learn More <ArrowUpRight size={24} />
                                    </Link>
                                </div>

                                <div className='mt-[30px] flex flex-col justify-center'>
                                    <img className="mb-[20px] rounded-xl" src="./assets/images/SentomRECRM_1.png" alt="feature" />
                                    <img className="rounded-xl" src="./assets/images/SentomRECRM_2.png" alt="feature2" />
                                </div>
                            </div>
                            <div
                                className='absolute bottom-[150px]  left-1/2 transform -translate-x-1/2  
                              bg-gradient-to-r from-[#27E7DB]   via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                                <div className="w-full h-full bg-black/40"></div>
                            </div>
                        </div>
                        <div className="absolute top-1/2   right-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#27E7DB] w-[286px] h-[247px] blur-[100px] opacity-10 rounded-full"></div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default AIProductMobileView;
