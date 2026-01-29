// App.jsx or FAQ.jsx

import { incrementContactClick } from '@/store/conversationSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
export default function QuestionLook({ questionsResponse }) {
  const [openIndex, setOpenIndex] = useState(0);
  const dispatch = useDispatch();
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-white md:py-[12px] font-sans">
      <div className="">
        <h1 className="text-[24px] md:text-[42px] font-bold mb-[25px] md:mb-[70px]">
          Question? <span className="text-[#36C1B1] ">Look here.</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-6">


          <div className="flex-1 space-y-3">
            {questionsResponse?.data?.sort((a, b) => a?.order - b?.order)
              .map((faq, index) => (
                <div
                  key={faq?.id || index}
                  className={`rounded-[16px] p-4 questin_bg transition-all duration-300 ${openIndex === index ? '' : 'cursor-pointer'
                    }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center pr-[30px] relative">
                    <span className="whitespace-pre-line">{faq?.question}</span>
                    <span className="text-cyan-400 text-xl">
                      <Image
                        src="/assets/services/dropdown-arrow.svg" alt=""
                        className={`absolute top-1/2 right-0 transform -translate-y-1/2 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-90'
                          }`}
                        width={22}
                        height={13}
                        quality={70}
                        priority
                      />


                    </span>
                  </div>

                  {/* Animated answer */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${openIndex === index ? 'max-h-[500px] mt-2' : 'max-h-0'
                      }`}
                  >
                    <p className="text-sm text-white/80 whitespace-pre-line">{faq.answer}</p>
                  </div>
                </div>
              ))}
          </div>


          {/* Contact Card */}
          <div className="w-full md:w-[280px] bg-[#13283d] rounded-xl flex flex-col items-center justify-center py-[28px] px-[20px]  md:p-6 text-center md:h-[233px] sticky top-[100px]">
            <div className="text-white  w-12 h-12 flex items-center justify-center text-xl mb-[12px]">

              <Image
                src="/assets/services/question.png" alt=""

                width={38}
                height={38}
                quality={70}
                priority
              />
            </div>
            <p className="mb-4 text-white/90 text-[18px] leading-[22px] tracking-[-0%] text-center  font-bold">Do you have different question?</p>
            <button onClick={() => { dispatch(incrementContactClick()); }} className="bg-gradient-to-r cursor-pointer from-[#36C1B1] to-[#3CDD61] text-white px-[27px] py-[12px] rounded-full text-sm font-medium  font-[500] text-[16px] leading-[16px] tracking-[-0%] text-center">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
