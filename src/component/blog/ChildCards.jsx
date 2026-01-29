import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Loader from "../Loader";
import { FaSpinner } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation'
import MotionWrapper from "../MotionWrapper";
import ImageWithSkeleton from "../ImageWithSkeleton";
import Image from "next/image";
const ChildCards = ({ trend, index }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    const handleCardClick = () => {
        router.push(`/blog/${trend?.slug}`);
        setLoading(true)
    };
    useEffect(() => {
        trend && setLoading(false);
        
    }, [trend])

    return (
        <div className="text-white  rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="relative cursor-pointer" onClick={handleCardClick}>
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background:
                            'linear-gradient(360deg, rgba(0, 0, 0, 0.44) 32.37%, rgba(0, 0, 0, 0.2332) 47.77%, rgba(0, 0, 0, 0.00456038) 100%)',
                    }}
                ></div>

                {/* h-[255px] */}
           
                                <Image
                                    src={trend?.previewImage?.url}
                                    alt={'df' || ''}
                                    className={`block w-full  aspect-16/9 opacity-100!  rounded-[20px] h-full!  relative!`}
                                    layout="fill"
                                    priority="true"
                                    quality={70}
                                />

                <div className="absolute bottom-0 left-0">
                    <span className="line-clamp-1 inline-flex ml-[25px] mb-[20px] px-[20px] py-[6px] font-normal text-[16px] leading-[16px] border rounded-full border-white text-white">
                        {category && trend?.categories?.some(item => item.name === category)
                            ? (category?.length > 15 ? `${category?.substring(0, 15)}...` : category)
                            : (trend?.categories[0]?.name?.length > 15 ? `${trend?.categories[0]?.name?.substring(0, 15)}...` : trend?.categories[0]?.name)}
                    </span>
                </div>

                <div className="absolute h-[37px] w-[37px] bottom-[16px] right-[18px] flex justify-center items-center">
                    {loading ? <>
                        <FaSpinner className="animate-spin" size={20} />
                    </> : <img
                        src="/assets/blog/proicons-arrow-up.svg"
                        onClick={handleCardClick}
                        className="cursor-pointer text-white"
                        alt=""
                    />} </div>
            </div>
            <div className="pt-[20px]">
                <h2 className="text-white font-bold text-[18px] leading-[26px] mb-2 line-clamp-2">
                    {trend.title}
                </h2>
                <p className="text-white/85 font-normal text-[16px] leading-[20px] mb-[20px] line-clamp-2">
                    {trend.description}
                </p>
                <div className="flex items-center w-fit">
                    {trend?.author?.authImage?.url && <img
                        src={`${trend?.author?.authImage?.url}`}
                        alt="Profile"
                        className="w-[60px] h-[60px] rounded-full object-cover me-[15px]"
                    />}
                    <div>
                        <h2 className="text-[18px] text-white font-semibold">
                            {trend?.author?.authName}
                        </h2>
                        <p className="text-[#36C1B1] text-[16px]">
                            {trend?.uploaded}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildCards;
