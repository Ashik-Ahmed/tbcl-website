import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0">
                <img
                    src="/hero-image.png"
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col  justify-center px-4 sm:px-6 lg:px-8">
                {/* Tagline */}
                <h1 className="text-4xl md:text-7xl text-white font-bold mb-8"
                    style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.9), 1px 1px 0 rgba(0, 0, 0, 0.8)" }}>
                    Global Routes to Future Roots
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white mb-8 py-4">
                    We Are Leading with Trust - With a Legacy of Dependability at Home and Overseas
                </p>
                {/* <p
                    className="text-4xl md:text-6xl text-white font-bold mb-8"
                    style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.9), 1px 1px 0 rgba(0, 0, 0, 0.8)" }}
                >
                    Global Routes to Future Roots
                </p> */}


                {/* CTA Button */}
                <Link href="/contact" className="w-fit bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold 
                           hover:bg-gray-100
                           transform hover:scale-105 transition-all duration-300">
                    Start Your Journey
                </Link>
            </div>
        </div>
    );
};

export default Hero;