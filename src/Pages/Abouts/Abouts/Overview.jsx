import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutsImage from '../../../assets/abouts.jpg';

const Overview = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // অ্যানিমেশন সময়কাল (মিলিসেকেন্ডে)
            once: true, // একবারই অ্যানিমেশন হবে
        });
    }, []);

    return (
        <section className="">
            {/* Header Section */}
            <div
  className="relative text-center mb-12 py-40"
  style={{
    backgroundImage:
      'url(https://images.unsplash.com/photo-1580205397275-76b5e8da1686?ixid=M3wxOTgwNzN8MHwxfHNlYXJjaHwzfHxBJTIwbWFzc2l2ZSUyMHNoaXAlMjBodWxsJTIwYmVpbmclMjBjb25zdHJ1Y3RlZCUyMGluJTIwYSUyMGRyeSUyMGRvY2slMkMlMjB3aXRoJTIwd29ya2VycyUyMGFuZCUyMGxhcmdlJTIwY3JhbmVzJTIwaW4lMjBhY3Rpb24ufGVufDF8fHx8MTc1NjkyMzMyOXww&ixlib=rb-4.1.0&w=3000&q=25)',
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
  <div className="relative z-10">
    <h2 className="text-4xl font-bold text-white font-oswald uppercase pt-7">
      About Us
    </h2>
    <hr className="border-t-4 border-white w-24 mx-auto mt-2" />
  </div>
</div>



            {/* Content Section */}
            <div data-aos="fade-up" className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 md:px-12 gap-8">
                {/* Text Content */}
                <div className="md:w-1/2 space-y-6">
                    <p className="text-lg leading-relaxed text-justify font-oswald text-blue-950">
                        Welcome to Liftguard Solutions, a proud sister concern of KR Group and a leading name in safety solutions in Bangladesh. We specialize in innovative and reliable safety technologies for lifting gear and heavy equipment, ensuring the highest standards of workplace safety and accident prevention.
                    </p>
                    <p className="text-lg leading-relaxed text-justify font-oswald text-blue-950">
                        Founded with a mission to revolutionize safety in industrial and construction environments, Liftguard Solutions is committed to designing and delivering cutting-edge solutions that protect personnel and assets during lifting operations. Our services include comprehensive inspection, load testing, and pressure testing for a wide range of equipment, including cranes, forklifts, compressors, and lifting gear.
                    </p>
                </div>

                {/* Image Content */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={aboutsImage}
                        alt="About Liftguard Solutions"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Additional Info Section */}
            <div data-aos="fade-up" className="mt-16 mx-5  max-w-6xl md:mx-auto">
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed font-oswald md:ps-11 xl:ps-0 text-blue-950">
                        With a team of dedicated engineers, technicians, and safety professionals, we combine expertise and innovation to meet international safety standards. Our state-of-the-art equipment, including high-capacity load cells and tensile testing machines, ensures precision and reliability in every project.
                    </p>
                    <p className="text-lg leading-relaxed font-oswald md:ps-11 xl:ps-0 text-blue-950">
                        Choose Liftguard Solutions for a safer, more efficient workplace. Together, let’s build a future where safety is paramount.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Overview;
