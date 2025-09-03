import React from 'react';
import image2 from '../../../assets/our-service-1 (2).jpg'

const LoadTest = () => {
    return (
        <section className="bg-white container mx-auto px-4 md:px-16 md:mb-20 md:flex flex-col md:flex-row items-center justify-center">
        
                        <div className="lg:flex md:items-center justify-center md:w-11/12 md:mx-auto gap-10">
                            {/* Left: Service List */}
                            <div data-aos="fade-right" className="lg:w-1/2">
                                <ul className="list-disc list-inside space-y-3 text-gray-700 font-oswald">
                                    <h1 className="font-extrabold text-blue-950 text-2xl uppercase">Scope Of Inspection & Load Test</h1>
                                    <li>Passengers & cargo lift inspection & load test.</li>
                                    <li>Man lift inspection & load test.</li>
                                    <li>Forklift inspection & load test.</li>
                                    <li>Tower crane inspection & load test.</li>
                                    <li>Overhead crane inspection & load test.</li>
                                    <li>Excavator & wheel loader inspection.</li>
                                    <li>Mobile crane inspection & load test.</li>
                                    <li>Electric or diesel winch machine inspection & load test.</li>
                                    <li>Truck crane inspection & load test.</li>
                                    <li>
                                        All types of lifting equipment & lifting gear inspection & load
                                        test (webbing sling, round sling, chain sling automotive hoist,
                                        manual chain block, lever hoist, chain block, lifting pulley, all
                                        types of clamps, lifting boom, hydraulic trolley, eye bolt,
                                        shackles, etc.)
                                    </li>
                                </ul>
                            </div>
        
                            {/* Right: Images */}
                            <div className=" lg:w-1/2 mt-8 md:mt-0 flex items-center justify-center mb-20">
                                <div data-aos="fade-left" className="relative">
                                    <img
                                        src={image2} // Replace with your image
                                        alt="Service 2"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
        
        
                    </section>
    );
};

export default LoadTest;