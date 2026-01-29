import Image from 'next/image';
import { ExternalLink, MessageSquare, BarChart3 } from 'lucide-react';

export default function ChatbotIntegration({ solutionPage }) {
    const data = [
        {
            siteName: 'replyFast',
            leftSide: {
                text: 'Effortless Chatbot Integration for Your Website',
                textfocus: 'Chatbot Integration',
                desktopImage: '/assets/solution/Chatbot.png',
                mobileImage: '/assets/solution/Frame1.png'
            },
            rightSide: {
                firstItem: {
                    text: 'Scalable AI with a Human Touch',
                    desktopImage: '/assets/solution/Chatbot2.png',
                    mobileImage: '/assets/solution/Frame3.png'
                },
                lastItem: {
                    text: 'Engage Smarter with AI Automation',
                    desktopImage: '/assets/solution/Chatbot3.png',
                    mobileImage: '/assets/solution/Frame2.png'
                }
            }
        },
        {
            siteName: 'backupShop',
            leftSide: {
                text: 'Dashboard - Everything in one place',
                textfocus: 'one place',
                desktopImage: '/assets/solution/backupShop/Chatbot.png',
                mobileImage: '/assets/solution/backupShop/Frame1.png'
            },
            rightSide: {
                firstItem: {
                    text: 'Smart AI Tools',
                    desktopImage: '/assets/solution/backupShop/Chatbot2.png',
                    mobileImage: '/assets/solution/backupShop/Frame2.png'
                },
                lastItem: {
                    text: 'Order Management Workflow',
                    desktopImage: '/assets/solution/backupShop/Chatbot3.png',
                    mobileImage: '/assets/solution/backupShop/Frame3.png'
                }
            }
        },
        {
            siteName: 'youtuberIo',
            leftSide: {
                text: 'Track your videos tasks in one list ',
                textfocus: 'videos tasks',
                desktopImage: '/assets/solution/youtuber/Chatbot.png',
                mobileImage: '/assets/solution/youtuber/Frame1.png'
            },
            rightSide: {
                firstItem: {
                    text: 'Multiple Language Support Transcription',
                    desktopImage: '/assets/solution/youtuber/Chatbot2.png',
                    mobileImage: '/assets/solution/youtuber/Frame2.png'
                },
                lastItem: {
                    text: 'Personal Smart Assistant',
                    desktopImage: '/assets/solution/youtuber/Chatbot3.png',
                    mobileImage: '/assets/solution/youtuber/Frame3.png'
                }
            }
        },

        {
            siteName: 'sentom',
            leftSide: {
                text: 'Flexible Campaign Builder',
                textfocus: 'Campaign Builder',
                desktopImage: '/assets/solution/sentom/Chatbot.png',
                mobileImage: '/assets/solution/sentom/Frame1.png'
            },
            rightSide: {
                firstItem: {
                    text: 'Advanced Property Search',
                    desktopImage: '/assets/solution/sentom/Chatbot2.png',
                    mobileImage: '/assets/solution/sentom/Frame2.png'
                },
                lastItem: {
                    text: 'Blogs by Experts on Real Estates',
                    desktopImage: '/assets/solution/sentom/Chatbot3.png',
                    mobileImage: '/assets/solution/sentom/Frame3.png'
                }
            }
        },
        {
            siteName: 'crm',
            leftSide: {
                text: 'User-friendly Analytics Dashboard',
                textfocus: 'Dashboard',
                desktopImage: '/assets/solution/crm/Chatbot.png',
                mobileImage: '/assets/solution/crm/Frame1.png'
            },
            rightSide: {
                firstItem: {
                    text: 'Lead Management Board',
                    desktopImage: '/assets/solution/crm/Chatbot2.png',
                    mobileImage: '/assets/solution/crm/Frame2.png'
                },
                lastItem: {
                    text: 'Smart AI Assistant for all your needs',
                    desktopImage: '/assets/solution/crm/Chatbot3.png',
                    mobileImage: '/assets/solution/crm/Frame3.png'
                }
            }
        }




    ]



    return (
        <>
            {
                data?.map((item, index) => {
                    return (
                        item?.siteName === solutionPage &&
                        <div key={index} className=" text-white mt-[50px] sm:mt-20 grid sm:grid-cols-12 gap-6 relative aspect-36/17">

                            <div className={'sm:col-span-7 bg-[#13243a] pb-[25px] pt-[44px] sm:pt-[48px]  sm:pb-[99px] ps-[20px] sm:px-[37px] rounded-2xl relative z-10 '}>
                                <div className="absolute top-[18px] sm:top-[0px]  left-[-18px]   transform bg-gradient-to-l from-[#27E7DB] to-[#79FD66]
                     w-[142px] h-[122px] blur-[130px] sm:blur-[150px] 
                                 opacity-100 rounded-full"></div>

                                <div className="absolute top-[20%] hidden sm:block  right-[0] transform bg-gradient-to-r from-[#27E7DB] to-[#79FD66] w-[142px] h-[122px] blur-[300px] sm:blur-[150px] 
                                opacity-100 rounded-full"></div>

                                <div className='relative z-10 w-full '>
                                    <h2 className="text-[20px] sm:text-[26px] font-medium mb-[25px] sm:mb-[72px] text-center pr-[20px] sm:px-0">
                                        {item?.leftSide?.text
                                            ?.split(new RegExp(`(${item?.leftSide?.textfocus})`, 'gi'))
                                            ?.map((part, index) =>
                                                part?.toLowerCase() === item?.leftSide?.textfocus?.toLowerCase() ? (
                                                    <span
                                                        key={index}
                                                        className="inline-block bg-gradient-to-r from-[#94EAFF]/25 to-[#00FFD1]/25 px-2 py-1 rounded-md"
                                                    >
                                                        {part}
                                                    </span>
                                                ) : (
                                                    part
                                                )
                                            )}
                                    </h2>

                                   
                                    <Image quality={70}
                                          src={item?.leftSide?.desktopImage}
                                            alt={'' || ''}
                                            className={`w-full  h-full hidden sm:block relative!`}
                                            layout="fill"
                                            objectFit="cover"
                                            priority
                                        />
                                        <Image quality={70}
                                           src={item?.leftSide?.mobileImage}
                                            alt={'' || ''}
                                            className={`w-full  h-full block sm:hidden relative!`}
                                            layout="fill"
                                            objectFit="cover"
                                            priority
                                        />
                                  
                                </div>
                                <div className="absolute bottom-[0px] hidden  sm-block 
                  left-1/2 transform bg-gradient-to-r from-[#27E7DB] to-[#79FD66] w-[142px] h-[122px] blur-[300px] 
                    sm:blur-[160px] opacity-100 rounded-full"></div>

                            </div>

                            {/* Right Section */}
                            <div className="sm:col-span-5 grid grid-rows-1 sm:grid-rows-2 gap-4 relative z-10">
                                {/* Analytics Card */}
                                <div className={'bg-[#13243a] flex flex-col rounded-2xl sm:rounded-b-[0px] sm:rounded-t-2xl relative overflow-hidden'}>
                                    <div className="absolute block sm:hidden top-[18px] sm:top-[0px]  left-[-18px]  sm:left-1/2 transform bg-gradient-to-r from-[#27E7DB] to-[#79FD66]
                     w-[142px] h-[122px] blur-[130px] sm:blur-[160px] 
                     opacity-100 rounded-full"></div>
                                    <h2 className="text-xl font-medium text-center  flex items-center justify-center my-[25px] relative z-10">
                                        {item?.rightSide?.firstItem?.text}
                                    </h2>

                                    <div className="flex grow items-end pb-[25px] sm:pb-0 ps-[20px] sm:ps-0 relative z-10">


                                        <Image quality={70}
                                          src={item?.rightSide?.firstItem?.desktopImage}
                                            alt={'' || ''}
                                            className={` ${item?.siteName === 'crm' ? '' : 'w-full'} w-full hidden sm:block relative!`}
                                            layout="fill"
                                            // objectFit="cover"
                                            priority
                                        />
                                        <Image quality={70}
                                          src={item?.rightSide?.firstItem?.mobileImage} 
                                            alt={'' || ''}
                                            className={` h-full w-full block  block sm:hidden relative!`}
                                            layout="fill"
                                            objectFit="cover"
                                            priority
                                        />

                                    </div>
                                </div>

                                {/* Automation Card */}
                                <div className={'bg-[#13243a] relative flex flex-col rounded-2xl sm:rounded-b-[0px] sm:rounded-t-2xl overflow-hidden'}>
                                    <div className="absolute block sm:hidden top-[18px] sm:top-[0px]  left-[-18px]  sm:left-1/2 transform bg-gradient-to-r from-[#27E7DB] to-[#79FD66]
                     w-[142px] h-[122px] blur-[130px] sm:blur-[160px] 
                     opacity-100 rounded-full"></div>
                                    <h2 className="text-xl font-medium  flex items-center justify-center text-center my-[25px] relative z-10">
                                        {item?.rightSide?.lastItem?.text}
                                    </h2>

                                    <div className={`${item?.siteName === 'crm' ? 'max-h-[235px] md:max-h-full' : ''} flex grow md:justify-center  items-end pb-[25px] sm:pb-0 ps-[20px] sm:ps-0 relative z-10 px-2 sm:px-0`}>
                                       
                                        <Image quality={70}
                                            src={item?.rightSide?.lastItem?.desktopImage}
                                            alt={'' || ''}
                                            className={` ${item?.siteName === 'crm' ? 'max-h-[235px] max-w-[250px]!' : 'w-full'} hidden sm:block relative!`}
                                            layout="fill"
                                           
                                            priority
                                        />
                                        <Image quality={70}
                                            src={item?.rightSide?.lastItem?.mobileImage}
                                            alt={'' || ''}
                                            className={` h-full w-full block sm:hidden relative!`}
                                            layout="fill"
                                            objectFit="cover"
                                            priority
                                        />

                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </>
    );
}
