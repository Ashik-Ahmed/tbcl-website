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
            <div className="relative h-full flex flex-col  justify-center px-4 sm:px-6 lg:px-8">
                {/* Tagline */}
                {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 animate-fade-in">
                    Transbangla Commodities Limited
                </h1> */}

                {/* Subtitle */}
                {/* <p className="text-4xl md:text-6xl text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.9)] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)] font-bold mb-8 bg-red-500 border border-white py-4">
                    Global Routes to Future Roots
                </p> */}
                <p
                    className="text-4xl md:text-6xl text-white font-bold mb-8"
                    style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.9), 1px 1px 0 rgba(0, 0, 0, 0.8)" }}
                >
                    Global Routes to Future Roots
                </p>


                {/* CTA Button */}
                {/* <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold 
                           hover:bg-gray-100 transition-colors duration-200
                           transform hover:scale-105">
                    Start Your Journey
                </button> */}
            </div>
        </div>
    );
};

export default Hero;