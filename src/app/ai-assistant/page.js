'use client'
import Image from "next/image";
import Link from "next/link";
import MainHeader from "@/component/MainHeader";
import InnerSidebar from "@/component/ai-assistant/InnerSidebar";
import AllUser from "@/component/ai-assistant/AllUser";
import SignIn from "@/component/ai-assistant/SignIn";
import FirstReply from "@/component/ai-assistant/FirstReply";
import Conversation from "@/component/ai-assistant/Conversation";
import { Provider } from "react-redux";
import store from "@/store/store";


export default function page() {
    return (
        <Provider store={store}>
            <div className="overflow-hidden h-screen fixed left-0 top-0 w-full">
                <div
                    className='absolute top-[-100px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#27E7DB] to-[#79FD66] 
                blur-[200px] opacity-80 rounded-full w-[327px] h-[283px] '>
                </div>

                <div
                    className='absolute rounded-full bottom-[-140px] md:bottom-[-200px] left-1/2   md:left-1/2  
                     transform -translate-x-1/2 bg-gradient-to-tl from-[#27E7DB] to-[#79FD66] blur-[120px] md:blur-[200px] opacity-80 w-[323px] md:w-[327px]
                      h-[280px] md:h-[283px] '>
                </div>
            </div>
            <div className=" relative z-10 h-[100dvh]">

                <div className=" pt-[60px]  md:pt-[90px] ">

                    <MainHeader />

                    <div className={'grid grid-cols-8 mt-[48px] px-[20px] md:px-[53px] w-full mx-auto text-white'}>
                        <div className="col-span-4 md:col-span-2 order-1 md:order-1">
                            <InnerSidebar />
                        </div>
                        <div className="col-span-8 md:col-span-4 order-3 md:order-2">
                            <AllUser />

                            <Conversation/>
                        </div>
                        <div className="col-span-4 md:col-span-2 order-2 md:order-3 flex items-start justify-end">
                            <SignIn />
                        </div>
                    </div>

                </div>


            </div>
       </Provider>
    );
}
