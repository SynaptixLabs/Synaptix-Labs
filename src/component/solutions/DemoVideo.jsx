import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function DemoVideo({ solutionPage, allSolutionData }) {
    const [loaded, setLoaded] = useState(false);
    const [preload, setPreload]=useState(true)
    useEffect(()=>{
        setPreload(false)
    },[])
    const handleVideoLoad = () => {
        setLoaded(true);
    };

    return (
        <>
            {allSolutionData?.data?.map((item, index) => {
                return (
                    <div key={index} className="relative">
                        {item?.banner?.siteName === solutionPage &&
                            (item?.video === null ? (
                                <section className="bg-[#94EAFF]/73 rounded-[32px] w-full h-[443px] flex items-center justify-center mt-[50px] md:mt-20">
                                    <h2 className="text-white text-[24px] sm:text-[40px] font-bold">DEMO VIDEO</h2>
                                </section>
                            ) : (
                                <div className="relative ">
                                    {!loaded && (
                                        <div className="absolute inset-0 animate-pulse bg-gray-800 rounded-[20px]" />
                                    )}
                                    <video
                                        src={`${item.video.url}`}
                                        width="100%"
                                        className={`w-full h-[300px] md:h-auto md:aspect-4/1 object-fill rounded-[20px] mt-[50px] md:mt-20 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                                        autoPlay
                                        muted
                                        loop
                                        preload={`${preload ? 'none' : ''}`}
                                        onLoadedData={handleVideoLoad}
                                    />
                                </div>
                            ))
                        }
                    </div>
                );
            })}
        </>
    );
}
