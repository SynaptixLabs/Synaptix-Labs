'use client';
import React, { useEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import ChildCards from "./ChildCards";
import Loader from "../Loader";
import MotionWrapper from "../MotionWrapper";
import { useRouter } from "next/navigation";



const TrendsChilds = ({trendsChilds,articles,loadingTime}) => {
    const scrollRef = useRef(null);
    const [scrollingloadingTime, setScrollingloadingTime] = useState(false);
    const router = useRouter();
    const [searchParams, setSearchParams] = useState(null);

useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const pagination = articles?.meta?.pagination;
      if (!pagination) return;
      const { page: currentPage, pageCount,total } = pagination;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 100 && currentPage < pageCount && !loadingTime) {
        setScrollingloadingTime(true);
        const params = new URLSearchParams(searchParams);
        params.set('page', total + 10);
        router.push(`?${params.toString()}`, { scroll: false, shallow: true });
        router.refresh();
      
      }
    };
  
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [articles?.meta?.pagination, loadingTime, router, searchParams]);
  


useEffect(()=>{
        trendsChilds &&   setScrollingloadingTime(false);
},[trendsChilds?.length])


    
    return (
        <div className="md:py-4">
        <div   ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[22px]   overflow-y-auto max-h-[1000px] conversation-container ">
            {trendsChilds?.map((trend, index) => (
          <div className="mt-[40px] relative" key={index}>
              <ChildCards trend={trend} index={index}/>
               { loadingTime && <div className='absolute left-0 top-0 z-[1000] h-full w-full bg-black/10 '>
                        <Loader />
                       </div>
                       } 
               </div>
                      
            ))}
               {scrollingloadingTime&&  <div className=""> <Loader /></div>}
            </div>

        </div>
    );
};

export default TrendsChilds;