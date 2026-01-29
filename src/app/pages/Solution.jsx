'use client'
import Image from "next/image";
import Link from "next/link";
import MainHeader from "@/component/MainHeader";
import Banner from "@/component/solutions/Banner";
import ChatbotIntegration from "@/component/solutions/ChatbotIntegration";
import DemoVideo from "@/component/solutions/DemoVideo";
import OtherSolutions from "@/component/solutions/OtherSolutions";
import Footer from "@/component/Footer";
import { useState } from "react";
import MotionWrapper from "@/component/MotionWrapper";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Solution({ allSolutionData,contactInfo,othersSolutions}) {
    const [solutionPage, setSolutionPage] = useState('replyFast')
    const [slidePrev, setSlidePrev] = useState([]);
    const [slideNext, setSlideNext] = useState([]);

    


    return (
        <Provider store={store}>
        <div className="overflow-hidden relative">
            <div className="px-[20px] md:px-[53px] mx-auto text-white pt-[90px] ">
                <MainHeader    borderBottom={false}/>
                <MotionWrapper>  
                    <Banner getlideNext={slideNext} getlidePrev={slidePrev} allSolutionData={allSolutionData} setSolutionPage={setSolutionPage} /></MotionWrapper>
                    <button 
                    onClick={()=>{
                        setSlidePrev(prev => [...prev, { id: prev.length + 1}]); }} 
                    className="fixed hidden md:block cursor-pointer bg-transprant text-white rounded-full   top-1/2 left-[30px] transform -translate-y-1/2 z-10"
                >
                   <img src="./assets/solution/prev.svg" alt="" />
                </button>
                <button 
                    onClick={()=>{setSlideNext(prev => [...prev, { id: prev.length + 1}])}} 
                     className="hidden md:block cursor-pointer bg-transprant text-white rounded-full  fixed top-1/2 right-[30px] transform -translate-y-1/2 z-10"
                >
                    <img src="./assets/solution/next.svg" alt="" />
                </button>
              <MotionWrapper>  <ChatbotIntegration solutionPage={solutionPage} /></MotionWrapper>
            </div>
            <MotionWrapper>   <div className="px-[20px] md:px-[53px] mx-auto text-white">
                <DemoVideo solutionPage={solutionPage} allSolutionData={allSolutionData} />
            </div>
            </MotionWrapper>
            <MotionWrapper>     <div className=" md:px-[53px] mx-auto text-white">
                <OtherSolutions othersSolutions={othersSolutions}/>
            </div>
            </MotionWrapper>
            <Footer contactInfo={contactInfo}/>
            <div
                className='absolute rounded-full bottom-[-140px] md:bottom-[-350px] left-1/2   md:left-1/2  
                 transform -translate-x-1/2 bg-gradient-to-tl from-[#27E7DB] to-[#79FD66] blur-[120px] md:blur-[250px] opacity-80 w-[323px] md:w-[550px] h-[280px] md:h-[476px] '>
            </div>
        </div>
        </Provider>
    );
}
