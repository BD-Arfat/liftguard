import React from 'react';
import { TypeAnimation } from 'react-type-animation';

// Your background video
import bannerVideo from '../../../video/banner-video-1.mp4';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Banner = () => {
    return (
        <div className="mb-20 mx-auto font-oswald">
            <div className="relative w-full h-[100vh] md:h-screen">
                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={bannerVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-xl w-5/6 md:text-[50px] lg:w-11/12 mx-auto lg:text-[60px] font-extrabold mb-4 uppercase leading-tight">
                        <TypeAnimation
                            sequence={[
                                'Welcome To Our LiftGuard Solution',
                                1000,
                                'Welcome',
                                1000,
                                'To Our',
                                1000,
                                'LiftGuard',
                                1000,
                                'Solution',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: 'lg:[60px]', display: 'inline-block' }}
                            repeat={Infinity}
                            clearCursor={true}
                        />
                    </h1>
                    <p className="text-sm md:text-3xl w-5/6 md:w-2/3 mt-3 mx-auto leading-relaxed">
                        Your trusted partner for innovative safety solutions in lifting gear and heavy equipment.
                        We prioritize accident prevention and workplace safety, offering reliable services to secure industrial operations.
                    </p>

                    {/* Buttons */}
                    <div className="md:flex  gap-4 mt-6">
                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/8801846615162?text=Hello%20LiftGuard%20Solution!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#172554] hover:bg-[#0f1b3d] text-white text-center px-4 border border-white py-2 rounded-lg text-sm md:text-[12px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                        >
                            <FaWhatsapp className="text-lg" />
                            +88 01846615162
                        </a>

                        {/* Email Button */}
                        <a
                            href="mailto:arfat1islam5162@gmail.com?subject=Inquiry%20About%20LiftGuard%20Solution&body=Hello%20Team,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#172554] mt-3 md:mt-0 hover:bg-[#0f1b3d] text-white px-4 border border-white py-2 rounded-lg text-sm md:text-[12px] font-semibold flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                        >
                            <MdEmail className="text-lg" />
                            arfat1islam5162@gmail.com
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
