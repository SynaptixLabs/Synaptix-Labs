
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const BannerSlider = ({aboutBanner}) => {
  const slides = 
    {
      images: aboutBanner?.data?.images || [] ,
      stats: [
        { value: aboutBanner?.data?.totalProject, label: aboutBanner?.data?.projectText },
        { value: aboutBanner?.data?.SatisfiedCustomer, label: aboutBanner?.data?.customerText},
      ],

    };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };


  return (
    <div className='relative w-full  '>
      <div className="absolute top-0 right-0 bg-[#DEEA8A] w-[40px] h-[93px] md:w-[70px] md:h-[207px]  z-10"></div>

      <Swiper
        onSlideChange={handleSlideChange}
        effect={'fade'}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const backgroundColor = index === activeIndex ? '#36C1B1' : '#90FFF275';
            return `<span class="${className}" style="background-color: ${backgroundColor}; height: 9px; width: 9px; display: ${window.innerWidth < 640 ? 'none' : 'inline-block'};"></span>`;
          },
        }}
        
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay,EffectFade]}
        className={`w-full `} // Responsive height
      >
        {slides?.images?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-no-repeat md:aspect-16/7"
            
            >


              <Image quality={70}
                                        src={slide.url}
                                        alt={'' || ''}
                                        className={`w-full h-[300px]! md:h-full! object-cover rounded-lg  opacity-100`}
                                        layout="fill"
                                        objectFit="cover"
                                        priority
                                      />
              <div className="absolute bottom-4 md:bottom-10 right-10 md:right-13 flex flex-row gap-10 md:gap-2  md:gap-10 text-white z-10">
                {slides?.stats?.map((stat, i) => (
                  <div key={i} className="text-center md:text-left "> 
                    <div className="text-3xl font-bold ">
                      <h2 className=" font-bold text-[32px] md:text-[42px] leading-[46px] tracking-[-0%]    mb-5 max-w-[570px]">{stat.value}</h2>
                    </div>
                    <div className="text-sm">
                      <p className=" font-normal text-[16px] md:text-[18px] leading-[18px] tracking-0">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='w-[77px] h-[77px] md:w-[144px] md:h-[144px] rounded-full bg-[#FFBD92] absolute left-[-40px] md:left-[-72px] bottom-[-36px] md:bottom-[-72px] z-10'></div>
    </div>
  );
};

export default BannerSlider;
