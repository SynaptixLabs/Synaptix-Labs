'use client'
import Image from "next/image";
import Link from "next/link";
import MainHeader from "@/component/MainHeader";
import HeroSections from "@/component/HeroSections";
import CompanyName from "@/component/CompanyName";
import AIProduct from "@/component/AIProduct";
import Services from "@/component/Services";
import OurClients from "@/component/OurClients";
import CallToAction from "@/component/CallToAction";
import Footer from "@/component/Footer";
import AIProductMobileView from "@/component/home/AiproductMobilView";
import MotionWrapper from "@/component/MotionWrapper";
import { Provider } from "react-redux";
import store from "@/store/store";


export default function Home({brandLogo,contactInfo,feedback,aboutBanner}) {
    

    return (
        <Provider store={store}>
        <div className="overflow-hidden relative">
            <div className={' text-white pt-[100px] px-[20px] md:px-[53px]'}>
                <MainHeader />
                <img className='w-[34vw] hidden xl:block  2xl:w-[36vw] absolute  left-[-66px] 2xl:left-[-32px] z-[100] 2xl:z-[0] top-[70px] 2xl:top-[65px] ' src="./assets/images/borderline1.png" alt="Star"></img>
                 <HeroSections />
            

            </div>
            <div className={'md:px-[53px]'}>
            <MotionWrapper > <CompanyName brandLogo={brandLogo}/></MotionWrapper>
            </div>
            <div className="hidden md:block w-full">
             <AIProduct />
            </div>
            <div className="block md:hidden w-full">
            <MotionWrapper > <AIProductMobileView /></MotionWrapper>
            </div>
            <div className={'px-[20px] md:px-[53px] mx-auto text-white pt-[30px] md:pt-[100px]  relative'}>
            <MotionWrapper >    <Services /></MotionWrapper>
            </div>
            <MotionWrapper >  <OurClients feedback={feedback} /> </MotionWrapper>
            <div className={'px-[20px] md:px-[53px] mx-auto text-white mt-[50px] md:mt-[130px]'}>
            <MotionWrapper ><CallToAction aboutBanner={aboutBanner}/></MotionWrapper>
            </div>
            <Footer contactInfo={contactInfo}/>
            <div
                className={'absolute rounded-full bottom-[-36px] md:bottom-[-350px] left-[119px] md:left-1/2   transform -translate-x-1/2 bg-gradient-to-r from-[#27E7DB] to-[#79FD66] blur-[144px] md:blur-[250px] opacity-80 w-[347px] md:w-[550px] h-[262px] md:h-[476px] '}>
            </div>
        </div>
        </Provider>
    );
}
