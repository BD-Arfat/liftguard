import React, { useEffect } from 'react';
import backgroundImage from '../../../assets/banner-image.png'; // 1920x1080 px HD image
import AOS from 'aos';
import 'aos/dist/aos.css';

const Abouts = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    return (
        <div
            className="relative w-full h-[900px] flex items-center justify-center text-center overflow-hidden m-0 p-0"
            style={{
                // backgroundImage: `url(https://cdn.gamma.app/vx9w2d0pbaj4lcv/generated-images/6NcAyXPDmxpA9mofMUZD0.png)`,
                // backgroundImage: `url(https://cdn.gamma.app/vx9w2d0pbaj4lcv/generated-images/LRL2fOPA7R5jdMVfImxdO.png)`,
                // backgroundImage: `url(${backgroundImage})`,
                backgroundImage: `url(https://images.unsplash.com/photo-1580205397275-76b5e8da1686?ixid=M3wxOTgwNzN8MHwxfHNlYXJjaHwzfHxBJTIwbWFzc2l2ZSUyMHNoaXAlMjBodWxsJTIwYmVpbmclMjBjb25zdHJ1Y3RlZCUyMGluJTIwYSUyMGRyeSUyMGRvY2slMkMlMjB3aXRoJTIwd29ya2VycyUyMGFuZCUyMGxhcmdlJTIwY3JhbmVzJTIwaW4lMjBhY3Rpb24ufGVufDF8fHx8MTc1NjkyMzMyOXww&ixlib=rb-4.1.0&w=3000&q=25)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Gradient Overlay: উপরে সাদা, নিচে clear */}
            <div
                className="absolute inset-0"
                style={{
    background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)',
}}

            ></div>

            <div data-aos="fade-up" className="relative px-6">
                <h2 className="text-5xl md:text-6xl font-bold text-[#0F1B3D] mb-6">
                    Our Story
                </h2>
                <hr className="border-[#0F1B3D] w-32 mx-auto mb-8" />
                <p className="text-black text-lg md:text-3xl md:w-5/6 mx-auto font-medium font-oswald">
                    Founded with a mission to revolutionize safety in industrial and construction environments, Liftguard Solutions is committed to designing and delivering cutting-edge solutions that protect personnel and assets during lifting operations. Our services include comprehensive inspection, load testing, and pressure testing for a wide range of equipment, including cranes, forklifts, compressors, and lifting gear.
                </p>
            </div>
        </div>
    );
};

export default Abouts;
