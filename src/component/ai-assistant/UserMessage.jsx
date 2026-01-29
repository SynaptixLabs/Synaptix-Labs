import React from 'react';

const UserMessage = ({ message }) => {
    const details = ['John Doe', 'johndoe@gmail.com', '+111 (00) 111-11-11'];
    return (
        <div className="ai-message flex justify-end mt-[20px]">
        <div className='w-full flex flex-col items-end'>
            <div className='flex items-center gap-[10px]  mb-[12px]'>
           <span className='font-[400] text-[16px]'>You</span>  <span className='flex inline-flex bg-[#233943] rounded-[4px] p-[6px]'>
                    <img src="./assets/ai-chat/Users.svg" className='w-[24px] h-[24px]' alt="" />
                </span>

            </div>

            <div className='max-w-[392px] lg:min-w-[392px]  rounded-[16px] rounded-tr-[0px]  bg-[#233943] p-[16px]'>
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

export default UserMessage;
