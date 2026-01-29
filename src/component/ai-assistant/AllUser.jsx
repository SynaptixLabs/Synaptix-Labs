import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight } from "lucide-react";
import { CloudUpload, ClipboardList, Puzzle } from "lucide-react";
import { showConversation } from "@/store/conversationSlice";
const steps = [
    {
        icon: './assets/ai-chat/CloudUpload.svg',
        title: "Uploading raw product ideas & brainstorming notes",
        color: "text-green-400",
    },
    {
        icon: './assets/ai-chat/ClipboardList.svg',
        title: "Structuring information into a clear, organized PRD",
        color: "text-cyan-400",
    },
    {
        icon: './assets/ai-chat/Puzzle.svg',
        title: "Refining your vision into actionable steps",
        color: "text-orange-400",
    },
];

export default function AllUser(){
    const isVisible = useSelector((state) => state.conversation.isVisible);
    const dispatch = useDispatch();

    const handleTestAI = () => {
        dispatch(showConversation()); 
    };
    if (isVisible) return null;
    return (
        <div className="text-white py-12 px-6 flex flex-col items-center">
            <h1 className="text-[34px]/[38px] font-bold text-center max-w-xl mb-4">
                Transform scattered ideas into strategic direction
            </h1>
            <p className="text-center text-lg/[22px] font-normal mb-10 max-w-[330px]">
                Let's turn your vision into reality—just drop in your data, and let AI do the rest!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-2xl">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-[#233943] rounded-[20px] px-[22px] py-[31px] flex flex-col items-center text-center"
                    >
                        <div className={`text-4xl pb-[15px] ${step.color}`}>
                            <img src={step.icon} alt=""/>
                        </div>
                        <p className="text-white text-base/[20px] font-normal">{step.title}</p>
                    </div>
                ))}
            </div>


            <button    onClick={handleTestAI} className="bg-gradient-to-r from-[#36C1B1] to-[#3CDD61] text-white text-base font-medium px-6 py-2 rounded-full flex items-center gap-2">
                Test our AI <ArrowRight size={20} />
            </button>
        </div>
    );
}
