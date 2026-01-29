import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const testimonials = [
    {
        hook: 'Hook #1',
        text: "Our team's workload is now efficiently managed with the help of AI solutions. We've been able to automate repetitive and mundane tasks, allowing for better productivity and optimization. This has led to a significant reduction in operational pressure and time wastage.",
        author: 'John, IT Director at a software development company',
    },
    {
        hook: 'Hook #2',
        text: 'AI-powered security measures have completely reshaped how we approach threat detection, mitigation, and response within our organization. The system acts proactively in identifying potential risks, making our infrastructure secure and far more robust.',
        author: 'David, Cybersecurity Analyst',
    },
    {
        hook: 'Hook #3',
        text: 'By implementing AI-enhanced chatbots, we’ve set a new standard for customer support efficiency. The ability to provide instant issue resolution has improved the overall user experience, reducing resolution times and increasing overall client satisfaction.',
        author: 'Kate, VP of Customer Relations',
    },
    {
        hook: 'Hook #4',
        text: 'AI innovations have significantly streamlined our workflow processes. By automating routine tasks, we can now focus on innovative solutions and strategic projects that directly contribute to key business objectives, driving organizational growth.',
        author: 'Alaina, Network Administrator',
    },
    {
        hook: 'Hook #5',
        text: 'AI technologies have fortified our cybersecurity defenses, strengthening our ability to react to threats faster than ever before. The advanced systems built on AI learning have reduced vulnerabilities in ways conventional systems struggled to address effectively.',
        author: 'David, Cybersecurity Analyst',
    },
    {
        hook: 'Hook #6',
        text: 'Customer satisfaction has reached new heights thanks to AI-powered 24/7 chatbot assistance. Providing round-the-clock support, customers feel valued, and their concerns are addressed efficiently without having to wait for standard service hours.',
        author: 'Kate, VP of Customer Relations',
    },
    {
        hook: 'Hook #7',
        text: 'AI-driven analytics provide us with unparalleled insights, allowing us to curate better marketing campaigns and strategies. With the enhanced targeting and prediction models, our campaign outcomes have improved beyond expectations, driving greater ROI.',
        author: 'Sophia, Marketing Manager',
    },
    {
        hook: 'Hook #8',
        text: 'Automated inventory management empowered by advanced AI systems has revolutionized how we store and distribute goods. Warehouse efficiency has improved significantly, leading to cost savings as well as better accuracy in managing stock levels.',
        author: 'Liam, Operations Manager',
    },
    {
        hook: 'Hook #9',
        text: 'Our recruitment process is now transformed through the use of AI-powered solutions. Assessing candidates with precision, while reducing repetitive manual screenings, has allowed for faster talent acquisition and better decision-making across the board.',
        author: 'Olivia, HR Specialist',
    },
    {
        hook: 'Hook #10',
        text: 'AI-generated insights allow us to analyze, predict, and react to market trends much quicker than ever before. It has empowered our business strategies, enabling us to stay ahead of competitors while making better-informed decisions for long-term success.',
        author: 'Ethan, Business Analyst',
    },
    {
        hook: 'Hook #11',
        text: 'AI-driven energy optimization has been a game changer for our organization. Not only has it significantly improved our sustainability practices, but it has also reduced environmental impact by allowing smarter energy consumption across all of our operations.',
        author: 'Mia, Sustainability Officer',
    },
    {
        hook: 'Hook #12',
        text: 'By leveraging AI in logistics, we’ve greatly enhanced our delivery processes. AI ensures smarter route management and resource allocation, resulting in quicker, more secure, and reliable shipping, delighting our customers with timely deliveries.',
        author: 'Noah, Logistics Manager',
    },
    {
        hook: 'Hook #13',
        text: 'AI-powered predictions and analysis have greatly improved our product development journey. Insights derived from data help us refine project designs, ensuring we meet customer requirements effectively and deliver value to the end users every time.',
        author: 'Amelia, Product Engineer',
    },
    {
        hook: 'Hook #14',
        text: 'AI-powered fraud detection tools have significantly reinforced our system security. By monitoring transactions and behaviors in real time, these tools help prevent fraud activities promptly, thereby safeguarding both our customers and business integrity.',
        author: 'Lucas, Financial Analyst',
    },
    {
        hook: 'Hook #15',
        text: 'With AI-generated reports, we’ve established a faster, smart decision-making process reliant on solid data analysis. These tools enable the identification of growth opportunities, ensure accurate forecasting, and assist in achieving broader objectives.',
        author: 'Emma, Business Development Manager',
    },
    {
        hook: 'Hook #16',
        text: 'AI-based algorithms have transformed our e-commerce platform by offering highly personalized product recommendations. These improvements have significantly boosted both our sales numbers and customer retention rates, making customers feel understood and valued.',
        author: 'Olivia, E-commerce Specialist',
    },
];

const TestimonialSlider = ({ feedback }) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);



    return (
        <>
           { feedback?.data?.length > 0 && <div className="w-full mt-[50px] md:mt-20 relative clients_slide px-[20px] md:px-0">
                <div className='flex justify-center'>
                    <span className='text-[24px] md:text-[32px] font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FFFFFF] to-[#BEFDF2] mb-[25px] md:mb-[70px] max-auto'>What our clients are saying</span>
                </div>
                <Swiper
                    className={windowWidth < 768 ? 'w-full rounded-2xl text-white p-6 h-full max-h-fit md:shadow-xl' : ''}
                    modules={[Pagination, Autoplay]}
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    autoHeight={false}
                    pagination={windowWidth < 768 ? {
                        clickable: true,
                        dynamicBullets: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}" style="background-color: #fff; height: 9px; width: 9px;"></span>`;
                        }
                    } : false}
                    autoplay={{ delay: 3500 }}
                    loop={true}
                    breakpoints={{
                        100: {
                            autoHeight: true
                        },
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 2,
                            autoHeight: false
                        },
                        1200: {
                            slidesPerView: 4.3
                        },
                        1442:{
                            slidesPerView: 7.2
                        }
                    }}
                >
                    {windowWidth < 768
                        ? feedback?.data?.map((item, index) => (
                            <SwiperSlide key={index} className='p-6 pb-[50px] h-full max-h-fit cardBg1 rounded-[20px]'>
                                <div className={``}>
                                    <div className="flex gap-1 text-2xl pb-2 text-white/70">
                                    {Array?.from({ length: 5 }, (_, i) => (
                                                        <img
                                                            key={i}
                                                            src="./assets/images/star.svg"
                                                            alt=""
                                                            style={{
                                                                filter: i < item?.rating ? 'brightness(0) invert(1)' : 'grayscale(1) ',
                                                            }}
                                                        />
                                                    ))}
                                    </div>
                                    <h3 className="font-bold text-[17.6px] text-white mb-[15px]">{item?.companyName}</h3>
                                    <p className="text-[18px] font-normal text-white/70 mb-[15px]">{item?.message}</p>
                                    <em className=" text-[18px]  font-normal text-white/70 opacity-80">{item?.fullName}</em>
                                </div>
                            </SwiperSlide>
                        ))
                        : feedback?.data?.reduce((grouped, item, index) => {
                            if (index % 2 === 0) {
                                grouped?.push([item, feedback?.data[index + 1]]);
                            }
                            return grouped;
                        }, []).map((group, index) => (
                            <SwiperSlide key={index} className="h-auto min-w-[380px] ">
                                <div className="flex flex-col h-full ">
                                    {group?.map((nestedItem, nestedIndex) => (
                                        nestedItem && (
                                            <div key={nestedIndex}
                                                className={`cardBg1  rounded-2xl text-white px-[25px] pt-[35px] pb-[26px] shadow-xl transition-all duration-300 
                                                ${nestedIndex === 0
                                                        ? 'h-fit mb-6' // First child has default height
                                                        : 'h-0 overflow-hidden h-full! opacity-0 mb-0 hidden md:block md:h-auto md:opacity-100 md:overflow-visible'
                                                    }`}>
                                                <div className="flex gap-1 text-2xl mb-[20px] text-white/70">
                                                    {Array.from({ length: 5 }, (_, i) => (
                                                        <img
                                                            key={i}
                                                            src="./assets/images/star.svg"
                                                            alt=""
                                                            style={{
                                                                filter: i < nestedItem?.rating ? 'brightness(0) invert(1)' : 'grayscale(1) ',
                                                            }}
                                                        />
                                                    ))}

                                                </div>
                                                <h3 className="font-bold text-[17.6px] text-white mb-[15px]">{nestedItem?.companyName}</h3>
                                                <p className="text-[18px]/[24px]    font-normal text-white/70 mb-[15px]">{nestedItem?.message}</p>
                                               <p  className="italic text-[18px]/[21px] font-[400]    text-white/80 ">{nestedItem?.fullName}</p>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className="w-[202px] h-[175px] absolute top-1/2 left-[30%] bg-[#27E7DB] rounded-full blur-[200px] opacity-100"></div>
                <div className="w-[202px] h-[175px] absolute top-1/2 right-[10%] bg-[#27E7DB] rounded-full blur-[200px] opacity-80"></div>
            </div>
            } 
        </>
    );
};

export default TestimonialSlider;
