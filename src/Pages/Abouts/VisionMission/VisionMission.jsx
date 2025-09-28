import React from 'react';

const VisionMission = () => {
    return (
        <section className="relative md:py-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-0 right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-600">Our Foundation</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
                        Vision & Mission
                    </h2>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
                    
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Committed to <span className="font-semibold text-blue-600">safety</span>, <span className="font-semibold text-indigo-600">reliability</span> and <span className="font-semibold text-[#0F766E]">innovation</span> in everything we do.
                    </p>
                </div>

                {/* Cards Grid */}
                <div  className="grid gap-8 lg:grid-cols-2 items-stretch">
                    {/* Vision Card */}
                    <article className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div data-aos="fade-right" className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/20 hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                            {/* Icon Container */}
                            <div  className="flex items-start gap-6 mb-6">
                                <div className="flex-none w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Vision</h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                To be the <span className="font-semibold text-blue-600">most trusted and leading provider</span> of crane, lifting equipment, and NDT services in Bangladesh, delivering <span className="font-semibold text-indigo-600">safe, reliable, and high-quality solutions</span> to the industrial and marine sectors.
                            </p>
                        </div>
                    </article>

                    {/* Mission Card */}
                    <article className="group relative">
                        <div className="absolute inset-0 bg-[#0F766E] rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div data-aos="fade-left" className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/20 hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                            {/* Icon Container */}
                            <div className="flex items-start gap-6 mb-6">
                                <div className="flex-none w-16 h-16 rounded-2xl bg-[#0F766E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                    <div className="w-12 h-1 bg-[#0F766E] rounded-full"></div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                Our mission is to ensure <span className="font-semibold text-[#0F766E]">safety, reliability, and innovation</span> in every service we provide. We are committed to delivering <span className="font-semibold text-[#0F766E]">international standard inspection and testing solutions</span> for industries and marine operations, helping our clients achieve maximum performance with minimum risk.
                            </p>
                        </div>
                    </article>
                </div>
            </div>

            <style jsx>{`
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
};

export default VisionMission;
