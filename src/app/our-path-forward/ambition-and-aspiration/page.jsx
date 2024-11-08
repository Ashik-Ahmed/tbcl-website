import { Award, Rocket, Target } from 'lucide-react';
import React from 'react';

const AmbitionAndAspiration = () => {
    const visionData = [
        {
            icon: <Award size={48} className="text-blue-600" />,
            title: 'Our Aim',
            description: "We aim to redefine the service standards by delivering seamless, value-driven experiences that optimize every step of the supply chain, from sourcing to shipping, for partners worldwide. Driven by the commitment to efficiency, adaptability, and end-to-end support, we empower our client companies to navigate their business confidently and efficiently."
        },
        {
            icon: <Rocket size={48} className="text-blue-600" />,
            title: 'Our Ambition',
            description: "We aim to drive global trading and shipping, empowering companies through strategic partnerships and intelligent expansion. As we grow, we dedicate our time to setting new benchmarks in service excellence, reliability, and innovation, becoming an indispensable resource for entities seeking value and vision in a rapidly changing business world."
        },
        {
            icon: <Target size={48} className="text-blue-600" />,
            title: 'Our Aspiration',
            description: "Transbangla Commodities is all about integrity, adaptability, and strong collaboration. Fueled by transparency and a growth mindset, we work daily to make every partnership meaningful, every process seamless, and every success a shared victory."
        }
    ];

    return (
        <div className="min-h-screen">
            <div className="relative h-[60vh] overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
                {/* Hero Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our Ambition and Aspiration
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {visionData.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className=" p-8 text-center space-y-6">
                                <div className="flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AmbitionAndAspiration;