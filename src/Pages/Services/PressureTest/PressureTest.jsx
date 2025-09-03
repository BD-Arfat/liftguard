import React from 'react';
import image2 from '../../../assets/presser-test.jpg'

const PressureTest = () => {
    return (
        <section data-aos="fade-up" className="bg-white container mx-auto px-4 md:px-16 md:mb-10 md:flex flex-col md:flex-row items-center justify-center md:w-11/12 md:mx-auto">

            <div className="lg:flex md:items-center justify-center md:w-11/12 md:mx-auto gap-10">
                {/* Right: Images */}
                <div className=" lg:w-1/2 mt-8 md:mt-0 flex items-center justify-center mb-10">
                    <div className="relative">
                        <img
                            src={image2} // Replace with your image
                            alt="Service 2"
                            className="rounded-lg"
                        />
                    </div>
                </div>
                {/* Left: Service List */}
                <div className="lg:w-1/2">
                    <ul className="list-disc list-inside space-y-3 text-gray-700 font-oswald">
                        <h1 className="font-extrabold text-blue-950 text-2xl uppercase">Scope of inspectin & pressure test</h1>
                        <li>Pressure gauge calibration & pressure test.</li>
                        <li>Air compressor thickness & pressere test.</li>
                        <li>Safety valve inspection & pressure test.</li>
                        <li>Pressure measuring instrument.</li>
                        <li>Pressure vessel inspection and hydro test.</li>

                    </ul>
                </div>


            </div>


        </section>
    );
};

export default PressureTest;