'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MainHeader from "@/component/MainHeader";
import OurJourney from "@/component/about/OurJourney";
import BannerSlider from "@/component/about/BannerSlider";
import TeamMembers from "@/component/about/TeamMembers";
import VisionMissionSection from "@/component/about/VisionMissionSection";
import SynaptixLabs from "@/component/about/SynaptixLabs";
import CallToAction from "@/component/CallToAction";
import Footer from "@/component/Footer";
import MotionWrapper from "@/component/MotionWrapper"; // Import the wrapper
import { Provider } from "react-redux";
import store from "@/store/store";

export default function About({ allTeamMembers, contactInfo, aboutBanner,synaptixLabsToday,visionAndInnovation }) {
  
  

  return (
    <Provider store={store}>
    <div className="overflow-hidden relative">
      <div className={'absolute top-[-151px] md:top-[-300px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#79FD66] to-[#27E7DB] blur-[110px] md:blur-[150px] opacity-80 rounded-full w-[291px] h-[252px] md:w-[550px] md:h-[476px] '}></div>

      <div className="pt-[90px]">
        <MainHeader/>

        <div className={'px-[20px] md:px-[53px] mx-auto text-white'}>
          <MotionWrapper >
            <OurJourney />
          </MotionWrapper>
        </div>

        <MotionWrapper >
          <BannerSlider aboutBanner={aboutBanner} />
        </MotionWrapper>

        <MotionWrapper >
          <TeamMembers allTeamMembers={allTeamMembers} />
        </MotionWrapper>

        <div className={'px-[20px] md:px-[53px] mx-auto text-white'}>
          <MotionWrapper>
            <VisionMissionSection visionAndInnovation={visionAndInnovation} />
          </MotionWrapper>
        </div>

        <div className={'container mx-auto text-white'}>
          <MotionWrapper animation = 'fade-up-right'>
            <SynaptixLabs synaptixLabsToday={synaptixLabsToday} />
          </MotionWrapper>
        </div>

        <div className={'px-[20px] md:px-[53px] mx-auto text-white'}>
          <MotionWrapper >
            <CallToAction aboutBanner={aboutBanner}/>
          </MotionWrapper>
        </div>

        <Footer contactInfo={contactInfo}  />
      </div>

      <div className='absolute rounded-full bottom-[-140px] md:bottom-[-350px] left-1/2 transform -translate-x-1/2 bg-gradient-to-tl from-[#27E7DB] to-[#79FD66] blur-[120px] md:blur-[250px] opacity-80 w-[323px] md:w-[550px] h-[280px] md:h-[476px] '></div>
    </div>
    </Provider>
  );
}
