import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0">
                <img
                    src="/hero-background.jpg"
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                {/* Tagline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 animate-fade-in">
                    Transbangla Commodities Limited
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/90 text-center max-w-2xl mb-8">
                    Global Routes to Future Roots
                </p>

                {/* CTA Button */}
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold 
                           hover:bg-gray-100 transition-colors duration-200
                           transform hover:scale-105">
                    Start Your Journey
                </button>
            </div>
        </div>
    );
};

export default Hero;