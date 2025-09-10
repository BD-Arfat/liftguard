import React, { useEffect, useState } from 'react';

const OurClients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            const data = [
                "https://krshiprecycling.com/_astro/logo_dark.3b76f077.svg",
                "http://krsteelstructure.com/wp-content/uploads/2020/11/KRSteelStructureLed-logo.png",
                "https://safetyzenbd.com/wp-content/uploads/2025/07/Safetyzen-Logo.webp",
                "https://upload.wikimedia.org/wikipedia/commons/5/51/Amazon_logo.svg"
            ];
            setClients(data);
        };

        fetchClients();
    }, []);

    return (
        <section className="w-full py-20 mt-28 md:mt-20 mb-20 md:mb-40 font-oswald">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#0F766E]">
                    Our Clients
                </h2>
                <p className="text-lg mb-12 text-gray-700 opacity-90">
                    We are proud to work with these amazing companies.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="border-2 border-transparent hover:border-[#F59E0B] rounded-lg transition-all duration-300 p-1 md:w-60 md:mx-auto bg-[#0F766E] md:h-36"
                        >
                            <div className="p-4 bg-white shadow-lg w-full h-full flex items-center justify-center rounded-lg border-2 border-transparent hover:border-[#F59E0B] hover:scale-105 transition-transform duration-300">
                                <img
                                    src={client}
                                    alt={`Client ${index + 1}`}
                                    className="h-16 object-contain mx-auto"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurClients;
