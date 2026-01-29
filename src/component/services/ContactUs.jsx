import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import toast from 'react-hot-toast';
import Select from 'react-select'
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Image from "next/image";
const ClientOnlySelect = dynamic(() => import('react-select'), { ssr: false });
export default function ContactUs({latestBlog, contactInfo, serviceName }) {
    const contactClickCount = useSelector(state => state.conversation.contactClickCount);
    const scrollRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectValue, setSelectValue] = useState([])
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        blog_url:`blog/${latestBlog?.data[0]?.slug}`,
        article_title:latestBlog?.data[0]?.title
    });
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        const maxLengths = {
            name: 50,
            email:50,
            phone: 24,
            message: 500
        };
        if (value.length <= maxLengths[name]) {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
            setErrors(prev => ({
                ...prev,
                [name]: '',
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                [name]: `Maximum length of ${maxLengths[name]} characters exceeded`,
            }));
        }
    };

    const handleSelected = (selected) => {
        if (selected.length > 4) {
            errors.service = 'Maximum 4 services can be selected'
        } else {
            errors.service = ''
        }
        setSelectValue(selected);
        const values = selected.map((item) => item.value);
        formData.service = values.join();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { name, email, phone, service, message } = formData;
        const newErrors = {};
        if (!name.trim()) newErrors.name = "This field is required";
        if (!email.trim()) newErrors.email = "This field is required";
        if (!phone.trim()) newErrors.phone = "This field is required";
        if (!service.trim()) {
            newErrors.service = "This field is required";
        } else if (
            formData?.service?.split(',').map(item => item?.trim()).length > 4
        ) {
            newErrors.service = "Maximum 4 services can be selected";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

      try {
    const response = await axios.post('/api/contact', formData); // No need to use NEXT_PUBLIC_API_URL here
    setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    response && setIsSubmitting(false);
    toast.success("Submitted successfully");
    setSelectValue([]);
    setErrors({});
} catch (error) {
    const formattedErrors = error?.response?.data?.errors || {};
    setErrors(formattedErrors);
    setIsSubmitting(false);
    console.error("Error submitting contact form:", error);
}
    };

    useEffect(() => {
        if (contactClickCount > 0 && scrollRef.current) {
            const elementTop = scrollRef.current.getBoundingClientRect().top;
            const offsetTop = window.pageYOffset + elementTop - 120;
    
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }, [contactClickCount]);

    const options = serviceName?.data?.map(item => ({
        value: item?.name,
        label: item?.name
    }));



    return (
        <div className=" mt-[50px] md:my-[211px]  relative " >
 
           <Image quality={70}
                src="/assets/services/multipaleLine.png" alt=""
                className="hidden md:block absolute left-[-70px] top-[-50px]  bg-gradient-to-r from-transparent  via-transparent to-[#070d1f]"

                width={808}
                height={296}
                priority
            />

            <div className=" text-white  relative px-[20px] md:px-[53px] z-10" >
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                    <div className="col-span-2">
                        <h2 className="text-[#36C1B1]  font-[500] text-[18px] leading-[18px] tracking-[6%] mb-[10px]">Contact us</h2>
                        <h2 className=" font-[700] text-[24px] md:text-[42px] leading-[28px] tracking-[-0%] mb-[15px] md:mb-6">Get in touch today</h2>
                        <p className=" font-[400] text-[16px] md:text-[18px] leading-[22px] tracking-[0%] text-[#FFFFFFCC] mb-[25px] md:mb-10">
                            We looking forward your questions and feedback - we're always <br /> happy to help! Here are some ways to contact us.
                        </p>

                        <div className="space-y-6 max-w-[373px]">
                            {/* Email */}
                            <div className="contect_left_bg p-4 rounded-2xl flex items-center gap-4">
                                <div className="bg-[#36C1B130] p-4 rounded-[13px] h-[50px] w-[62px] flex items-center justify-center">

                                    <Image quality={70}
                                        src="/assets/services/email.svg" alt=""
                                        width={26}
                                        height={26}
                                        priority
                                    />
                                </div>
                                <div>
                                    <p className="text-[#FFFFFFCC] text-[16px] mb-[10px] leading-[16px] tracking-[-0%]  font-[400]">Email:</p>
                                    <p className="text-white  font-[500] text-[18px] leading-[18px] tracking-[0%]">{contactInfo?.data?.email}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="contect_left_bg p-4 rounded-2xl flex items-center gap-4">
                                <div className="bg-[#36C1B130] p-4 rounded-[13px] h-[50px] w-[62px] flex items-center justify-center">
                                    <Image quality={70}
                                        src="/assets/services/phone.svg" alt=""
                                        width={26}
                                        height={26}
                                        priority
                                    />
                                </div>
                                <div>
                                    <p className="text-[#FFFFFFCC] text-[16px] mb-[10px] leading-[16px] tracking-[-0%]  font-[400]">Phone number:</p>
                                    <p className="text-white  font-[500] text-[18px] leading-[18px] tracking-[0%]">{contactInfo?.data?.phone}</p>

                                </div>
                            </div>

                            {/* Location */}
                            <div className="contect_left_bg p-4 rounded-2xl flex items-center gap-4">
                                <div className="bg-[#36C1B130] p-4 rounded-[13px] h-[50px] w-[62px] flex items-center justify-center">
                                    <Image quality={70}
                                        src="/assets/services/location.svg" alt=""
                                        width={26}
                                        height={26}
                                        priority
                                    />
                                </div>
                                <div>
                                    <p className="text-[#FFFFFFCC] text-[16px] mb-[10px] leading-[16px] tracking-[-0%]  font-[400]">Location:</p>
                                    <p className="text-white  font-[500] text-[18px] leading-[18px] tracking-[0%]">{contactInfo?.data?.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="mt-[30px] flex items-center gap-[20px]">
                            <p className="text-white  font-[500] text-[18px] leading-[18px] tracking-[0%]">Stay connected:</p>
                            <div className="flex gap-4">


                                {contactInfo?.data?.facebook && <a target='_blank' href={contactInfo?.data?.facebook}>                                <div className=" flex items-center justify-center">

                                    <Image quality={70}
                                        src="/assets/services/facebook.svg" alt=""
                                        width={26}
                                        height={26}
                                        priority
                                    />
                                </div></a>}
                                {contactInfo?.data?.linkedin && <a target='_blank' href={contactInfo?.data?.linkedin}> <div className=" flex items-center justify-center">

                                    <Image quality={70}
                                        src="/assets/services/linkdeen.svg" alt=""
                                        width={26}
                                        height={26}
                                        priority
                                    />
                                </div></a>}
                                {contactInfo?.data?.instagram && <a target='_blank' href={contactInfo?.data?.instagram}> <div className=" flex items-center justify-center">

                                    <Image quality={70}
                                        src="/assets/services/insta.svg" alt=""
                                        width={26}
                                        height={26}
                                        priority
                                    />
                                </div></a>}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end justify-center md:p-6 md:pr-0 pb-0 col-span-2" ref={scrollRef} >
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 text-white"
                        >
                            {/* Name */}
                            <div className="flex flex-col">
                                <label className="mb-2 text-sm">Your name</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ex. John Doe"
                                //    maxL ength="50"
                                    className={`bg-[#9CFFF41F] text-white placeholder-gray-400 px-[20px] md:px-4 py-3 rounded-[10px] border border-[#A6AFB44D] focus:outline-none focus:ring-1 focus:ring-[#1dd1a1] ${errors.name && 'border-red-500! focus:ring-transparent!'}`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">


                                        <Image quality={70}
                                            src="/assets/images/error_icon.png" alt=""
                                            width={15}
                                            height={15}
                                            priority
                                        />

                                        {errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="mb-2 text-sm">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="johndoe@gmail.com"
                                    // maxLength=50"
                                    className={`bg-[#9CFFF41F]  text-white placeholder-gray-400 px-[20px] md:px-4 py-3 rounded-[10px] border border-[#A6AFB44D] focus:outline-none focus:ring-1 focus:ring-[#1dd1a1]  ${errors.email && 'border-red-500! focus:ring-transparent!'}`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1"> <Image quality={70}
                                        src="/assets/images/error_icon.png" alt=""
                                        width={15}
                                        height={15}
                                        priority
                                    />{errors.email}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col">
                                <label className="mb-2 text-sm">Phone</label>
                                <input

                                    type="text"
                                    autoComplete="off"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter Phone Number"
                                    // maxLength="24"
                                    className={`bg-[#9CFFF41F] text-white placeholder-gray-400 px-[20px] md:px-4 py-3 rounded-[10px] border border-[#A6AFB44D] focus:outline-none focus:ring-1 focus:ring-[#1dd1a1]  ${errors.phone && 'border-red-500! focus:ring-transparent!'}`}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1"> <Image quality={70}
                                        src="/assets/images/error_icon.png" alt=""
                                        width={15}
                                        height={15}
                                        priority
                                    />{errors.phone}</p>
                                )}
                            </div>

                            {/* Service */}
                            <div className="flex flex-col relative">
                                <label className="mb-2 text-sm">Service</label>

                                {mounted && (
                                    <ClientOnlySelect
                                        classNames={{

                                            control: () =>
                                                `contact_service_select appearance-none bg-[#9CFFF41F]! text-white placeholder-gray-400
                                                 px-[20px] md:px-4 py-1.5 rounded-[10px]! border border-[#A6AFB44D]! focus:outline-none focus:ring-1 focus:ring-[#1dd1a1] ${errors.service && 'border-red-500! focus:ring-transparent!'}`,
                                        }}
                                        isMulti options={options}
                                        value={selectValue}
                                        onChange={handleSelected}
                                    />
                                )}
                                {errors.service && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1"> <Image quality={70}
                                        src="/assets/images/error_icon.png" alt=""
                                        width={15}
                                        height={15}
                                        priority
                                    />{errors.service}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="flex flex-col md:col-span-2">
                                <label className="mb-2 text-sm">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Type here..."
                                    rows="4"
                                    maxLength="500"
                                    className={`bg-[#9CFFF41F] text-white placeholder-gray-400 px-[20px] md px-[20px] md:px-4 py-3 rounded-[10px] border border-[#A6AFB44D] focus:outline-none focus:ring-1 focus:ring-[#1dd1a1]  ${errors.message && 'border-red-500! focus:ring-transparent!'}`}
                                ></textarea>
                              {formData.message &&  <p className="text-sm mt-1 text-right text-white">{formData.message.length}/500</p>} 
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1"> <Image quality={70}Load
                                        src="/assets/images/error_icon.png" alt=""
                                        width={15}
                                        height={15}
                                        priority
                                    />{errors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-2 flex items-hcenter justify-center md:block" >
                                <button
                                    type="submit"
                                    className="w-32 cursor-pointer bg-[linear-gradient(90deg,#36C1B1_-13.04%,#3CDD61_122.1%)] text-white 
                    font-medium text-[16px] leading-[16px] flex justify-center tracking-0 text-center py-3 px-6 rounded-full transition duration-300 hover:scale-105"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <FaSpinner className="animate-spin" size={20} />
                                    ) : (
                                        'Send'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="absolute bottom-[-250px]  right-[0] transform bg-[#27E7DB] w-[286px] h-[247px] blur-[250px] opacity-100 rounded-full"></div>
            </div>
        </div>
    );
}
