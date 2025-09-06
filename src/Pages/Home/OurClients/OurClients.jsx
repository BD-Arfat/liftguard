import React, { useEffect, useState } from 'react';

const OurClients = () => {
    const [clients, setClients] = useState([]);

    // Example API simulation
    useEffect(() => {
        // এখানে আপনি real API call করতে পারেন axios/fetch দিয়ে
        const fetchClients = async () => {
            const data = [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
                "https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_logo_2015.png",
                "https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_icon.svg",
                "https://upload.wikimedia.org/wikipedia/commons/5/51/Amazon_logo.svg"
            ];
            setClients(data);
        };

        fetchClients();
    }, []);

    return (
        <div className="w-full py-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Our Clients</h2>
                <p className="text-lg mb-12 text-gray-700">
                    We are proud to work with these amazing companies.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={client}
                                alt={`Client ${index + 1}`}
                                className="h-16 object-contain mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurClients;
