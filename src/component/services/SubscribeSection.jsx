import { useState } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Image from 'next/image';

export default function SubscribeSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = formData;

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('/api/subscribe', formData);

      setFormData({ email: "" });
      toast.success("Subscribed successfully!");
    } catch (error) {
      console.error("Error submitting Subscribe form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:max-w-[525px] mx-auto flex flex-col items-center justify-center text-white md:px-4 mt-[50px] md:my-[150px]">
      <h2
        className="text-[24px] md:text-3xl md:text-5xl font-bold text-center leading-snug"
        style={{
          background: 'linear-gradient(to right, #fff 40%, #BEFDF2)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Subscribe for Expert<br />
        IT Tips & News
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full md:w-auto flex flex-col md:flex-row justify-between items-center mt-8 gap-4"
      >
        <div className="w-full md:w-auto flex items-center px-4 py-2 bg-[#9CFFF41F] rounded-[10px] border border-[#A6AFB44D]">
      
          <Image
                        src="/assets/services/formkit_email.svg" alt=""
                      className='mr-[20px]'
                        width={20}
                        height={20}
                        priority
                        quality={70}
                      />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            className="bg-transparent text-white placeholder:text-[14px] placeholder-gray-400 focus:outline-none w-full md:w-72"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer bg-[linear-gradient(90deg,#36C1B1_-13.04%,#3CDD61_122.1%)] h-full 
            text-white font-[500] text-[16px] leading-[16px]
            tracking-0 text-center px-[30px] py-[14px] rounded-full transition duration-300 disabled:opacity-60"
        >
          {isSubmitting ? <FaSpinner className="animate-spin" size={20} /> : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
