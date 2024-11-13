import Image from 'next/image';
import React from 'react';

const Partners = () => {
    const partners = [
        { name: "Petronas", logo: "/partners/petronas.jpeg" },
        { name: "Ptt", logo: "/partners/ptt.png" },
    ]
    return (
        <section className="w-full max-w-4xl mx-auto my-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Partners We Made</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                width={240}
                                height={120}
                                className="w-[240px] h-[120px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;