import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutsImage from '../../../assets/abouts.jpg';

const Overview = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="font-oswald mb-10 md:mb-36">
            {/* Header Section */}
            <div
                className="relative text-center mb-12 py-40"
                style={{
                    backgroundImage: `url(https://media.licdn.com/dms/image/v2/D5612AQEXxbZkMGYI1Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1718732191197?e=2147483647&v=beta&t=DBoPpzPeEd1abmiGvbvAzdcq2WhUfugTwlg5UlwS_P8)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0F1B3D]/70"></div>

                {/* Content */}
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
                        About Us
                    </h2>
                    <hr className="border-t-4 border-[#10B981] w-24 mx-auto mt-2" />
                </div>
            </div>

            {/* Content Section */}
            <div data-aos="fade-up" className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 md:px-12 gap-10">
                {/* Text Content */}
                <div className="md:w-1/2 space-y-6">
                    <p className="text-lg md:text-xl leading-relaxed text-justify text-[#0F1B3D]">
                        Welcome to Liftguard Solutions, a proud sister concern of KR Group and a leading name in safety solutions in Bangladesh. We specialize in innovative and reliable safety technologies for lifting gear and heavy equipment, ensuring the highest standards of workplace safety and accident prevention.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-justify text-[#0F1B3D]">
                        Founded with a mission to revolutionize safety in industrial and construction environments, Liftguard Solutions is committed to designing and delivering cutting-edge solutions that protect personnel and assets during lifting operations. Our services include comprehensive inspection, load testing, and pressure testing for a wide range of equipment, including cranes, forklifts, compressors, and lifting gear.
                    </p>
                </div>

                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={aboutsImage}
                        alt="About Liftguard Solutions"
                        className="rounded-lg shadow-2xl border-4 border-[#10B981]"
                    />
                </div>
            </div>

            {/* Additional Info Section */}
            <div data-aos="fade-up" className="mt-16 mx-5 max-w-6xl md:mx-auto space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-[#0F1B3D]">
                    With a team of dedicated engineers, technicians, and safety professionals, we combine expertise and innovation to meet international safety standards. Our state-of-the-art equipment, including high-capacity load cells and tensile testing machines, ensures precision and reliability in every project.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-[#0F1B3D]">
                    Choose Liftguard Solutions for a safer, more efficient workplace. Together, let’s build a future where safety is paramount.
                </p>
            </div>
        </section>
    );
};

export default Overview;
