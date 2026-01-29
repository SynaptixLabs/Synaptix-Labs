import React from 'react';
import { ArrowRight } from "lucide-react";


const InnerSidebar = () => {
    return (
        <div className=" ">
             <div className={'flex items-center gap-4'}>
                <button className='p-[10px] rounded-[10px] bg-[#233943]'>
                <img src="./assets/ai-chat/sidebar.svg" alt="" />
                </button>
                 <button className='p-[10px] rounded-[10px] bg-[#233943]'>
                <img src="./assets/ai-chat/plausBorder.svg" alt="" />
                </button>
             </div>

            <div>
                <div className="text-white max-w-[275px] mt-5">
                    <h3 className="text-xl font-medium pb-5">Conversations</h3>
                    <p className="pb-5 text-base font-normal text-white/80">
                        Conversations with Assistant will be shown here. Sign in to keep your conversations.
                    </p>
                    <button className="flex items-center justify-center gap-2 px-[22px] py-4 rounded-[10px] text-white font-medium text-base bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] w-full">
                        Sign in <ArrowRight size={20} />
                    </button>
                </div>
            </div>


            <div className={'mt-10 max-w-[275px]'}>
                <h3 className="text-xl font-medium pb-5">Conversations</h3>

                <div className="flex items-center gap-2 bg-[#1F363C] p-4 rounded-[10px] mb-2.5">
                    <img src="./assets/ai-chat/MessageCircle.svg" alt="#"/>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#233943] from-60% truncate text-base font-normal">Real estate trading SaaS platform</p>
                </div>

                <div className="flex items-center gap-2 bg-[#1F363C] p-4 rounded-[10px] mb-2.5">
                    <img src="./assets/ai-chat/MessageCircle.svg" alt="#"/>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#233943] from-60% truncate text-base font-normal">Smart investment calculator web app</p>
                </div>

                <div className="flex items-center gap-2 bg-[#1F363C] p-4 rounded-[10px] mb-2.5">
                    <img src="./assets/ai-chat/MessageCircle.svg" alt="#"/>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#233943] from-60% truncate text-base font-normal">Customer Relationship Management</p>
                </div>

                <div className="flex items-center gap-2 bg-[#1F363C] p-4 rounded-[10px] mb-2.5">
                    <img src="./assets/ai-chat/MessageCircle.svg" alt="#"/>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#233943]  from-60% truncate text-base font-normal">AI-powered Customer Service Assistant</p>
                </div>
            </div>
            
        </div>
    );
};

export default InnerSidebar;
