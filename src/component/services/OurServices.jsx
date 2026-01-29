import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import MarkdownRenderer from "../Markdown";



export default function CoreServices({ allService }) {
    const [selectedService, setSelectedService] = useState(0);

    const handleServiceClick = (id) => {
        setSelectedService(id);
        // if (selectedService === id) {
        //     setSelectedService(null)
        // }
    };


    return (
        <>
            <div className="w-full mb-[20px] md:mb-[150px] mt-[50px] md:mt-0 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col relative col-span-1">
                        <div className=" w-full relative z-10">
                            <h2 className="  text-left font-bold text-[24px] md:text-[42px] sm:text-[32px] 
                        leading-[16px] tracking-[-0%] text-[#FFFFFF] mb-[25px] md:mb-[22px] text-center md:text-left " ><span>
                                    Our Services</span> </h2>

                            <div className="hidden mb-[43px] md:flex relative z-0">
                                <Image
                                    src="/assets/services/star.svg" alt=""
                                    className="mr-[13px]"
                                    width={49}
                                    height={50}
                                    quality={70}
                                    priority
                                />  <p className="max-w-[458px] pt-6 mb-0 text-[18px] ">Transform your product vision into market-leading solutions with Synaptix Labs' comprehensive suite of services.</p>


                            </div>
                        


                            <ul className="w-full">
                                {allService?.data?.sort((a, b) => a.order - b.order)?.map((service, index) => (
                                    <div className="w-full" key={service?.id}>
                                        <li
                                            onClick={() => handleServiceClick(index)}
                                            className={`cursor-pointer pb-2 md:py-2 mb-[18px] text-left 
                                          flex items-center justify-start group transition-all duration-200 ${allService?.data[selectedService]?.id === service?.id ? "text-teal-400" : "text-white hover:text-teal-400"
                                                }`}
                                        >
                                            <span
                                                className={`h-[4px] text-left mr-2 rounded-full transition-all duration-200 ${allService?.data[selectedService]?.id === service?.id
                                                    ? "bg-teal-400 w-[40px]"
                                                    : "bg-transparent w-0 group-hover:bg-teal-400 group-hover:w-[40px]"
                                                    }`}
                                            />
                                            <span
                                                className={`transition-all duration-200 ${allService?.data[selectedService]?.id === service?.id
                                                    ? "ml-0 md:ml-2"
                                                    : "group-hover:ml-2"
                                                    }  font-normal text-[20px] leading-[20px] tracking-[-0%]`}
                                            >
                                                {service?.serviceName}
                                            </span>
                                        </li>
                                        <div className={`flex md:hidden items-start justify-start mb-[20px] transition-all duration-500 overflow-hidden ${allService?.data[selectedService]?.id === service?.id ? 'max-h-[1000px] animate-open' : 'max-h-0'}`}>
                                            <div className="flex flex-col">
                                                <MarkdownRenderer content={service?.serviceContent} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <div className="absolute top-1/2   left-[75px] transform -translate-x-1/2 -translate-y-1/2 bg-[#27E7DB] w-[286px] h-[247px] blur-[250px] opacity-100 rounded-full"></div>
                    </div>
                    <div className="hidden md:flex items-start  col-span-1">
                        <div className="flex flex-col service_text">
                            <MarkdownRenderer content={allService?.data[selectedService]?.serviceContent} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
