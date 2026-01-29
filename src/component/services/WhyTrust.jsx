import Image from "next/image";
import Link from "next/link";
import MainHeader from "@/component/MainHeader";
import { useEffect, useState } from "react";

export default function WhyTrust({ trustVideo }) {
    const [preload, setPreload]=useState(true)
    useEffect(()=>{
        setPreload(false)
    },[])

    return (
        <div className="relative w-full">
            <div className="hidden md:block absolute top-0 right-[0] transform bg-[#27E7DB] w-[286px] h-[247px] blur-[250px] opacity-100 rounded-[20px]"></div>
            <h2 className=" mb-[25px] text-center block md:hidden font-bold text-[24px]/[28px] md:text-[42px]
             leading-[32px] md:leading-[46px] tracking-[-0%] w-full"  style={{
                    background: 'linear-gradient(to right, #fff 40%, #BEFDF2, #fff )',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}>
                Why Trust Us for <br /> your Needs?

            </h2>


            <div className="relative w-full  shadow-lg mb-[50px] md:mb-[150px] z-10 rounded-[20px] rounded-[20px]">

                {(trustVideo?.data?.video?.url || "").match(/\.(mp4|webm|ogg)$/i) ? (
                    <video
                        src={`${trustVideo?.data?.video?.url}`}
                        width="100%"
                        height="544px"
                        className="w-full min-h-[343px] md:min-h-[544px] max-h-[544px] object-cover  rounded-[20px]"
                        autoPlay
                        muted
                        loop
                        preload={`${preload ? 'none' : ''}`}
                    />
                ) : (
                    <img
                        src={`${trustVideo?.data?.video?.url}`}
                        alt="Team Working"
                        className="w-full min-h-[343px] md:min-h-[544px] max-h-[544px] object-cover rounded-[20px]"
                    />
                )}
                <div className=" w-full h-full top-0 left-0 absolute bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_35.06%,rgba(102,102,102,0)_100%)] z-10"></div>



                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent flex flex-col md:flex-row justify-end md:justify-between items-end p-6 md:p-10 rounded-[20px] z-20">
                    <h2 className="hidden md:block font-bold text-[28px] md:text-[42px] leading-[32px] md:leading-[46px] tracking-[-0%] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BEFDF2] max-w-sm">
                        Why Trust Us for your Needs?
                    </h2>
                    <div className="flex items-end">
                        <div className="flex flex-col gap-[10px] md:gap-[25px] text-white mt-6 self-end text-right w-full md:w-[257px] rounded-[20px]">
                            <div className="flex items-center justify-start">
                                <div className="backdrop-filter me-[10px] md:me-[14px] backdrop-blur-[60px] bg-white/20 text-[#FFFFFF21] min-w-[60px] md:min-w-[89px] h-[60px] md:h-[89px] flex items-center justify-center rounded-full">

                                    <Image quality={70}
                                        src="/assets/services/badge.svg" alt=""
                                        className="w-3/5 h-auto"
                                        width={53}
                                        height={53}
                                        priority
                                    />
                                </div>
                                <p className="telweend font-bold text-[18px] md:text-[24px] leading-[22px] md:leading-[28px] tracking-[-0%] text-left">Professional <br className="block md:hidden" /> Team</p>
                            </div>

                            <div className="flex items-center">
                                <div className="backdrop-filter me-[10px] md:me-[14px] backdrop-blur-[60px] bg-white/20 text-[#FFFFFF21] min-w-[60px] md:min-w-[89px] h-[60px] md:h-[89px] flex items-center justify-center rounded-full">

                                    <Image quality={70}
                                        src="/assets/services/leadership.svg" alt=""
                                        className="w-3/5 h-auto"
                                        width={53}
                                        height={53}
                                        priority
                                    />
                                </div>
                                <p className="telweend font-bold text-[18px] md:text-[24px] leading-[22px] md:leading-[28px] tracking-[-0%] text-left">15+ Years of <br className="block md:hidden" /> Experience</p>
                            </div>

                            <div className="flex items-center">
                                <div className="backdrop-filter me-[10px] md:me-[14px] backdrop-blur-[60px] bg-white/20 text-[#FFFFFF21] min-w-[60px] md:min-w-[89px] h-[60px] md:h-[89px] flex items-center justify-center rounded-full">


                                    <Image quality={70}
                                        src="/assets/services/achievement.svg" alt=""
                                        className="w-3/5 h-auto"
                                        width={53}
                                        height={53}
                                        priority
                                    />
                                </div>
                                <p className="telweend font-bold text-[18px] md:text-[24px] leading-[22px] md:leading-[28px] tracking-[-0%] text-left">Leadership <br className="block md:hidden" /> Skills</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block absolute bottom-0  left-[0] transform bg-[#27E7DB] w-[286px] h-[247px] blur-[250px] opacity-100 rounded-full"></div>

        </div>
    );
}
