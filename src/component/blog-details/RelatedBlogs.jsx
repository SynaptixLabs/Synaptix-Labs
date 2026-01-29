import React from "react";
import { CalendarDays } from "lucide-react";
import ChildCards from "../blog/ChildCards";
import { Swiper, SwiperSlide } from "swiper/react"; // Importing the Swiper component
import "swiper/swiper-bundle.css"; // Importing Swiper styles
import { Autoplay } from "swiper/modules";

const RelatedBlogs = ({catagoryBlogs}) => {
 

    return (
        <div className="mt-[40]">
            <div className="text-center mb-[39px]">
            <span className="text-center text-[24px] md:text-[32px] font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300 mb-[10px] md:mb-5">Latest Related Blogs</span>
            </div>
        <Swiper
            spaceBetween={23}
            slidesPerView={1}
            loop={true}
            autoHeight={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            className=""
        >
            {catagoryBlogs?.map((trend, index) => (
                <SwiperSlide className="p-4 " key={index}>
                    <ChildCards trend={trend} index={index} />
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
};

export default RelatedBlogs;