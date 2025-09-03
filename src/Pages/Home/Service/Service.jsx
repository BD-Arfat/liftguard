import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // শুধুমাত্র Pagination মডিউল রাখা হয়েছে
import 'swiper/css';
import 'swiper/css/pagination';
import data from '../../../serviceData';
import ServiceProducts from './ServiceProducts/ServiceProducts';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Service = () => {
    useEffect(() => {
            AOS.init({
                duration: 2000, // অ্যানিমেশন সময়কাল (মিলিসেকেন্ডে)
                once: true, // একবারই অ্যানিমেশন হবে
            });
        }, []);
    return (
        <div data-aos="fade-up" className="py-16 bg-gray-100 font-oswald mt-28 md:mt-60">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                        Our Services
                    </h2>
                    <p className="text-blue-950 text-sm md:text-lg">
                        Discover the range of services we offer to ensure your safety and efficiency in industrial operations.
                    </p>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination]} // শুধুমাত্র Pagination মডিউল যুক্ত করা হয়েছে
                    className="mySwiper"
                >
                    {data.map((service) => (
                        <SwiperSlide key={service.id}>
                            <ServiceProducts service={service} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* View More Button */}
                <div className="text-center mt-10">
                    <Link
                        to={"/Services"}
                        className="px-6 py-3 bg-blue-950 text-white rounded-lg text-sm md:text-base font-medium shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        View More Services
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
