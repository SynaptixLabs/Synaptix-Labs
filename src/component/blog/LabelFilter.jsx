import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter, useSearchParams } from 'next/navigation';
const LabelFilter = ({getCategory,setLoadingTime}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeLabel, setActiveLabel] = useState("");
  const [serchCtagory, setSerchCtagory] = useState('')
  useEffect(() => {
    if (activeLabel || (serchCtagory || serchCtagory=='')) {
      const category = (activeLabel === 'All') ? '' : activeLabel;
      const params = new URLSearchParams(searchParams.toString());
      setLoadingTime(true)
      if (category) {
          params.delete('categorySearch');
          params.set('category',category);
          setSerchCtagory('')
      
      } else if(serchCtagory){
              params.set('categorySearch',serchCtagory);
              params.delete('category',);
      } else {
        params.delete('categorySearch');
        params.delete('category');
      }
      params.set('page', '10');
      router.push(`?${params.toString()}`);
    }
  }, [activeLabel,serchCtagory]);
  
  return (
    <div className="md:flex md:justify-end sticky top-[100px]">
    <div className=" text-white md:px-6 rounded-xl w-full md:max-w-sm space-y-6 font-sans ">
      {/* Search Box */}
      <div className="space-y-2">
        <h2 className="text-[20px] font-medium">Search</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Type to Search"
            // value={serchCtagory}
            onChange={(e) => {
              clearTimeout(window.labelFilterDebounce);
              window.labelFilterDebounce = setTimeout(() => {
                setSerchCtagory(e.target.value);
                e.target.value ?  setActiveLabel(e.target.value):  setActiveLabel('All');
              }, 300);
            }}
            className="w-full pl-4 pr-10 py-2 rounded-xl bg-[#9CFFF41F] relative
            text-white placeholder-gray-400 border border-[#A6AFB44D] focus:outline-none focus:ring-0.1 focus:ring-[#A6AFB44D]"
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white" />
        </div>
      </div>
      <div className="my-[20px] border border-1 border-white/40 w-full opacity-20"></div>
      {/* Labels */}
      <div className="space-y-2">
        <h2 className="text-[20px] font-medium">Choose label</h2>
        <div className="flex flex-wrap gap-2">
          <button
            key="all"
            onClick={() => setActiveLabel('All')}
            className={`cursor-pointer px-[20px] py-[6px] rounded-full border border-white text-[16px] font-medium transition-all ${
              ((activeLabel === 'All') ||  activeLabel === '' )
                ? "text-[#36C1B1] border-white"
                : "text-white hover:border-white hover:text-[#36C1B1]"
            }`}
          >
            All
          </button>
          {getCategory?.data?.map((label) => (
            <button
              key={label.id}
              onClick={() => setActiveLabel(label.name)}
              className={`cursor-pointer px-[20px] py-[6px] rounded-full border border-white text-[16px] font-medium transition-all ${
                activeLabel === label.name
                  ? "text-[#36C1B1] border-white"
                  : "text-white hover:border-white hover:text-[#36C1B1]"
              }`}
            >
              {label.name}
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default LabelFilter;
