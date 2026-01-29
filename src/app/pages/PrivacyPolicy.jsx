'use client'
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { unified } from "unified";
import remarkParse from "remark-parse";
import MainHeader from "@/component/MainHeader";
import Footer from "@/component/Footer";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function PrivacyPolicy({ privacyPolicy, contactInfo }) {

    const markdown = privacyPolicy?.data?.Privacy || "";
    const [loaded, setLoaded] = useState(false);
   

    return (
        <Provider store={store}>
            <div className="relative h-full">
                <div className={'relative z-10 text-white pt-[100px] '}>
                    <MainHeader />
                   
                    <div
      className="privacy_policy prose w-full relative z-10 md:px-[50px]"
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
                   
                    <Footer contactInfo={contactInfo} />
                    <div className="absolute left-0 top-0 w-full h-full overflow-hidden z-0">
                        <div className={'absolute top-[-151px] md:top-[-300px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#79FD66] to-[#27E7DB] blur-[110px] md:blur-[150px] opacity-80 rounded-full w-[291px] h-[252px] md:w-[550px] md:h-[476px]'}>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full min-h-full h-full overflow-hidden z-0">
                        <div className='absolute rounded-full bottom-[-140px] md:bottom-[-350px] left-1/2 md:left-1/2 transform -translate-x-1/2 bg-gradient-to-tl from-[#27E7DB] to-[#79FD66] blur-[100px] md:blur-[250px] opacity-80 w-[323px] md:w-[550px] h-[280px] md:h-[476px]'>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    );
} 