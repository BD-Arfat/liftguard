import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import bannerVideo from '../../../video/video-1 (1) (1) (1).mp4';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Banner = () => {
    return (
        <div className="mb-20 mx-auto font-sans">
            <div className="relative w-full h-screen">
                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={bannerVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Softer Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 flex flex-col justify-center items-center text-white text-center px-4">
                    {/* Heading */}
                    <h1 className="text-xl w-5/6 md:text-5xl lg:w-11/12 mx-auto lg:text-6xl font-extrabold mb-4 uppercase leading-tight drop-shadow-lg">
                        <TypeAnimation
                            sequence={[
                                'Welcome To LiftGuard Solution',
                                1500,
                                'Your Safety, Our Priority',
                                1500,
                                'Industrial Safety Experts',
                                1500,
                                'Reliable LiftGuard Solution',
                                1500
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                            clearCursor={true}
                        />
                    </h1>

                    {/* Subheading */}
                    <p
                        data-aos="zoom-in"
                        className="text-sm md:text-2xl w-5/6 md:w-2/3 mt-3 mx-auto leading-relaxed text-gray-100 drop-shadow-md"
                    >
                        Your trusted partner for innovative safety solutions in lifting gear and heavy equipment.
                        We prioritize accident prevention and workplace safety, offering reliable services to secure industrial operations.
                    </p>

                    {/* Action Buttons */}
                    <div data-aos="zoom-in" className="flex flex-col md:flex-row gap-4 mt-6">
                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/8801321229107?text=Hello%20LiftGuard%20Solution!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0F766E] hover:bg-[#0d5c58] text-white text-center px-5 py-2 rounded-lg text-sm md:text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-amber-400"
                        >
                            <FaWhatsapp className="text-lg" />
                            +88 01321229107
                        </a>

                        {/* Email Button */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=ranaliftguardsolution@gmail.com&su=Inquiry%20About%20LiftGuard%20Solution&body=Hello%20Team,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent hover:bg-[#0F766E] text-white px-5 py-2 rounded-lg text-sm md:text-base font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-amber-400"
                        >
                            <MdEmail className="text-lg" />
                            ranaliftguardsolution@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
