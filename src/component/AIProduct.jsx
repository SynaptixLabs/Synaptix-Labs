import Image from "next/image";
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";
import React from "react";
import MotionWrapper from "@/component/MotionWrapper";
export default function AIProduct() {
    return (
        <>
            <div className={'text-center my-20 px-[20px] md:px-[53px]'}>
                <h2 className={' bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BEFDF2] text-[24px]/[32px] md:text-[32px]/[32px] font-bold pb-1.5'}>
                    AI-Driven Product-Management-As-a-Service
                </h2>
                <p className={'text-white/[74%] text-[16px]/[20px] mdtext-lg/[22px] font-normal '}>
                    Reimagining Your Product Capabilities
                </p>
            </div>
            <MotionWrapper >
            <div className="pr-[53px] lg:pr-0 w-full relative overflow-hidden pb-[70px]">
                <img className='w-[48vw] 2xl:w-[65vw] absolute  right-[-5px] top-[-23%]    2xl:top-[-76%]' src="./assets/images/borderline3.png" alt="Star"></img>
                <div className=" w-full max-w-[972px] shadow-md text-white z-10  overflow-hidden relative"
                style={{
                      backgroundImage:`url('./assets/images/Frame17.png')`
                    
                }}>
                   
                    <div className=" w-full flex items-center pl-[53px] relative z-10  flex justify-between  max-h-[516px]">
                        {/* Left Section */}

                        <div className="md:w-[393px] text-center md:text-left">
                            <div className="relative px-[20px] pt-[11px] pb-[7px] rounded-full shadow-md flex items-center gap-2 w-fit overflow-hidden">
                                <div className={'bg-gradient-to-r from-[#00FFD1] via-[#70DDE2] to-[#94EAFF] opacity-30 absolute left-0 top-0 w-full h-full'}></div>
                                {/* <img className="max-w-[132px] relative" src="./assets/images/ReplyFastLogo.png" alt="" /> */}
                                        <Image quality={70} 
                                            src={`/assets/images/ReplyFastLogo.png`}
                                            alt={'' || ''}
                                            className={`max-w-[132px] relative!`}
                                            layout="fill"
                                            priority
                                        />
                            </div>
                            <h2 className="text-[22px] font-medium text-white mt-4">
                                AI-powered Customer Service
                            </h2>
                            <p className="pt-3 text-base/[20px] font-normal text-white/[82%] w-[400px]">
                                Deliver exceptional customer service with AI-driven responses.
                                Provide 24/7 assistance and achieve superior satisfaction effortlessly.
                            </p>

                            {/* Features */}
                            <div className="mt-6 grid grid-cols-2 gap-[15px] ">
                                <div className="flex items-center gap-2">
                                    <img src="./assets/icon/wallet.svg" alt="wallet" />
                                    <p className={'text-base/[20px] font-normal '}>Cost Savings</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="./assets/icon/user_1.svg" alt="wallet" />
                                    <p className={'text-base/[20px] font-normal '}>User Experience</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="./assets/icon/Support.svg" alt="wallet" />
                                    <p className={'text-base/[20px] font-normal '}>24/7 Support</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="./assets/icon/Safety.svg" alt="wallet" />
                                    <p className={'text-base/[20px] font-normal '}>Safety Guaranteed</p>
                                </div>
                            </div>

                            {/* Button */}
                            <Link href="https://www.replyfast.ai/" target="_blank" className="mt-6 bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-base font-medium px-6 py-2 rounded-full shadow-lg flex inline-flex items-center gap-2">
                                Learn More <ArrowUpRight size={24} />
                            </Link>
                        </div>

                        <div className="h-full">
                        <Image quality={70} 
                                            src={`/assets/images/feature.png`}
                                            alt={'' || ''}
                                            className={` max-w-[454px] pb-6 objcet-cover relative!`}
                                            layout="fill"
                                            priority
                                        />
                                         <Image quality={70} 
                                            src={`/assets/images/feature2.png`}
                                            alt={'' || ''}
                                            className={`max-w-[454px] relative!`}
                                            layout="fill"
                                            priority
                                        />
                            {/* <img className={' max-w-[454px] pb-6 objcet-cover'} src="./assets/images/feature.png" alt="feature" />
                            <img className={'max-w-[454px]'} src="./assets/images/feature2.png" alt="feature2" /> */}
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2   right-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#27E7DB] w-[286px] h-[247px] blur-[100px] opacity-15 rounded-full"></div>
            </div>
            </MotionWrapper>


            {/*BackupShop*/}
            <MotionWrapper >
            <div className="flex items-center justify-end w-full   z-[999] relative ">
               
                <div className="  hidden lg:block !h-[100%]  2xl:w-[80%]  w-[40%] min-h-[200px] 2xl:min-h-[200px] bg-no-repeat "  style={{
                    backgroundImage:`url('./assets/images/borderline4.png')`,
                    backgroundSize:'100% 100%',
                    height:'100%'
                }}></div>
                <div className=" w-full max-w-[1070px] text-white  overflow-hidden  h-full  relative pl-[53px]" style={{
                      backgroundImage:`url('./assets/images/Frame17.png')`
                    
                }}>
                    {/* <div className='absolute top-1/2  left-1/3 transform -translate-x-1/2 -translate-y-1/2 
                      bg-gradient-to-r from-[#27E7DB]  via-[#79FD66]  to-[#27E7DB]  blur-[150px] opacity-100 
                        rounded-full w-[300px] h-[200px] rounded-full '>
                        <div className="w-full h-full bg-black/40"></div>
                    </div> */}
                    <div className=" ml-auto mr-0 flex   relative items-end h-full" >

                        <div className="md:w-1/2 text-center md:text-left min-h-[518px] flex justify-center items-center relative z-10">
                            <div>
                                <div className="relative px-5 py-3 rounded-full shadow-md flex items-center gap-2 w-fit overflow-hidden">
                                    <div className={'bg-gradient-to-r from-[#00FFD1] via-[#70DDE2] to-[#94EAFF] opacity-30 absolute left-0 top-0 w-full h-full'}></div>
                                    <img className={'w-[149px] relative '} src="./assets/images/BackupShop.png" alt="" />
                                </div>
                                <h2 className="text-[22px] font-medium text-white mt-4">
                                    Online Backup Service for Etsy Shops
                                </h2>
                                <p className="pt-3 text-base/[20px] font-normal text-white/[82%] w-[400px]">
                                    Enable users to save previous versions of their store, preventing traffic loss and recovering from accidental changes.
                                </p>

                                {/* Features */}
                                <div className="mt-6 grid grid-cols-2 gap-2 ">
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

                                {/* Button */}
                                <Link href="https://www.backupshop.io/"  target="_blank" className="mt-6 bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-base font-medium px-6 py-2 rounded-full shadow-lg flex inline-flex items-center gap-2">
                                    Learn More <ArrowUpRight size={24} />
                                </Link>
                            </div>
                        </div>

                        <div className="h-full ">
                            {/* <img src="./assets/images/img_BS.png" alt="feature" /> */}
                            <Image quality={70} 
                                            src={`/assets/images/img_BS.png`}
                                            alt={'' || ''}
                                            className={`max-w-[700px] relative!`}
                                            layout="fill"
                                            priority
                                        />
                                       
                        </div>
                    </div>
                </div>
                <div className="absolute top-1/2   left-1/5 transform -translate-x-1/2 -translate-y-1/2 bg-[#27E7DB] w-[286px] h-[247px] blur-[100px] opacity-15 rounded-full"></div>

            </div>
            </MotionWrapper>


            {/*Youtuber*/}
            <MotionWrapper >
            <div className="pr-[53px] lg:pr-[0px] w-full relative flex items-center justify-between overflow-hidden">
                <div className=" w-full max-w-[972px] shadow-md text-white   overflow-hidden relative mt-[70px] " style={{
                      backgroundImage:`url('./assets/images/Frame18.png')`
                    
                }}>
                    {/* <div
                        className='absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2    bg-gradient-to-r from-[#27E7DB] via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                        <div className="w-full h-full bg-black/40"></div>
                    </div> */}
                    <div className=" w-full flex items-center pl-[53px] relative z-10  flex justify-between">
                        {/* Left Section */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <div className="relative px-[20px] py-[8px] rounded-full shadow-md w-fit overflow-hidden">
                                <div className={'bg-gradient-to-r from-[#00FFD1] via-[#70DDE2] to-[#94EAFF] opacity-30 absolute left-0 top-0 w-full h-full'}></div>
                                <img className="relative" src="./assets/images/YoutuberLogo.png" alt="" />
                            </div>
                            <h2 className="text-[22px] font-medium text-white mt-4">
                                AI-Powered Subtitles
                            </h2>
                            <p className="pt-3 text-base/[20px] font-normal text-white/[82%] w-[400px]">
                                Saving Time for YouTubers: we're dedicated to streamlining content creation, giving YouTubers more <br /> time for what truly matters.
                            </p>

                            {/* Features */}
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

                            {/* Button */}
                            <Link href="https://youtuber.ai/" target="_blank" className=" mt-6 bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-base font-medium px-6 py-2 rounded-full shadow-lg flex inline-flex items-center gap-2">
                                Learn More <ArrowUpRight size={24} />
                            </Link>
                        </div>

                        <div className="flex flex-col gap-[44px]">
                        <Image quality={70} 
                                            src={`/assets/images/screen_2.png`}
                                            alt={'' || ''}
                                            className={`max-w-[462px] relative!`}
                                            layout="fill"
                                            priority
                                        />
                                          <Image quality={70} 
                                            src={`/assets/images/screen_1.png`}
                                            alt={'' || ''}
                                            className={`max-w-[462px] relative!`}
                                            layout="fill"
                                            priority
                                        />
                            {/* <img className="max-w-[462px]" src="./assets/images/screen_2.png" alt="feature" />
                            <img className="max-w-[462px]" src="./assets/images/screen_1.png" alt="feature2" /> */}
                        </div>
                    </div>

                </div>
                <div className="  hidden lg:block youtube_border h-full 2xl:w-[80%]  w-[40%] mt-[-164px] ml-[-86px] 2xl:mt-[-180px]
                       2xl:ml-[-86px]  min-h-[500px] bg-content" style={{
                    backgroundImage:`url('./assets/images/borderline5.png')`
                }}>
                    
                </div>
                <div className="absolute top-1/2   right-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#27E7DB] w-[286px] h-[247px] blur-[100px] opacity-15 rounded-full"></div>
            </div>
            </MotionWrapper>




            {/*BackupShop*/}
            <MotionWrapper >
            <div className="flex items-center  w-full mt-[70px] pl-[53px] lg:pl-0 relative  ">
            <div className=" hidden lg:block !h-[100%]  2xl:w-[80%]  w-[40%] min-h-[200px] 2xl:min-h-[200px] bg-no-repeat "  style={{
                    backgroundImage:`url('./assets/images/borderline4.png')`,
                    backgroundSize:'100% 100%',
                    height:'100%'
                }}>
                    
                </div>
                <div className=" w-full max-w-[1020px] text-white  overflow-hidden  h-full flex relative pl-[53px]" style={{
                      backgroundImage:`url('./assets/images/Frame19.png')`
                    
                }}>
                 
                    {/* Left Section */}
                    <div className="md:w-1/2 text-center md:text-left flex  items-center relative z-10">
                        <div>
                            <div className="relative px-5 py-[10px] rounded-full shadow-md flex items-center gap-2 w-fit overflow-hidden">
                                <div className={'bg-gradient-to-r from-[#00FFD1] via-[#70DDE2] to-[#94EAFF] opacity-30 absolute left-0 top-0 w-full h-full'}></div>
                                <img className="relative" src="./assets/icon/SentomREicon.svg" alt="" />
                                <p className={'text-white text-base relative font-medium'}>Sentom RE</p>
                            </div>
                            <h1 className="text-[22px] font-medium text-white mt-4">
                                Real estate trading SaaS platform
                            </h1>
                            <p className="pt-3 text-base/[20px] font-normal text-white/[82%] w-[360px]">
                                This platform leverages state-of-the-art technologies to connect real estate properties and projects with a diverse network of high networth investors locally and globally.
                            </p>

                            {/* Features */}
                            <div className="mt-6 grid grid-cols-2 gap-[15px] ">
                                <div className="flex items-center gap-2">
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

                    <div className="flex flex-col gap-[15px] pe-[53px]">
                        {/* <img className="max-w-[525px]" src="./assets/images/image_RE.png" alt="feature" />
                        <img className="max-w-[517px]" src="./assets/images/img_RE2.png" alt="feature2" /> */}
                        <Image quality={70} 
                                            src={`/assets/images/image_RE.png`}
                                            alt={'' || ''}
                                            className={`max-w-[525px] relative!`}
                                            layout="fill"
                                            priority
                                        />
                                          <Image quality={70} 
                                            src={`/assets/images/img_RE2.png`}
                                            alt={'' || ''}
                                            className={`max-w-[517px] relative!`}
                                            layout="fill"
                                            priority
                                        />
                    </div>
                </div>
                <div className="absolute top-1/2   left-1/5 transform -translate-x-1/2 -translate-y-1/2 bg-[#27E7DB] w-[286px] h-[247px] blur-[100px] opacity-15 rounded-full"></div>

            </div>
            </MotionWrapper>

            {/*CRM*/}
            <MotionWrapper >
            <div className=" w-full pt-[70px]  pr-[53px] lg:pr-0  relative  flex items-center justify-between overflow-hidden" >
                <div className=" pl-[53px]  w-full max-w-[1020px] shadow-md text-white flex items-center justify-between  overflow-hidden relative " style={{
                      backgroundImage:`url('./assets/images/Frame17.png')`
                    
                }}>
                    {/* <div
                        className='absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-gradient-to-r from-[#27E7DB]
                     via-[#79FD66]  to-[#27E7DB]  blur-[100px] opacity-100   rounded-full w-[200px] h-[200px] rounded-full '>
                        <div className="w-full h-full bg-black/40"></div>
                    </div> */}
                    {/* Left Section */}
                    <div className=" w-full flex items-center  relative z-10  flex justify-between">
                        <div className="md:w-1/2 text-center md:text-left">
                            <div className="relative px-5 py-[10px] rounded-full shadow-md flex items-center gap-2 w-fit overflow-hidden">
                                <div className={'bg-gradient-to-r from-[#00FFD1] via-[#70DDE2] to-[#94EAFF] opacity-30 absolute left-0 top-0 w-full h-full'}></div>
                                <img className="relative" src="./assets/icon/SentomREicon.svg" alt="" />
                                <p className={'relative text-white text-base font-medium'}>CRM</p>
                            </div>
                            <h2 className="text-[22px] font-medium text-white mt-4">
                                Customer Relationship Management
                            </h2>
                            <p className="pt-3 text-base/[20px] font-normal text-white/[82%] w-[400px]">
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

                        <div className="flex flex-col gap-[18px]">
                            {/* <img className="max-w-[519px]" src="./assets/images/SentomRECRM_1.png" alt="feature" />
                            <img className="max-w-[519px]"  src="./assets/images/SentomRECRM_2.png" alt="feature2" /> */}
                            <Image quality={70} 
                                            src={`/assets/images/SentomRECRM_1.png`}
                                            alt={'' || ''}
                                            className={`max-w-[519px] relative!`}
                                            layout="fill"
                                            priority
                                        />
                                          <Image quality={70} 
                                            src={`/assets/images/SentomRECRM_2.png`}
                                            alt={'' || ''}
                                            className={`max-w-[519px] relative!`}
                                            layout="fill"
                                            priority
                                        />
                        </div>
                    </div>
                </div>
                <div className=" hidden lg:block youtube_border h-full 2xl:w-[80%]  w-[40%] mt-[-200px] ml-[-86px] 2xl:mt-[-220px]
                       2xl:ml-[-86px]  min-h-[500px] bg-content" style={{
                    backgroundImage:`url('./assets/images/borderline5.png')`
                }}></div>
                <div className="absolute top-1/2   right-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#27E7DB] w-[286px] h-[247px] blur-[100px] opacity-15 rounded-full"></div>

            </div>
            </MotionWrapper>
        </>
    );
}