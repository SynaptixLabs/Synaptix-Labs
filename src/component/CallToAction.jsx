import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction({aboutBanner}) {
    const [preload, setPreload]=useState(true)
    useEffect(()=>{
        setPreload(false)
    },[])

    return (
        <>
            <div className=" h-[282px] md:h-[362px] overflow-hidden object-cover rounded-[30px] relative">
                <video
                    className="w-full max-h-[362px] h-[362px] overflow-hidden object-cover rounded-[30px] "
                    src={`${aboutBanner?.data?.video?.url && aboutBanner?.data?.video?.url || aboutBanner?.data?.videoUrl}`}
                    autoPlay
                    muted
                    loop
                    preload={`${preload ? 'none' : ''}`}
                />

                <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div>

                <div className="absolute inset-0 z-30 flex flex-col justify-center h-full p-[25px] md:p-10 md:p-20 max-w-2xl">
                    <span className="text-[30px]/[34px] md:text-[44px]/[46px] font-bold leading-tight pb-[30px] bg-clip-text whitespace-pre-line text-transparent bg-gradient-to-r from-white  to-[#BEFDF2]">
                        {aboutBanner?.data?.videoText}
                     </span>
                    {/* <button className="flex cursor-not-allowed items-center gap-2 bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-white text-[16px] md:text-lg font-medium px-6 py-3 rounded-full w-fit h-[42px] font-bold">
                        Get a Free Product Assessment <ArrowUpRight size={24}/>
                    </button> */}
                </div>
            </div>
        </>
    );
}
