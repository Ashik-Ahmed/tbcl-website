import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesGrid = () => {
    // Sample services data - in real application, this would be passed as props
    const services = [
        {
            id: 1,
            title: 'Facilitation & Business Advisory',
            image: '/service.avif',
            link: '/expertise#facilitation-and-business-advisory',
            description: 'Advanced industrial automation and control systems'
        },
        {
            id: 2,
            title: 'Business Development ',
            image: '/service.avif',
            link: '/expertise#business-development',
            description: 'Modern construction and infrastructure development'
        },
        {
            id: 3,
            title: 'Fleet Management',
            image: '/service.avif',
            link: '/expertise#fleet-management',
            description: 'State-of-the-art medical facilities and services'
        },
        {
            id: 4,
            title: 'Agent Management',
            image: '/service.avif',
            link: '/expertise#agent-management',
            description: 'Precision manufacturing and quality control'
        },
        {
            id: 5,
            title: 'Shipping Services',
            image: '/service.avif',
            link: '/expertise#shipping-services',
            description: 'Advanced retail management systems'
        },
        {
            id: 6,
            title: 'Fender Service',
            image: '/service.avif',
            link: '/expertise#fender-service',
            description: 'Cutting-edge technology solutions'
        }
    ];

    return (
        <section id='services' className='py-16 bg-gray-800'>
            <div className="w-full max-w-7xl mx-auto p-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] group cursor-pointer bg-white"
                        >
                            {/* Image and Text Container */}
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0"
                                />
                                {/* Text Below Image */}
                                <div className="absolute bottom-4 left-4 right-4 text-center text-black bg-white/80 p-2 rounded-md shadow-md group-hover:hidden transition-all duration-800">
                                    <p>{service.title}</p>
                                </div>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-white/80 text-sm">{service.description}</p>
                                </div>
                            </div>

                            {/* Learn More Button */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                    transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <Link href={service.link} className="bg-white/90 hover:bg-white text-black px-4 py-2 rounded-md 
                            text-sm font-medium shadow-lg">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default ServicesGrid;