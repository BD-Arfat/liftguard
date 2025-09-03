import React from 'react';
import image2 from '../../../assets/ser-1.webp'

const AboutNdt = () => {
    return (
        <div>
                <h1 className="md:text-3xl text-lg text-center mx-4 md:mx-0 font-extrabold text-blue-950 leading-snug font-oswald">
                    Ensure Safety and Quality with Our NDT Services
                </h1>
                <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">

                    <div data-aos="fade-up">
                        <div className="md:w-11/12 md:mx-auto">
                            <div className="md:flex  items-center justify-center gap-10 shadow-lg  rounded-md bg-white p-6 border-t-4 border-yellow-500 w-full md:mx-auto mt-10">
                                <div className="md:w-1/2 mx-auto">
                                    <h2 className="font-bold text-xl lg:text-4xl text-blue-950 mb-4 uppercase font-oswald">About Us</h2>
                                    <p className="text-gray-600 leading-relaxed text-justify font-oswald">
                                        At Liftguard Solution , we specialize in cutting-edge Nondestructive Testing (NDT) solutions designed to ensure the safety, reliability, and performance of your equipment and structures. With a team of certified professionals and state-of-the-art technology, we deliver accurate and reliable results that help you meet industry standards and maintain operational excellence.
                                    </p>
                                </div>
                                <div className="md:w-96 mt-6 md:mt-0 w-full">
                                    <img className="rounded-lg w-96 mx-auto" src={image2} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
    );
};

export default AboutNdt;