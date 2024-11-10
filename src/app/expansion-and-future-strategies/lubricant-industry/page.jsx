import { Calendar, Flag } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const LubricantIndustry = () => {

    const lubImages = [
        { src: '/lubricant/vivo.png', alt: 'Jetty image 1' },
        { src: '/lubricant/hyrax.png', alt: 'Jetty image 2' },
        { src: '/lubricant/mabanol.png', alt: 'Jetty image 3' },
    ]

    const partnerships = [
        { brand: "Vivo", year: "2019", country: "Singapore" },
        { brand: "Hyrax", year: "2021", country: "Malaysia" },
        { brand: "Mabanol", year: "2023", country: "Germany" }
    ]

    const data = [
        { grade: "5W- 40", vivo: "", hyrax: "", mabanol: "320" },
        { grade: "10W- 40", vivo: "", hyrax: "", mabanol: "2880" },
        { grade: "15W- 40", vivo: "", hyrax: "", mabanol: "7080" },
        { grade: "20W- 50", vivo: "25,056", hyrax: "91,950", mabanol: "11,488" },
    ]

    const totals = {
        vivo: "25,056",
        hyrax: "91,950",
        mabanol: "21,768"
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700">
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Lubricant Industry
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto py-16 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Our Footsteps in the Lubricant Industry
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                <div className="">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        With one of our sister concerns, we have expanded our portfolio through a specialized wing dedicated to importing and supplying premium lubricants and lube-based engine oils. This wing addresses the rising demand for high-quality lubricants in Bangladesh and has partnered with three globally recognized brands: Vivo (Singapore), Hyrax (Malaysia), and Mabanol (Germany). Through these collaborations, we have introduced our first heavy-duty engine oils, Tiger Super supplied Hyrax, setting a new standard in the regional market.
                    </p>
                </div>

                {/* <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white transition-shadow">
                        <div className="relative h-64">
                            <Image
                                src="/lubricant/vivo.png"
                                alt="Dark container with red accents"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="bg-white transition-shadow">
                        <div className="relative h-64">
                            <Image
                                src="/lubricant/hyrax.png"
                                alt="Green bottle of lubricant"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="bg-white transition-shadow">
                        <div className="relative h-64">
                            <Image
                                src="/lubricant/mabanol.png"
                                alt="White and blue bottle"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div> */}
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        {lubImages.map((image, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-contain bg-gray-200 transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                                    {/* <div className="absolute bottom-4 left-4 text-white">
                                                <p className="text-lg font-semibold">{`Photo ${index + 1}`}</p>
                                                <p className="text-sm">Click to expand</p>
                                            </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Partnership Details */}
                <div className="mt-16 overflow-hidden">
                    <div className='mb-8'>
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                            Company Partnership Details
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    </div>
                    {/* <div className="p-6 border-b">
                        <h3 className="text-xl font-semibold text-gray-900">Company Partnership Details</h3>
                    </div> */}
                    <div className="max-w-3xl border divide-y divide-gray-200">
                        {partnerships.map((partner, index) => (
                            <div
                                key={index}
                                className="p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-50 transition-colors"
                            >
                                <div className="font-medium text-lg text-gray-900 mb-2 md:mb-0">{partner.brand}</div>
                                <div className="flex flex-col md:flex-row gap-4 text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5 text-blue-500" />
                                        <span>Year: {partner.year}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Flag className="h-5 w-5 text-green-500" />
                                        <span>Origin: {partner.country}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 overflow-hidden">
                    <div className='mb-8'>
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                            Product Variety & Quantity Supplied
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    </div>
                    <div className="">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Through our sister concern, we offer a range of engine oil grades across these brands to meet diverse automotive and industrial needs. The table below provides an overview of the types and quantities available:
                        </p>
                    </div>

                    <div className="w-full max-w-3xl mx-auto p-4">
                        <div className="overflow-x-auto border border-gray-200">
                            <table className="w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-center  border text-lg font-bold text-gray-800">

                                        </th>
                                        <th colSpan={3} className="px-6 py-3 text-center bg-gray-50 border-b text-lg font-bold text-gray-800">
                                            Brands
                                        </th>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 border">
                                            SAE Grade
                                        </th>
                                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800 border">
                                            Vivo (Liters)
                                        </th>
                                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800 border">
                                            Hyrax (Liters)
                                        </th>
                                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800 border">
                                            Mabanol (Liters)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr
                                            key={row.grade}
                                            className={`hover:bg-blue-50 transition-colors`}>
                                            <td className="border px-6 py-4 text-sm font-medium text-gray-900">
                                                {row.grade}
                                            </td>
                                            <td className="border px-6 py-4 text-sm text-gray-900 text-center">
                                                {row.vivo || '—'}
                                            </td>
                                            <td className="border px-6 py-4 text-sm text-gray-900 text-center">
                                                {row.hyrax || '—'}
                                            </td>
                                            <td className="border px-6 py-4 text-sm text-gray-900 text-center">
                                                {row.mabanol || '—'}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-50 font-semibold">
                                        <td className="border px-6 py-4 text-sm text-gray-900">Total</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 text-center">{totals.vivo}</td>
                                        <td className="border px-6 py-4 text-sm text-gray-900 text-center">{totals.hyrax}</td>
                                        <td className="border px-6 py-4 text-sm text-gray-900 text-center">{totals.mabanol}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LubricantIndustry;