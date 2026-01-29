'use client'
import React, { useEffect, useState } from "react";
import MainHeader from "@/component/MainHeader";
import CallToAction from "@/component/CallToAction";
import Footer from "@/component/Footer";
import Banner from "@/component/blog-details/Banner";
import ReadingText from "@/component/blog-details/ReadingText";
import TableOfContents from "@/component/blog-details/TableOfContents";
import RelatedBlogs from "@/component/blog-details/RelatedBlogs";
import Loader from "@/component/Loader";
import MotionWrapper from "@/component/MotionWrapper";
import { Provider } from "react-redux";
import store from "@/store/store";
export default function BlogDetails({ articles, allBlog,contactInfo }) {
    const [trendsChilds, setTrendsChilds] = useState([]);
    const [catagoryBlogs, setCategoryBlogs] = useState([])
    const [selectedSection, setSelectedSection] = useState();
    const [headingText, setHeadingText] = useState(null)
    useEffect(() => {
        if (!articles) return;

        const fetchArticles = async () => {
            if (articles) {
                setTrendsChilds(articles?.data);
            }
        }
        fetchArticles();
    }, [articles]);

    useEffect(() => {
        if (allBlog && trendsChilds?.length > 0) {
            const currentCategory = trendsChilds[0]?.categories[0]?.name;
            const currentId = trendsChilds[0]?.id;
            const filtered = allBlog?.data?.filter((item) => {
                return item.categories?.some(category => category.name === currentCategory) && item.id !== currentId;
            });
            setCategoryBlogs(filtered);
        }
    }, [allBlog, trendsChilds]);



    return (
        <Provider store={store}>
        
        <div className="relative ">
            <div className="relative z-10">

                <div className="pt-[70px] md:pt-[90px] flex flex-col justify-between items-start h-full">
                    <MainHeader/>
                    {!trendsChilds || trendsChilds.length === 0 ? (
                        <div className="flex items-center justify-center w-full h-[100vh]">
                            <Loader />
                        </div>
                    ) : (
                        <div className="w-full">
                            <div className="px-[20px] md:px-[53px] mx-auto text-white mt-[50px]">
                            <MotionWrapper >    <Banner trendsChilds={trendsChilds} /></MotionWrapper>
                            </div>

                            {trendsChilds[0].content && <div className="px-[20px] md:px-[53px] mx-auto text-white flex flex-col-reverse md:flex-row gap-4 md:gap-[118px] md:py-[50px] relative z-10">
                                <div className="w-full md:w-[70%]">
                                 <ReadingText selectedSection={selectedSection} setHeadingText={setHeadingText} trendsChilds={trendsChilds} />
                                </div>
                                <div className="w-full md:w-[30%]">
                             <TableOfContents headingText={headingText} setSelectedSection={setSelectedSection} />
                                </div>
                            </div>}


                            {catagoryBlogs.length > 0  && <div className="md:px-[53px] mx-auto text-white">
                                <MotionWrapper >  <RelatedBlogs catagoryBlogs={catagoryBlogs} /> </MotionWrapper>
                            </div>}
                        </div>
                    )}
                    <Footer contactInfo={contactInfo} />

                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full min-h-full h-full  overflow-hidden ">
                <div
                    className="absolute rounded-full bottom-[-140px] md:bottom-[-350px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#79FD66] to-[#27E7DB] blur-[120px] md:blur-[150px] opacity-80 w-[323px] md:w-[550px] h-[280px] md:h-[476px]"
                />
            </div>
           
            <div className="absolute left-0 top-0 w-full h-[100dvh]  overflow-hidden">
                <div
                    className={'absolute top-[-151px] md:top-[-300px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#79FD66] to-[#27E7DB] blur-[110px] md:blur-[150px] opacity-80 rounded-full  w-[291px] h-[252px] md:w-[550px] md:h-[476px] '}>
                </div>
            </div>
            
        </div>
        </Provider>
    );
}
