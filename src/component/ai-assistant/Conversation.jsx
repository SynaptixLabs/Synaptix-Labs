import React from 'react';
import { useSelector } from 'react-redux';
import AiMessage from './AiMessage';
import UserMessage from './UserMessage';
import FirstReply from './FirstReply';
const Conversation = () => {
    const isVisible = useSelector((state) => state.conversation.isVisible);







    if (!isVisible) return null;
    return (
        <div className=''>
            <div className='w-full flex items-center mb-[30px]'>
                <h5>Today</h5> <div className='flex inline-flex mx-auto   border-b-1 border-[#3B4C56] w-[93%] pt-[4px]'></div>
            </div>
            <div className="conversation-container overflow-auto h-[calc(100dvh-330px)] md:h-[calc(100dvh-300px)] ">
                <AiMessage />
                <UserMessage />
                <FirstReply/>
                <AiMessage />
                <UserMessage />
                <div className='mt-[20px] rounded-full' ref={el => el?.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                    <img src="./assets/ai-chat/ai-loader.svg" className=' animate-spin rounded-full' alt="" />
                </div>
            </div>
            <div>
                <div className="flex items-center p-2 rounded-xl w-full  mt-[20px]">

                    <div className="flex items-center space-x-2 flex-grow bg-[#0f2027] text-white px-4  rounded-[10px] border border-[#A6AFB44D] px-[7px] pr-[35px] relative">
                    <img src="./assets/ai-chat/aitex_image.png" alt="" />
                        <input type="text" placeholder="Message AI Assistant"
                            className="bg-transparent text-white placeholder-gray-400 outline-none w-full" />
                        <button className='absolute right-[15px] top-1/2 -translate-y-1/2'>
                        <img src="./assets/ai-chat/clip.svg" alt="" />
                        </button>
                    </div>


                    <button className="ml-2 flex items-center justify-center h-[52px] w-[52px]  bg-gradient-to-tl from-[#3CDD61] to-[#36C1B1] text-white p-3 rounded-xl">
                            <img src="./assets/ai-chat/send-arrow.svg" alt="wallet" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Conversation;
