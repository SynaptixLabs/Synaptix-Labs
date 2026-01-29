import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({contactInfo}) => {
    const [currentPathname, setCurrentPathname] = useState('');
    useEffect(() => {
        setCurrentPathname(window?.location?.pathname);
    })

    return (
        <>
            <footer className=" relative z-10 text-white mt-[50px] md:mt-[130px] md:pt-8  px-[20px] md:px-[53px] w-full">
                <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/30 pb-10">
                    {/* Logo Section */}
                    <div className='md:col-span-1'>
                        <img src="/assets/icon/logo.svg" alt="Logo" />
                    </div>

                    {/* Company Links */}
                    <div className='md:col-span-3'>
                        <div className="w-full grid grid-cols-4 gap-10">
                            <div className='col-span-2 md:col-span-1'>
                                <h3 className="font-medium text-lg pb-3">Company</h3>
                                <ul className="space-y-[15px] text-white/85 text-base font-normal">
                                    <li> <Link
                                href="/about">About Us</Link></li>
                                    
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/terms-of-service">Terms of Service</a></li>
                                    <li><a href="/cookie-policy">Cookie Policy</a></li>
                                    
                                </ul>
                            </div>

                            {/* Product Links */}
                            <div className='col-span-2 md:col-span-1'>
                                <h3 className="font-medium text-lg pb-3">Product</h3>
                                <ul className="space-y-[15px] text-white/85 text-base font-normal">
                                    <li> <Link
                                href="/services">Services</Link></li>
                                  <li> <Link
                                href="/solutions">Solutions</Link></li>
                                
                                 {/* <li> <Link
                                href="/ai-assistant">AI Assistant</Link></li> */}
                                  
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div className='col-span-2 md:col-span-1'>
                                <h3 className="font-medium text-lg pb-3">Contact</h3>
                                <ul className="space-y-[15px] text-white/85 text-base font-normal">
                                    <li>{contactInfo?.data?.email}</li>
                                    <li>{contactInfo?.data?.phone}</li>
                                    <li>{contactInfo?.data?.address}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className=" flex items-center justify-between py-[20px]  text-base text-white/70 gap-4">
                    <p className='mb-0 '>©Synaptix Labs. 2025 all rights reserved</p>
                    <div className="hidden md:flex space-x-5 text-white text-lg">
                       {contactInfo?.data?.facebook && <a target='_blank' href={contactInfo?.data?.facebook}><FaFacebookF /></a>} 
                       {contactInfo?.data?.linkedin && <a target='_blank' href={contactInfo?.data?.linkedin}><FaLinkedinIn /></a>} 
                       {contactInfo?.data?.instagram && <a target='_blank' href={contactInfo?.data?.instagram}><FaInstagram /></a>} 
                       
                    </div>
                </div>



            </footer>
        </>
    );
};

export default Footer;
