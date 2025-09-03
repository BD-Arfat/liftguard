import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ndt from '../../assets/ser-1.webp'
import LoadTest from "./LoadTest/LoadTest";
import PressureTest from "./PressureTest/PressureTest";
import AboutNdt from "./AboutNdt/AboutNdt";
import Ndt from "./Ndt/Ndt";
import { FaArrowUp } from "react-icons/fa";
// import image3 from '../../assets/ca-image-1.jpeg'

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // অ্যানিমেশন সময়কাল (মিলিসেকেন্ডে)
            once: true, // একবারই অ্যানিমেশন হবে
        });
    }, []);

    const scrollToTop = () => {
        const loadTestElement = document.getElementById('loda-test');
        if (loadTestElement) {
            loadTestElement.scrollIntoView({ behavior: 'smooth' })
        }

    }

    return (
        <div className="overflow-hidden"> <div id="loda-test">
            
            <div
  className="overflow-hidden relative py-40"
  style={{
    backgroundImage:
      'url(https://images.unsplash.com/photo-1604930270269-67876a4cbe4a?ixid=M3wxOTgwNzN8MHwxfHNlYXJjaHwxMHx8c2hpcCUyMHdpdGglMjB3b3JrYXJ8ZW58MXx8fHwxNzU2OTIzNjc2fDA&ixlib=rb-4.1.0&w=3000&q=25)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }}
>
  {/* Black Overlay */}
  <div
    className="absolute inset-0 bg-black opacity-60"
    style={{ pointerEvents: 'none' }}
  ></div>

  {/* Content */}
  <div id="loda-test" className="relative z-10">
    <h2 className="text-3xl font-bold text-white text-center pt-24 font-oswald">
      OUR SERVICE
    </h2>
    
  </div>
</div>

        </div>
            
            <LoadTest data-aos="fade-up"></LoadTest>

            {/* more abouts */}

            <PressureTest data-aos="fade-up"></PressureTest>

            <AboutNdt></AboutNdt>

            {/*  */}

            <Ndt data-aos="fade-up"></Ndt>

            {/* Button to scroll to the Banner section */}
            <div className="fixed bottom-5 right-5">
                <button
                    onClick={scrollToTop}
                    className="bg-blue-950 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center"
                >
                    <FaArrowUp size={20} />
                </button>
            </div>
        </div>
    );
};

export default Services;
