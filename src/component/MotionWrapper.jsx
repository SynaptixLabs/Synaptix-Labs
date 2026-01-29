// components/MotionWrapper.js
'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MotionWrapper = ({ children, animation = 'fade-up', delay = 0, duration = 1000, once = false }) => {
  useEffect(() => {
    AOS.init({
      duration,
      once,
    });
  }, []);

  return (
    <div data-aos={animation} data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default MotionWrapper;