import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import data from '../../../serviceData';
import ServiceProducts from './ServiceProducts/ServiceProducts';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    return (
        <div data-aos="fade-up" className="py-20  font-oswald mt-28 md:mt-60">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F766E] mb-4 uppercase">
                        Our Services
                    </h2>
                    <div className="w-28 mx-auto mb-6 border-b-4 border-[#F59E0B]"></div>
                    <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto">
                        Explore our specialized services designed to enhance safety, performance, and compliance in
                        industrial operations.
                    </p>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {data.map((service) => (
                        <SwiperSlide key={service.id}>
                            <ServiceProducts service={service} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/Services"
                        className="inline-block px-8 py-3 bg-[#0F766E] text-white rounded-lg text-sm md:text-base font-semibold shadow-md hover:bg-[#0d5a52] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        View More Services
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
