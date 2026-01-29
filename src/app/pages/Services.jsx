'use client'
import Image from "next/image";
import Link from "next/link";
import MainHeader from "@/component/MainHeader";
import LabServices from "@/component/services/LabServices";
import CoreServices from "@/component/services/OurServices";
import WhyTrust from "@/component/services/WhyTrust";
import QuestionLook from "@/component/services/QuestionLook";
import ContactUs from "@/component/services/ContactUs";
import SubscribeSection from "@/component/services/SubscribeSection";
import Footer from "@/component/Footer";
import { useEffect, useState } from "react";
import MotionWrapper from "@/component/MotionWrapper";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Page({ allService, contactInfo, questionsResponse, trustVideo, serviceName,latestBlog }) {
    const [contact, setcontactUs] = useState([]);

    return (
        <Provider store={store}>
            <div className=" relative">
                <div className="relative z-10">
                    <div className=" pt-[60px]  md:pt-[90px]">

                        <div className={'container mx-auto text-white'}>
                            <MainHeader />

                        </div>
                        <MotionWrapper> <LabServices /></MotionWrapper>

                        <div className={'px-[20px]  md:px-[53px] mx-auto text-white'}>
                            {allService?.data?.length > 0 && <MotionWrapper>  <CoreServices allService={allService} contactInfo={contactInfo} /> </MotionWrapper>}
                            <MotionWrapper >  <WhyTrust trustVideo={trustVideo} /></MotionWrapper>
                            {questionsResponse?.data?.length > 0 && <MotionWrapper>   <QuestionLook questionsResponse={questionsResponse} /></MotionWrapper>}
                        </div>
                        <MotionWrapper >
                            <ContactUs latestBlog={latestBlog} contactInfo={contactInfo} serviceName={serviceName} /></MotionWrapper>
                        <MotionWrapper >
                            <div className={'px-[20px] md:px-[53px] mx-auto text-white'}>
                                <SubscribeSection />

                            </div></MotionWrapper>

                        <Footer contactInfo={contactInfo} />
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full min-h-full h-full  overflow-hidden ">
                    <div
                        className={'absolute top-[-151px] md:top-[-300px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#79FD66] to-[#27E7DB] blur-[110px] md:blur-[150px] opacity-80 rounded-full  w-[291px] h-[252px] md:w-[550px] md:h-[476px] '}>
                    </div>
                </div>


                <div className="absolute left-0 top-0 w-full h-full  overflow-hidden">
                    <div
                        className='absolute rounded-full bottom-[-140px] md:bottom-[-350px] left-1/2   md:left-1/2  
                 transform -translate-x-1/2 bg-gradient-to-tl from-[#27E7DB] to-[#79FD66] blur-[100px] md:blur-[250px] opacity-80 w-[323px] md:w-[550px] h-[280px] md:h-[476px] '>
                    </div>
                </div>


            </div>
        </Provider>
    );
}
