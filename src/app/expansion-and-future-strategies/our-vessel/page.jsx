import { Anchor, ArrowBigDown, Box, Container, Cpu, DollarSign, Gauge, LayoutGrid, Ruler, Ship, Weight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const OurVessel = () => {

    const shipData = [
        { year: "2014", totalVoyage: 60, totalQuantity: 58233.06 },
        { year: "2015", totalVoyage: 83, totalQuantity: 80238.84 },
        { year: "2016", totalVoyage: 80, totalQuantity: 76862.16 },
        { year: "2017", totalVoyage: 76, totalQuantity: 73137.16 },
        { year: "2018", totalVoyage: 78, totalQuantity: 75304.63 },
        { year: "2019", totalVoyage: 76, totalQuantity: 73562.76 },
        { year: "2020", totalVoyage: 75, totalQuantity: 71866.58 },
        { year: "2021", totalVoyage: 73, totalQuantity: 69358.83 },
        { year: "2022", totalVoyage: 70, totalQuantity: 66848.46 },
        { year: "2023", totalVoyage: 68, totalQuantity: 65997.74 },
        { year: "2024 (up to September)", totalVoyage: 40, totalQuantity: 38426.00 },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700">
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our Vessel
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                    <div className='max-w-5xl'>
                        <p className='text-white'>Transbangla proudly owns the MT Precious Eternal (Registration No. M-13472), a vessel built in 2014 and committed to powering refined oil transport for the Bangladesh Petroleum Corporation (BPC). Since its commissioning, the MT Precious Eternal has steadfastly served BPC depots across Bangladesh, including key hubs in Godnail, Fotulla, Khulna, Chandpur, Jhalokathi, Barisal, Baghabari, and Bhoirob, enhancing national energy distribution with precision and resilience.</p>
                    </div>
                </div>
            </section>
            <div className="max-w-6xl mx-auto py-16 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        MT Precious Eternal
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <div className="">
                    <div className="mx-auto max-w-7xl bg-white">
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative min-h-[300px] overflow-hidden ">
                                <Image
                                    src="/vessel/mt_precious_eternal.jpeg"
                                    alt="Oil Tanker Ship"
                                    className="object-cover"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>

                            {/* Content Section */}
                            <div className="">
                                <div className="mb-6">
                                    <h1 className="mb-2 text-3xl font-bold text-gray-900">Oil Tanker Vessel</h1>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Ship className="h-5 w-5" />
                                        <span>Commercial Oil Transport Vessel</span>
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {/* Dimensions */}
                                    <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                                        <h2 className="mb-3 font-semibold text-blue-900">Dimensions</h2>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-blue-700">
                                                <Ruler className="h-4 w-4" />
                                                <span>Length: 55.39 M</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-blue-700">
                                                <LayoutGrid className="h-4 w-4" />
                                                <span>Breadth: 10.36 M</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-blue-700">
                                                <ArrowBigDown className="h-4 w-4" />
                                                <span>Draft: 3.50 M</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Technical Specs */}
                                    <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-4">
                                        <h2 className="mb-3 font-semibold text-emerald-900">Technical Specs</h2>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-emerald-700">
                                                <Cpu className="h-4 w-4" />
                                                <span>Engine: China Diesel (2Nos)</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-emerald-700">
                                                <Gauge className="h-4 w-4" />
                                                <span>Horse Power: 300X2=600 BHP</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-emerald-700">
                                                <Box className="h-4 w-4" />
                                                <span>Steel Body</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Capacity */}
                                    <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 p-4">
                                        <h2 className="mb-3 font-semibold text-amber-900">Capacity & Structure</h2>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-amber-700">
                                                <Weight className="h-4 w-4" />
                                                <span>Capacity: 800 MT</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-amber-700">
                                                <Container className="h-4 w-4" />
                                                <span>Double Bottom</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-amber-700">
                                                <Anchor className="h-4 w-4" />
                                                <span>Gross Ton: 601</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Value */}
                                    <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-4">
                                        <h2 className="mb-3 font-semibold text-purple-900">Value</h2>
                                        <div className="flex items-center gap-2 text-purple-700">
                                            <DollarSign className="h-4 w-4" />
                                            <span>7.5 Crore</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container max-w-6xl mx-auto py-8 md:py-16">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        History of MT Precious Eternal Throughout the Years
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                <div className="max-w-5xl mx-auto overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2 text-center font-medium">Year</th>
                                <th className="border border-gray-300 p-2 text-center font-medium">Total Voyage</th>
                                <th className="border border-gray-300 p-2 text-center font-medium">Total Quantity Carried (MT)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shipData.map((data, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 text-center p-2">{data.year}</td>
                                    <td className="border border-gray-300 text-center p-2">{data.totalVoyage}</td>
                                    <td className="border border-gray-300 text-center p-2">{data.totalQuantity.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default OurVessel;