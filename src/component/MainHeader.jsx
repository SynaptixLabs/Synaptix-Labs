
import { incrementContactClick,incrementContactCleaer } from "@/store/conversationSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function MainHeader({ setScrollData = (() => { }), borderBottom=true }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentPathname, setCurrentPathname] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        setCurrentPathname(window.location.pathname);
        const initialScroll = window.scrollY;
        if (initialScroll > 20) {
            setIsScrolled(true);
            setScrollData(true);
        } else {
            setIsScrolled(false);
            setScrollData(false);
        }
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
                setScrollData(true);
            } else {
                setIsScrolled(false);
                setScrollData(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const ContactFormFocas=()=>{
        if (currentPathname !== '/services') {
            router.push(`/services`);
            dispatch(incrementContactClick());
        } else  if (currentPathname === '/services'){
            dispatch(incrementContactClick());
        }

    }
   

    return (
        <div className={`fixed w-full  px-[20px] md:px-[53px] left-0 z-[1000] top-0  ${isScrolled ? 'bg-[#070D1F]' : ''}`}>
            <div className={`grid grid-cols-3 md:py-5 h-[77px] md:h-[85px] ${borderBottom && 'border-b border-white/20'}`}>
                <div className={'text-base col-span-2 md:col-span-1 flex items-center'}>
                    <Link href="/">
                        <img className='w-[152px] md:w-[239px]' src="/assets/icon/logo.svg" alt="Logo" />
                    </Link>
                </div>
                <div className=' col-span-1 md:col-span-2 flex_add'>
                    <div className={`flex justify-between side_nav  ${isSidebarOpen && 'active'}`}>
                        <div className={`flex justify-center items-center gap-8 `}>
                            <Link onClick={()=>{dispatch(incrementContactCleaer());
                            }}
                                className={`text-base inline-block cursor-pointer ${currentPathname === '/services' ? 'text-white font-bold' : 'text-white'}`}
                                href="/services">Services</Link>
                          
                          <Link onClick={()=>{dispatch(incrementContactCleaer());
                            }}
                                className={`text-base inline-block cursor-pointer ${currentPathname === '/solutions' ? 'text-white font-bold' : 'text-white'}`}
                                href="/solutions">Solutions</Link>
                          
                            <Link onClick={()=>{dispatch(incrementContactCleaer());
                            }}
                                className={`text-base inline-block cursor-pointer ${currentPathname === '/about' ? 'text-white font-bold' : 'text-white'}`}
                                href="/about">About Us</Link>
                         
                            <a
                                className={`text-base inline-block cursor-pointer ${currentPathname === '/blog' ? 'text-white font-bold' : 'text-white'}`}
                                href="/blog">Blog</a>
                            {/* <Link 
                                className={` cursor-not-allowed opacity-50 pointer-events-none text-base inline-block ${currentPathname === '/ai-assistant' ? 'text-white font-bold' : 'text-white'}`}
                                href="#">AI Assistant</Link> */}
                        </div>

                        <button
                        type="button"
                            className=' cursor-pointer text-[16px] text-center bg-gradient-to-r from-[#36C1B1]  to-[#3CDD61] px-8 py-3 
                            inline-flex items-center rounded-full text-white justify-center col-span-2 md:col-span-1  h-[42px] font-bold'
                            onClick={()=>{ContactFormFocas()}}>Contact Us</button>
                    </div>
                    <button className='hidden menu_button cursor-pointer' onClick={toggleSidebar}>
                        <img src="/assets/images/burger_menu.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}
