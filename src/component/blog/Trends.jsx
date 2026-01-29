import { ArrowUpRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import Loader from '../Loader';
import { FaSpinner } from 'react-icons/fa';
import ImageWithSkeleton from '../ImageWithSkeleton';

const Trends = ({ trends, loadingTime }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    const memoizedTrends = useMemo(() => {
        return trends ?? [];
    }, [trends]);






    return (<>
        {memoizedTrends.length > 0 && <div className="trends-section mx-auto text-white relative rounded-[20px]">
            <Swiper className='rounded-[20px]  h-fit! ' onSlideChange={handleSlideChange}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: (index, className) => {
                        const backgroundColor = index === activeIndex ? '#fff' : '#fff';
                        return `<span class="${className}" style="background-color: ${backgroundColor}; height: 9px; width: 9px;"></span>`;
                    },
                }}
                // autoHeight={true}
                // autoplay={{ delay: 3000 }}
                spaceBetween={30}
                loop={true}
                modules={[Pagination, Autoplay]}>
                {memoizedTrends && memoizedTrends.map((trend, index) => (
                    <SwiperSlide key={index} className='rounded-[20px] h-full! relative'>
                        <div className="relative rounded-[20px] h-full! cursor-pointer" onClick={() => { router.push(`/blog/${trend?.slug}`); setLoading(true) }}>
                            {trend?.previewImage?.url &&

                                <Image
                                    src={trend?.previewImage?.url}
                                    alt={'df' || ''}
                                    className={`hidden md:block w-full  aspect-16/9  rounded-[20px] h-full! object-fill! relative!`}
                                    layout="fill"
                                    priority
                                    quality={70}
                                />

                               

                            }
                            {/* w-[858px] h-[528px] */}
                            <div className=" relative md:absolute md:flex items-end rounded-2xl inset-0" style={{ background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.44) 32.37%, rgba(0, 0, 0, 0.2332) 47.77%, rgba(0, 0, 0, 0.00456038) 100%)' }}>
                                <div className=' px-[15px] pb-[30px] pt-0  md:p-[25px]'>
                                    <div className='relative mb-[20px] md:mb-0'>

                                        <span className="absolute left-[12px] bottom-0 md:left-0 md:bottom-0 md:relative mb-[17px] flex inline-flex px-[20px] py-[6px] font-normal text-[16px] leading-[16px] tracking-0
                                        border rounded-full border-white text-white">
                                            {category && trend?.categories?.some(item => item?.name === category)
                                                ? (category?.length > 25 ? `${category.substring(0, 25)}...` : category)
                                                : (trend?.categories[0]?.name?.length > 25 ? `${trend?.categories[0]?.name?.substring(0, 25)}...` : trend?.categories[0]?.name)}
                                        </span>




                                        {trend?.previewImage?.url &&

                                            // <ImageWithSkeleton imageClasname={' rounded-[20px] block md:hidden w-full h-auto'}
                                            //     className='h-full' src={trend?.previewImage?.url} />
                                                <Image
                                    src={trend?.previewImage?.url}
                                    alt={'df' || ''}
                                    className={`block md:hidden w-full  aspect-16/9  rounded-[20px] h-full! object-fill! relative!`}
                                    layout="fill"
                                    priority
                                    quality={70}
                                />
                                        }
                                    </div>

                                    <h2 className="font-bold text-[22px] leading-[26px] tracking-0 mb-[8px] max-w-[569px]">
                                        {trend.title}
                                    </h2>
                                    <p className="font-normal text-[16px] leading-[20px] text-white/85 tracking-0 mb-[15px] max-w-[625px]">
                                        {trend.description}
                                    </p>
                                    <div className="flex items-center rounded-lg w-fit text-white">
                                        {trend?.author?.authImage?.url &&
                                            <ImageWithSkeleton alt="Profile" imageClasname={'rounded-full!'}
                                                className='w-[60px] h-[60px] rounded-full! object-fill! me-[15px]' src={trend?.author?.authImage?.url} />

                                        }
                                        <div>
                                            <h2 className="text-[18px] text-white font-semibold  tracking-0  line-clamp-2">{trend?.author?.authName}</h2>
                                            <p className="text-[#36C1B1] text-[16px] tracking-0  line-clamp-2">{trend?.uploaded}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-[30px] right-[20px] h-[37px] w-[37px] flex justify-center items-center">
                                {loading ? <>
                                    <FaSpinner className="animate-spin" size={20} />
                                </> : <img onClick={() => { router.push(`/blog/${trend?.slug}`); setLoading(true) }} src="/assets/blog/proicons-arrow-up.svg" className="cursor-pointer  text-white" alt="" />}
                            </div>
                            {loadingTime && <div className='absolute left-0 top-0 z-[1000] h-full w-full bg-black/50 '>
                                <Loader />
                            </div>
                            }

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        }
    </>
    );
};

export default Trends;
