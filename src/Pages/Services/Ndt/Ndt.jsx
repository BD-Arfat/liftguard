import React from 'react';

const Ndt = () => {
    return (
        <div>
            <div className="relative flex flex-col w-11/12  items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div  data-aos="fade-right" className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-10  w-full md:mx-auto ">

                    <div className="shadow-lg rounded-md bg-white p-6 border-t-4 border-yellow-500  w-full md:mx-auto">
                        <h2 className="font-bold text-xl text-blue-950 mb-4 uppercase font-oswald">Our NDT Services</h2>
                        <p className="text-gray-600 leading-relaxed font-oswald text-lg">
                            We offer a comprehensive range of NDT services tailored to your needs:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 font-oswald">
                            <li><span className="font-bold text-sm">Ultrasonic Testing (UT):</span> Detect internal flaws and material thickness with precision.</li>
                            <li><span className="font-bold text-sm">Radiographic Testing (RT):</span> Identify hidden defects using advanced imaging techniques.</li>
                            <li><span className="font-bold text-sm">Magnetic Particle Testing (MT):</span> Surface and near-surface flaw detection for ferromagnetic materials.</li>
                            <li><span className="font-bold text-sm">Liquid Penetrant Testing (PT):</span> Highlight surface defects with visible or fluorescent dyes.</li>
                        </ul>
                    </div>
                    {/* card number 2 */}
                    <div className="shadow-lg rounded-md bg-white p-6 border-t-4 border-yellow-500  w-full md:mx-auto">
                        <h2 className="font-bold text-xl text-blue-950 mb-4 uppercase font-oswald">Industries We Serve</h2>
                        <p className="text-gray-600 leading-relaxed font-oswald">
                            We proudly offer our expert NDT solutions across various
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 font-oswald">
                            <div className="flex md:gap-10 gap-3 text-sm">
                                <div>
                                    <li>industries</li>
                                    <li>including Oil and Gas</li>
                                    <li>Aerospace</li>
                                    <li>Construction</li>
                                </div>
                                <div>
                                    <li>Power Generation</li>
                                    <li>Manufacturing</li>
                                    <li>and Automotive.</li>
                                </div>
                            </div>
                        </ul>
                        {/* <!-- Contact Information --> */}
                        <div className="mt-6 text-gray-600 font-oswald">
                            <p>📞 <span className="font-bold">01321229107</span></p>
                            <p>📩 <span className="font-bold">solutionliftguard@gmail.com</span></p>
                        </div>

                        <p className="mt-6 text-yellow-600 font-semibold font-oswald">
                            Partner with us for peace of mind and the assurance of quality. Your safety is our priority!
                        </p>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Ndt;