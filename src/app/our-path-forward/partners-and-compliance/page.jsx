import Image from 'next/image';
import React from 'react';

const PartnersAndCompliance = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700">
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Partners & Compliance
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                </div>
            </section>

            {/* Compliance Section */}
            <div className="max-w-5xl mx-auto py-16 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Compliance & Code of Conduct
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                {/* <div className="">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase underline">Compliance & Code of Conduct</h2>
                </div> */}
                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        At Transbangla Commodities, we are committed to fully complying with the regulations set forth by Bangladesh Bank, the country&apos;s central regulatory authority for banking and financial operations. By aligning with Bangladesh Bank&apos;s guidelines, we ensure transparency, accountability, and ethical standards across all our financial transactions and business practices.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        We uphold a strict code of conduct that all employees must follow. Working with globally recognized suppliers, manufacturers, and traders, Transbangla Commodities  rigorously adhered to compliance standards, including:
                    </p>

                    <ul className="list-inside list-disc text-gray-700 space-y-2 ml-4">
                        <li>Anti-Bribery & Anti-Corruption</li>
                        <li>Anti-Money Laundering & Counter-Terrorism Financing</li>
                        <li>Trade-Based Anti-Money Laundering</li>
                        <li>Conflict of Interest Policies</li>
                    </ul>
                </div>
            </div>

            {/* Partners Section */}
            <div className="max-w-5xl mx-auto py-16 px-4">
                <div className="mb-8">
                    <div className='mb-8'>
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                            Partners We Made
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    </div>
                    {/* <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase underline">Partners We Made</h2> */}
                    <p className="text-gray-700">
                        Over the years, we have built powerful business relationships with some of the most respected names in the industry, reflecting our commitment to quality, trust, and global collaboration. These strategic alliances empower us to expand our impact and bring exceptional value to the industries we serve. We have also proudly served as a strategic business advisor to Petronas, a globally renowned name in the petroleum industry.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Partner Card */}
                    <div className="bg-gray-200 border p-6 flex items-center">
                        <Image src="/partners/petronas.jpeg" alt="Petronas" width={100} height={100} className="shadow-xl" />
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-900">Petco Trading Labuan Company Limited by Petronas</h3>
                            <p className="text-gray-600">2008 - Present</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 border p-6 flex items-center">
                        <Image src="/partners/ptt.png" alt="Partner 2" width={100} height={100} className="shadow-xl" />
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-900">PTT International Trading Pte Ltd.</h3>
                            <p className="text-gray-600">2014 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersAndCompliance;