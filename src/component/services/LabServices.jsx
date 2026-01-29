
import Image from "next/image";
import Link from "next/link";
import MainHeader from "@/component/MainHeader";

export default function LabServices() {
    return (
        <>
            <div className="w-full relative mt-[60px] md:mt-[90px] md:mt-28 md:mb-36 text-left px-[20px] md:px-[0px]">
                <div className="md:absolute w-full mx-auto  md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:left-1/2
                 md:top-1/2  md:px-[53px]">
                    <div className="w-full md:max-w-[537px]">
                        <h2 className="text-[24px] md:text-[42px] font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-teal-200 mb-[10px] md:mb-5">
                            Explore Synaptix Labs’s Services
                        </h2>
                        <p className=" font-normal text-[16px] md:text-[18px] leading-[22px] text-[#FFFFFFCC] mb-[30px] md:mb-7">
                            By combining human expertise with advanced AI capabilities, we deliver exceptional product management and development services that drive innovation and growth.
                        </p>
                        {/* <Link href="" className="text-[16px] cursor-not-allowed bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-white py-2 px-4 rounded-full flex inline-flex items-center justify-center h-[42px] font-bold">
                            Get a Free Product Assessment <span><img src="./assets/services/link-arrow.svg" className="ms-2" alt="" /></span>
                        </Link> */}
                    </div>
                </div>
                <div className="w-full hidden md:flex items-center justify-end">


                    <Image quality={70}
                        src="/assets/services/technological-background.png" alt=""
                        className="h-auto"
                        width={628}
                        height={610}
                        priority
                    />

                </div>
            </div>
        </>
    );
}
