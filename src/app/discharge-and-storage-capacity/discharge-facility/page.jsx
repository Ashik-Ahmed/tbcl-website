import React from 'react';

const DischargeFacility = () => {

    const months = [
        "July, 2024",
        "August, 2024",
        "September, 2024",
        "October, 2024",
        "November, 2024",
        "December, 2024"
    ]

    const days = Array.from({ length: 31 }, (_, i) => ({
        date: `${i + 1}${getOrdinalSuffix(i + 1)}`,
        inward: "10.00",
        outward: "10.00"
    }))

    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th'
        switch (day % 10) {
            case 1: return 'st'
            case 2: return 'nd'
            case 3: return 'rd'
            default: return 'th'
        }
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700">
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Discharge Facility
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                    <div className='max-w-5xl'>
                        <p className='text-white'>We have jotted down essential publicly available information to give you a clear perspective on Bangladesh’s dynamic market. By analyzing best practices, existing infrastructure, and capacity benchmarks, we highlight the efficiency and potential of these facilities, identifying opportunities for innovation and growth. </p>
                    </div>
                </div>
            </section>
            <div className="max-w-5xl mx-auto py-16 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Discharge Facility
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>

                    <div className='mt-8'>
                        <h3 className='text-xl font-semibold'>A. Jetties in Chittagong</h3>
                        <div className="w-full overflow-x-auto mt-4">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-2 text-center font-medium">SL No.</th>
                                        <th className="border border-gray-300 p-2 text-center font-medium">Jetty Name</th>
                                        <th className="border border-gray-300 p-2 text-center font-medium">Permissible LOA (Meter)</th>
                                        <th className="border border-gray-300 p-2 text-center font-medium">Permissible Draft for berthing (Meter)</th>
                                        <th className="border border-gray-300 p-2 text-center font-medium">Hose size (Inch)</th>
                                        <th className="border border-gray-300 p-2 text-center font-medium">Discharge arm size (Inch)</th>
                                        <th className="border border-gray-300 p-2 text-center font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-2 text-center" rowSpan={3}>1</td>
                                        <td className="border border-gray-300 p-2" rowSpan={3}>TSP</td>
                                        <td className="border border-gray-300 p-2">143.40 M</td>
                                        <td className="border border-gray-300 p-2">8.25 M</td>
                                        <td className="border border-gray-300 p-2" rowSpan={3}>2<sub>x</sub>8"</td>
                                        <td className="border border-gray-300 p-2" rowSpan={3}></td>
                                        <td className="border border-gray-300 p-2" rowSpan={3}>Discharge can be done on a special permission basis</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2">175.25 M</td>
                                        <td className="border border-gray-300 p-2">7.90 M</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2">
                                            180.00 M
                                            <br />
                                            <span className="text-xs">(Under special permission from the port authority)</span>
                                        </td>
                                        <td className="border border-gray-300 p-2">7.90 M</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 text-center">2</td>
                                        <td className="border border-gray-300 p-2" >DOJ – 3</td>
                                        <td className="border border-gray-300 p-2">183.00 M</td>
                                        <td className="border border-gray-300 p-2">9.50 M</td>
                                        <td className="border border-gray-300 p-2" >2<sub>x</sub>8"</td>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2"></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 text-center" rowSpan={2}>3</td>
                                        <td className="border border-gray-300 p-2 text-center" rowSpan={2}>DOJ – 4</td>
                                        <td className="border border-gray-300 p-2">160.00 M</td>
                                        <td className="border border-gray-300 p-2">9.50 M</td>
                                        <td className="border border-gray-300 p-2" rowSpan={2}>2<sub>x</sub>8"</td>
                                        <td className="border border-gray-300 p-2" rowSpan={2}></td>
                                        <td className="border border-gray-300 p-2" rowSpan={2}></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2">
                                            184.00 M
                                            <br />
                                            <span className="text-xs">(Under special permission from the port authority by paying allowance)</span>
                                        </td>
                                        <td className="border border-gray-300 p-2">9.50 M</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 text-center">4</td>
                                        <td className="border border-gray-300 p-2">DOJ – 5</td>
                                        <td className="border border-gray-300 p-2">186.00 M</td>
                                        <td className="border border-gray-300 p-2">9.50 M</td>
                                        <td className="border border-gray-300 p-2">2<sub>x</sub>8"</td>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2">10 inch (Used for Gas oil & Jet A1/Mogas)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 text-center">5</td>
                                        <td className="border border-gray-300 p-2">DOJ – 6</td>
                                        <td className="border border-gray-300 p-2">186.00 M</td>
                                        <td className="border border-gray-300 p-2">9.50 M</td>
                                        <td className="border border-gray-300 p-2">2<sub>x</sub>8"</td>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2">10 inch (Used for Gas oil & Jet A1/Mogas)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 text-center">6</td>
                                        <td className="border border-gray-300 p-2">DOJ – 7</td>
                                        <td className="border border-gray-300 p-2">186.00 M</td>
                                        <td className="border border-gray-300 p-2">9.50 M</td>
                                        <td className="border border-gray-300 p-2">2<sub>x</sub>8"</td>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2">10 inch (Used for Gas oil & Jet A1/Mogas)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 text-center">7</td>
                                        <td className="border border-gray-300 p-2">DCJ – 8</td>
                                        <td className="border border-gray-300 p-2">175.00 M</td>
                                        <td className="border border-gray-300 p-2">8.50 M</td>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2"></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 text-center">8</td>
                                        <td className="border border-gray-300 p-2">United Jetty</td>
                                        <td className="border border-gray-300 p-2">183.00 M</td>
                                        <td className="border border-gray-300 p-2">9.50 M</td>
                                        <td className="border border-gray-300 p-2">4<sub>x</sub>8"</td>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2"></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 text-center" rowSpan={2}>9</td>
                                        <td className="border border-gray-300 p-2" rowSpan={2}>
                                            KAFCO
                                            <br />
                                            (U)
                                        </td>
                                        <td className="border border-gray-300 p-2">186.00 M</td>
                                        <td className="border border-gray-300 p-2">9.50 M</td>
                                        <td className="border border-gray-300 p-2" rowSpan={2}></td>
                                        <td className="border border-gray-300 p-2" rowSpan={2}></td>
                                        <td className="border border-gray-300 p-2" rowSpan={2}>Only ship-to-ship and lightering operation for tanker</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2">
                                            190.00 M
                                            <br />
                                            <span className="text-xs">(Upon compliance with the condition of the port authority)</span>
                                        </td>
                                        <td className="border border-gray-300 p-2">9.00 M</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 text-center">10</td>
                                        <td className="border border-gray-300 p-2">CUFL</td>
                                        <td className="border border-gray-300 p-2">186.00 M</td>
                                        <td className="border border-gray-300 p-2">8.50 M</td>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2">Only ship-to-ship and lightering operation for tanker</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h3 className='text-xl font-semibold'>B. Ship-to-Ship (STS) Transfer Operation
                        </h3>
                        <p className='mt-4'>
                            STS operations are conducted at sea and within port limits, including Mongla, Payra, and designated anchorage points. Transfers can occur with both vessels underway or with one moored alongside another at anchor. Some operations are also carried out in port under port or harbor authority jurisdiction, with one ship secured to a shore installation and others mooring alongside.
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h3 className='text-xl font-semibold'>C. The Single Point Mooring (SPM) with Double Pipeline project in Bangladesh</h3>
                        <p className='mt-4'>
                            This top-priority infrastructure project prioritizes reducing costs and time for offloading imported crude oil. Bangladesh imports around 7 million tons of oil annually, including 1.5 million tons of crude and the remainder as refined products. This project aims to ensure efficient, cost-effective, and timely offloading crude oil and refined products, reduce system losses in lighterage operations, meet rising energy demands, and enhance supply security. Storage tanks at Maheshkhali will also boost retention capacity, strengthening Bangladesh's energy infrastructure.
                        </p>
                        <p className='mt-2'>
                            With the installation of the SPM, BPC can now offload 120,000 tons of crude oil in 48 hours and 70,000 tons of diesel in 28 hours, boosting annual offloading capacity to around 9 million tons. The SPM supports discharge operations for Eastern Refinery Ltd. and BPC, with MT JAG APARNA being the first vessel to discharge 60,000 MT of gas oil to BPC via the SPM in 2023.
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h3 className='text-xl font-semibold'>D. Draught Chart at Chittagong Port</h3>
                        <p className='mt-4'>
                            The drought is the measurement from a ship's lowest point to the seabed, crucial for navigation. In Bangladesh, river droughts often shift due to environmental changes, affecting water depth. To manage this, a forecasted draught chart is created every six months, helping vessels navigate safely and efficiently. You can see the reflection of it in this figure of the draught chart for July to December 2024:
                        </p>
                        <div className="mt-4">
                            <table className=" border-collapse border-2 border-gray-400">
                                <thead>
                                    <tr>
                                        {months.map((month) => (
                                            <th key={month} className="border border-gray-400 text-center" colSpan={3}>
                                                {month}
                                            </th>
                                        ))}
                                    </tr>
                                    <tr>
                                        {months.map((month, index) => (
                                            <th key={`${month}-meter-${index}`} className="border border-gray-400 text-center" colSpan={3}>
                                                Meter
                                            </th>
                                        ))}
                                    </tr>
                                    <tr>
                                        {months.map((month, index) => (
                                            <>
                                                <th key={`${month}-date-${index}`} className="border border-gray-400 p-1 text-center">
                                                    Date
                                                </th>
                                                <th key={`${month}-inward-${index}`} className="border border-gray-400 p-1 text-center">
                                                    Inward
                                                </th>
                                                <th key={`${month}-outward-${index}`} className="border border-gray-400 p-1 text-center">
                                                    Outward
                                                </th>
                                            </>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {days.map((day, index) => (
                                        <tr key={index}>
                                            {months.map((month) => (
                                                <React.Fragment key={`${month}-${day.date}`}>
                                                    <td className="border border-gray-400 p-1 text-center">{day.date}</td>
                                                    <td className="border border-gray-400 p-1 text-center">{day.inward}</td>
                                                    <td className="border border-gray-400 p-1 text-center">{day.outward}</td>
                                                </React.Fragment>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DischargeFacility;