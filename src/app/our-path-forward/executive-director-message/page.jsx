import React from 'react';

const ExecutiveMessage = () => {
    return (
        <div className="min-h-screen">
            <div className="relative h-[60vh] overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
                {/* Hero Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Message From Executive Director
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                </div>
            </div>

            {/* Message Content Section */}
            <div className="relative bg-white">
                <div className="absolute -top-32 left-0 right-0 h-32 "></div>

                <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
                    {/* Executive Info */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <img
                                    src="/service.avif"
                                    alt="Executive Director Portrait"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">John Anderson</h2>
                            <p className="text-blue-600 font-medium">Executive Director</p>
                        </div>
                    </div>

                    {/* Quote Cards */}
                    <div className="grid mb-16">
                        <div className="bg-gray-200 border p-8 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 transform -skew-x-12"></div>
                            <div className="relative">
                                <div className="text-5xl text-blue-500 mb-4">&quot;</div>
                                <p className="text-gray-600 leading-relaxed italic">
                                    We believe that success in today&apos;s interconnected world requires resilience, adaptability, and a commitment to quality. So, we work with every expertise we have to drive mutual growth for us and our partners, empowering them and enhancing the efficiency of trade across borders. We are dedicated to supporting sustainable development that positively impacts the industries we serve.
                                </p>
                                <p className="text-gray-600 leading-relaxed italic mt-4">
                                    Together, we envision a future where our collaborative efforts fuel growth and set new standards for sustainable impact across industries and regions. By fostering a culture of innovation and reliability, we are dedicated to building partnerships that strengthen global trade, support resilient communities, and create positive, far-reaching changes for future generations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signature Section */}
                    <div className="max-w-3xl mx-auto mt-12">
                        <div className="flex flex-col items-end">
                            <div className="w-48 mb-4">
                                <img
                                    src="/service.avif"
                                    alt="Signature"
                                    className="w-full object-contain"
                                />
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-gray-900">John Anderson</div>
                                <div className="text-sm text-gray-600">Executive Director</div>
                                <div className="text-sm text-blue-600">Tarnsbangla Commodities Ltd.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ExecutiveMessage;