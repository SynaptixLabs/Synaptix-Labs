import React from 'react';

const AiMessage = ({ message }) => {
    const details = ['Name', 'Email', 'Phone number'];

    return (
        <div className="ai-message ">
            <div className='w-full'>
                <div className='flex items-center gap-[10px]  mb-[12px]'>
                    <span className='flex inline-flex bg-[#233943] rounded-[4px] p-[6px]'>
                        <img src="./assets/ai-chat/ai-icon.png" className='w-[24px] h-[24px]' alt="" />
                    </span>
                    <span className='font-[400] text-[16px]'>Assistant</span> 
                </div>

                <div className='max-w-[634px]  rounded-[16px] rounded-tl-[0px]  bg-[#233943] p-[16px]'>
                    <p className='mb-[8px] font-[400] text-[16px] leading-[135%] tracking-[0%] '>Hey, nice to see you here! Please share some details with us to get started:</p>
                    <ul className='font-[400] text-[16px] leading-[135%] tracking-[0%]'>
                        {details?.map((detail, index) => (
                            <li className='ps-[25px] relative before:w-[3px] before:rounded-full before
                             before:h-[3px] before:bg-white before:absolute before:left-[10px] before:top-1/2  before:-translate-y-1/2 ' key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AiMessage;
