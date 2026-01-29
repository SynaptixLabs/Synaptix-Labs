'use client'
import MainHeader from "@/component/MainHeader";
import CallToAction from "@/component/CallToAction";
import Footer from "@/component/Footer";
import Trends from "@/component/blog/Trends";
import TrendsChilds from "@/component/blog/TrendsChilds";
import LabelFilter from "@/component/blog/LabelFilter";
import { useEffect, useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { setCategoryName } from "@/store/articleSlice";
import store from "@/store/store";
import MotionWrapper from "@/component/MotionWrapper";

export default function Blog({ articles, getCategory, favouriteArticles, contactInfo,aboutBanner }) {
    return (
        <Provider store={store}>
            <BlogContent articles={articles} getCategory={getCategory} favouriteArticles={favouriteArticles} contactInfo={contactInfo} aboutBanner={aboutBanner}/>
        </Provider>
    );
}
function BlogContent({ articles, getCategory, favouriteArticles, contactInfo ,aboutBanner}) {
    const [loadingTime, setLoadingTime] = useState(true)
    const { categoryName } = useSelector((state) => state.article);
    const dispatch = useDispatch();
    const [isScrolled, setIsScrolled] = useState(false);
    const [trendsChilds, setTrendsChilds] = useState(articles?.data?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))|| []);
    const [trends, setTrends] = useState(articles?.data?.filter(item => item.favourite).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) || []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        if (articles) {
            const allItems = articles.data || [];
            setTrends(allItems?.filter(item => item.favourite).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
            setTrendsChilds(allItems?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
            setLoadingTime(false);
        }
    }, [articles]); 
    

    return (<>
        <div className="relative ">
            <div className="relative z-10">

                <div className="pt-[70px] md:pt-[90px] ">
                    <MainHeader setScrollData={setIsScrolled} />
                    <div className="px-[20px] lg:px-[53px] text-white flex flex-col-reverse md:flex-row gap-4 py-[50px] w-full relative z-10">
                        <div className="w-full md:w-[70%]">
                            {(trends?.length > 0 || trendsChilds?.length > 0) ? (
                                <> 
                                    <MotionWrapper> <Trends loadingTime={loadingTime} trends={favouriteArticles?.data} /></MotionWrapper>
                                      <TrendsChilds loadingTime={loadingTime} trendsChilds={trendsChilds} articles={articles} /> 
                                </>
                            ) : (
                                <>
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="md:ms-[150px] text-center text-white py-4 min-h-[251px] w-[214px] max-auto">
                                            <img src="/assets/blog/nodata.png" className="mb-[24px]" alt="" />
                                            <h2 className="font-[500] text-[20px] leading-[20px] tracking-0 text-center mb-[8px]">
                                                No Results Found
                                            </h2>
                                            <p className="text-[16px] font-[400] leading-[18px] text-center">Try adjusting your search to find what you are looking for</p>
                                        </div>
                                    </div>
                                </>

                            )}
                        </div>
                        <div className="w-full md:w-[30%]">
                            <LabelFilter getCategory={getCategory} setLoadingTime={setLoadingTime} setFilter={(value) => { dispatch(setCategoryName(value)) }} />
                        </div>
                    </div>
                    <div className="px-[20px] md:px-[53px] mx-auto text-white">
                        <MotionWrapper> <CallToAction aboutBanner={aboutBanner} /></MotionWrapper>
                    </div>
                    <div className="w-full">
                        <Footer contactInfo={contactInfo} />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full min-h-full h-full overflow-hidden ">
                <div
                    className="absolute rounded-full bottom-[-140px] md:bottom-[-350px] left-1/2 transform -translate-x-1/2 bg-gradient-to-tl from-[#27E7DB] to-[#79FD66] blur-[120px] md:blur-[250px] opacity-80 w-[323px] md:w-[550px] h-[280px] md:h-[476px]"
                />
            </div>
            {isScrolled && (
                <button
                    onClick={scrollToTop}
                    className="cursor-pointer text-white rounded-full rotate-[-90deg] fixed bottom-[30px] md:bottom-[70px] right-[30px] md:right-[100px] z-10"
                >
                    <img src="/assets/solution/next.svg" alt="" />
                </button>
            )}
            <div className="absolute left-0 top-0 w-full h-[100dvh]  overflow-hidden">
                <div
                    className={'absolute top-[-151px] md:top-[-300px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#79FD66] to-[#27E7DB] blur-[110px] md:blur-[150px] opacity-80 rounded-full  w-[291px] h-[252px] md:w-[550px] md:h-[476px] '}>
                </div>
            </div>
        </div>
    </>
    );
}
