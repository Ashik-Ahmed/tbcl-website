import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {/* Abstract shapes */}
                        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute top-40 right-40 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our Path Forward
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                    {/* <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                        Transforming ideas into reality since 2010. We're more than just a company;
                        we're a community of innovators and dreamers.
                    </p> */}
                </div>

                {/* Scroll Indicator */}
                {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                    </div>
                </div> */}
            </div>

            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden">
                            <img
                                src="/service.avif"
                                alt="Our Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-2xl -z-10"></div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                                Our Story
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            With over two decades of commitment and trusted expertise, Transbangla Commodities has elevated itself as a comprehensive energy and commodity solutions provider, supporting industries and organizations across Bangladesh and beyond boundaries.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Starting in 2000, we have been working tirelessly in Bangladesh&apos;s energy and commodity trading landscape, securing our spot as the go-to choice for industries needing versatile solutions. Specialized in energy, we accumulate business development, fleet management, shipping facilities and several services that have effortlessly connected global partners with country-wide needs.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our journey began with importing essential raw materials; however, as global energy demands evolved, so did We. Today, we have pivoted into the forefront of supplying petroleum finished products alongside a diverse range of commodities and top-notch shipping services. By forming strategic partnerships with leading traders, manufacturers, and suppliers overseas, we ensure that our partners—from public entities to private enterprises—receive exceptional service proficiency and excellence.
                        </p>

                        {/* <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                                <div className="text-gray-600">Years of Excellence</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                                <div className="text-gray-600">Projects Delivered</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To deliver innovative solutions that empower businesses and individuals to achieve
                                their full potential. We believe in creating lasting impact through technology
                                and human ingenuity.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            {/* <div className="bg-gray-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Innovation',
                                description: 'Pushing boundaries and embracing new technologies to solve complex challenges.'
                            },
                            {
                                title: 'Excellence',
                                description: 'Maintaining the highest standards in everything we do, from code to customer service.'
                            },
                            {
                                title: 'Integrity',
                                description: 'Building trust through transparency, honesty, and ethical business practices.'
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-200">
                                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default AboutPage;