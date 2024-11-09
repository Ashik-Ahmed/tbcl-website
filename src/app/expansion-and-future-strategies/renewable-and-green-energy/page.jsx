import Image from 'next/image';
import React from 'react';

const RenewableEnergy = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700">
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Renewable and Green Energy
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                </div>
            </section>

            <div className='max-w-5xl mx-auto py-16 md:flex md:gap-x-16 md:items-center'>
                <div className="w-1/2 px-4">
                    <div className='mb-8'>
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                            Our Blueprint in Renewable and Green Energy
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Transbangla’s other sister concern is leading Bangladesh toward a sustainable future by championing innovative green energy solutions. Through that, we are expanding into the EV ecosystem with a robust charging station network, making clean transportation accessible nationwide. Beyond EV infrastructure, our sister concern is also advancing into hydrogen (H₂) production from bioethanol, a promising renewable source for co-generating heat and power (CHP). With the emergence of second-generation bioethanol, we are focused on optimizing processes to ensure economic sustainability, positioning H₂ as a viable, green energy solution for Bangladesh, and paving the way for a resilient, greener economy.
                    </p>
                </div>
                {/* Image Section */}
                <div className="w-1/2 relative">
                    <div className="aspect-w-20 aspect-h-9"> {/* 2000:897 ratio simplified */}
                        <Image
                            src="/green-energy.png"
                            alt="Our Team"
                            layout="responsive"
                            width={2000}
                            height={897}
                            className="rounded-lg"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full -z-10"></div>
                </div>

            </div>
        </div>
    );
};

export default RenewableEnergy;