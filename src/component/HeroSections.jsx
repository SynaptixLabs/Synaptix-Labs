import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import ImageLoad from "./ImageLoad";



export default function HeroSections() {
    return (
        <div className="w-full relative  z-[101]">
            <img className='w-[34vw] 2xl:w-[37vw] hidden xl:block absolute  right-[-55px] top-[17%]   2xl:top-[32%px]' src="./assets/images/borderline2.png" alt="Star"></img>
            <div
                className={'absolute top-[180px] md:top-[190px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#79FD66] to-[#27E7DB]  blur-[124px] md:blur-[250px] opacity-80 rounded-full w-[323px] h-[280px] md:w-[550px] md:h-[476px] '}>
            </div>
            <div className="w-full relative z-10 ">
                <div className={'bg-white/10 rounded-full flex justify-center gap-2.5 py-[11px] px-[20px] mt-8 w-fit  mx-auto '}>
                    <img src="./assets/icon/approach.svg" alt="AI-driven approach" />
                    <p className={'text-white text-base text-[14px]/[14px] font-normal '}>
                        AI-DRIVEN APPROACH
                    </p>
                </div>
                <h2 className={'text-[24px]/[32px] md:text-[42px]/[50px] font-bold text-center md:max-w-[844px] mx-auto mt-5 relative  bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BEFDF2]'}>
                    <span className="relative  bg-clip-text text-transparent bg-gradient-to-r from-white to-[#fff]">AI-Driven
                        <img className="absolute left-[0px] top-[30px] md:left-[0px] md:top-[60px] w-[69%]" src="./assets/images/line.png" alt="Line" />

                    </span> Products: Empowering Innovation Through Intelligent Assistants

                </h2>

                <p className={'text-center text-[16px] md:text-[18px]/[22px] font-normal text-white/74 md:w-[35%] mx-auto mt-5'}>
                    Navigating Your AI Transformation With Strategic  Product Management Using Agentic Frameworks
                </p>

                <div className={'max-w-[911.66px]  mx-auto relative mt-[60px] md:mb-20'}>

                    <Image
                        src={'/assets/images/Main-img1.png'}
                        alt={'' || ''}
                        className={`'w-full rounded-[20px] relative!`}
                        layout="fill"
                        objectFit="cover"
                        priority
                        quality={70}
                    />

                    {/* <div className={'absolute w-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center '}>
                        <Link
                            className={'cursor-not-allowed text-[18px]/[16px] bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] px-[20px] md:px-8 py-3  h-[42px] font-bold rounded-full text-white w-fit inline-flex justify-center items-center gap-2.5  h-[42px] font-bold'}
                            href="#">Get a Free Product Assessment <ArrowUpRight size={24} />
                           
                        </Link>
                    </div> */}

                    <div className={'relative mt-[-40px] md:mt-0 md:absolute  md:left-[-200px] md:top-[55px] w-full flex justify-center items-center md:block md:w-auto'}>
                        <div
                            className={'  bg-white/[18%] backdrop-blur-[20px] px-4 py-2 rounded-xl shadow-[-10px_8px_0_0_rgba(255,255,255,0.1)] rounded-bl-none inline-flex justify-between items-center gap-2.5 '}>
                            <img className={'w-[50px]'} src="./assets/images/star.png" alt="Star"></img>
                            <div className={'flex justify-center items-center gap-2.5 '}>
                                <p className={'text-white text-[26px] font-medium'}>20+</p>
                                <p className={'text-white text-[18px] md:text-xl font-normal items-center '}>
                                    Successful projects
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={'relative md:absolute md:left-[-100px] md:top-[180px] w-full flex justify-center items-center md:block md:w-auto my-[20px] md:my-0'}>
                        <div
                            className={'bg-white/[18%] backdrop-blur-[20px] px-4 py-2 rounded-xl shadow-[-10px_8px_0_0_rgba(255,255,255,0.1)] rounded-bl-none inline-flex justify-between items-center gap-2.5 relative'}>
                            <img className={'w-[50px]'} src="./assets/images/star.png" alt="Star"></img>
                            <div className={'flex justify-center items-center gap-2.5 '}>
                                <p className={'text-white text-[26px] font-medium'}>100+</p>
                                <p className={'text-white text-[18px] mdtext-xl font-normal items-center '}>
                                    Satisfied customer
                                </p>
                            </div>
                            <img className={'hidden md:block absolute bottom-[-20px] right-[-20px] w-[30px]'}
                                src="./assets/images/Polygon.png" alt="Polygon"></img>
                        </div>
                    </div>

                    <div className={'relative md:absolute md:right-[-100px] md:top-[180px] md:w-[300px]   w-full flex justify-center items-center md:block md:w-auto '}>
                        <div
                            className={'bg-white/[18%] backdrop-blur-[20px] px-4 py-2 rounded-xl shadow-[-10px_8px_0_0_rgba(255,255,255,0.1)] rounded-bl-none md:shadow-[10px_8px_0_0_rgba(255,255,255,0.1)] md:rounded-br-none relative w-[303px]'}>
                            <h4 className={'text-white  text-[18px] mdtext-xl font-bold pb-1.5'}>From Vision to Execution</h4>
                            <p className={'text-white/[74%]  text-[16px] mdtext-lg/[22px] font-normal '}>
                                We help you build AI-powered products effortlessly
                            </p>
                            <img className={'hidden md:block absolute bottom-[-20px] left-[-20px] w-[30px] '}
                                src="./assets/images/PolygonL.png" alt="Polygon"></img>
                        </div>
                    </div>

                    <div className={'relative w-full flex justify-center items-center md:block mt-[30px] md:mt-[0px] md:w-auto  md:absolute md:right-[-80px] md:bottom-[47px]'}>
                        <img className={'w-[146px] h-[146px] md:w-[173px] md:h-[173px] rounded-full bg-white/[18%] backdrop-blur-[20px]'} src="./assets/images/imgR.png" alt="imgR" />
                    </div>

                    <div className={'hidden md:block absolute left-1/2 transform -translate-y-1/2'}>
                        <div
                            onClick={() => {
                                window.scrollBy({ top: 600, behavior: 'smooth' });
                            }}
                           className="animate-pulse bg-white/[14%] backdrop-blur-[15px] w-[68px] h-[68px] rounded-full active:scale-90 flex justify-center items-center cursor-pointer"
                        >
                            <i className="fa-solid fa-arrow-down text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[-150px]  right-[-150px] transform bg-[#27E7DB] w-[339px] h-[293px]  opacity-15 blur-[100px] rounded-full z-[200]"></div>
        </div>
    );
}