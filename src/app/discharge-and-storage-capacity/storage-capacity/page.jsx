import React from 'react';

const StorageCapacity = () => {

    const depotWiseData = [
        { depot: "ERL, CTG", hsd: "84500", sko: "5600", hobc: "22500", fohs: "52000", jetA1: "1400" },
        { depot: "Main Installation, Ctg", hsd: "273936", sko: "14554", hobc: "12843", fohs: "52633", jetA1: "40610" },
        { depot: "Mongla Oil Installation", hsd: "92136", sko: "0", hobc: "0", fohs: "1717", jetA1: "0" },
        { depot: "Godenail", hsd: "26770", sko: "1311", hobc: "2392", fohs: "5137", jetA1: "11866" },
        { depot: "Fatullah", hsd: "14202", sko: "2257", hobc: "1679", fohs: "5999", jetA1: "0" },
        { depot: "Emergency POL Depot, Dhaka", hsd: "2288", sko: "0", hobc: "943", fohs: "0", jetA1: "0" },
        { depot: "Daulatpur", hsd: "39699", sko: "4391", hobc: "1406", fohs: "17779", jetA1: "424" },
        { depot: "Baghabari", hsd: "60277", sko: "2357", hobc: "1250", fohs: "0", jetA1: "0" },
        { depot: "Parbatipur", hsd: "14329", sko: "333", hobc: "380", fohs: "0", jetA1: "0" },
        { depot: "Sylhet", hsd: "4817", sko: "551", hobc: "83", fohs: "0", jetA1: "0" },
        { depot: "Srimangol", hsd: "2257", sko: "1057", hobc: "436", fohs: "0", jetA1: "0" },
        { depot: "Sachnabajar (Barge Depot)", hsd: "527", sko: "28", hobc: "0", fohs: "0", jetA1: "0" },
        { depot: "Mogla Bazar, Sylhet", hsd: "1380", sko: "0", hobc: "235", fohs: "0", jetA1: "0" },
        { depot: "Barisal", hsd: "11679", sko: "1739", hobc: "549", fohs: "0", jetA1: "0" },
        { depot: "Jhalkathi", hsd: "4292", sko: "929", hobc: "136", fohs: "0", jetA1: "0" },
        { depot: "Chandpur", hsd: "8080", sko: "2383", hobc: "834", fohs: "0", jetA1: "0" },
        { depot: "Bhairab", hsd: "3782", sko: "926", hobc: "0", fohs: "0", jetA1: "0" },
        { depot: "Ashuganj", hsd: "1992", sko: "803", hobc: "0", fohs: "0", jetA1: "0" },
        { depot: "B Baria", hsd: "2885", sko: "0", hobc: "0", fohs: "0", jetA1: "0" },
        { depot: "Rajshahi*", hsd: "0", sko: "0", hobc: "0", fohs: "0", jetA1: "0" },
        { depot: "Harian*", hsd: "0", sko: "0", hobc: "0", fohs: "0", jetA1: "0" },
        { depot: "Rangpur", hsd: "2871", sko: "466", hobc: "153", fohs: "0", jetA1: "0" },
        { depot: "Natore", hsd: "1031", sko: "55", hobc: "0", fohs: "0", jetA1: "0" },
        { depot: "Chilmari (Barge Depot)", hsd: "725", sko: "0", hobc: "0", fohs: "0", jetA1: "0" },
        { depot: "Chittagong Int. Airport", hsd: "0", sko: "0", hobc: "0", fohs: "0", jetA1: "996" },
        { depot: "Cox's Bazar Airport", hsd: "0", sko: "0", hobc: "0", fohs: "0", jetA1: "0" },
        { depot: "Osmani Int. Airport & Sylhet Depot", hsd: "0", sko: "0", hobc: "0", fohs: "0", jetA1: "2063" },
        { depot: "Kurmitola Aviation Depot, Dhaka", hsd: "0", sko: "0", hobc: "0", fohs: "0", jetA1: "8479" },
    ]

    const totals = {
        hsd: "604495",
        sko: "41733",
        hobc: "45819",
        fohs: "150665",
        jetA1: "65838"
    }

    const StorageCapacityData = [
        {
            terminal: "MS. Elias Brothers Tank Terminal",
            fuelOil: "60,000",
            edibleOil: "",
            bitumen: "10,000"
        },
        {
            terminal: "South Eastern Tank Terminal",
            fuelOil: "1,00,000",
            edibleOil: "20,000",
            bitumen: ""
        },
        {
            terminal: "S. Alam Tank Terminal",
            fuelOil: "18,000",
            edibleOil: "",
            bitumen: ""
        },
        {
            terminal: "United Tank Terminal",
            fuelOil: "1,00,000",
            edibleOil: "",
            bitumen: ""
        },
        {
            terminal: "Omera Tank Terminal",
            fuelOil: "75,000",
            edibleOil: "45,000",
            bitumen: ""
        }
    ]


    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700">
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Storage Capacity
                    </h1>
                    <div className="w-24 h-1 bg-white rounded-full mb-8"></div>
                    <div className='max-w-5xl'>
                        <p className='text-white'>The Bangladesh Petroleum Corporation manages a yearly demand-supply chain through various regional depots, making it essential to forecast regional demand accurately and ensure sufficient stock levels are maintained across the network.</p>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto py-16 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        BPC’s Depot Wise Storage Capacity
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className='bg-gray-100'>
                            <tr>
                                <th className="border border-gray-400 p-2 font-medium text-left">Name of Depots</th>
                                <th className="border border-gray-400 p-2 font-medium text-center">HSD</th>
                                <th className="border border-gray-400 p-2 font-medium text-center">SKO</th>
                                <th className="border border-gray-400 p-2 font-medium text-center">HOBC</th>
                                <th className="border border-gray-400 p-2 font-medium text-center">FOHS</th>
                                <th className="border border-gray-400 p-2 font-medium text-center">Jet A-1</th>
                            </tr>
                        </thead>
                        <tbody>
                            {depotWiseData.map((row, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-400 p-2">{row.depot}</td>
                                    <td className="border border-gray-400 p-2 text-center">{row.hsd}</td>
                                    <td className="border border-gray-400 p-2 text-center">{row.sko}</td>
                                    <td className="border border-gray-400 p-2 text-center">{row.hobc}</td>
                                    <td className="border border-gray-400 p-2 text-center">{row.fohs}</td>
                                    <td className="border border-gray-400 p-2 text-center">{row.jetA1}</td>
                                </tr>
                            ))}
                            <tr className="font-bold bg-gray-100">
                                <td className="border border-gray-400 p-2">Total</td>
                                <td className="border border-gray-400 p-2 text-center">{totals.hsd}</td>
                                <td className="border border-gray-400 p-2 text-center">{totals.sko}</td>
                                <td className="border border-gray-400 p-2 text-center">{totals.hobc}</td>
                                <td className="border border-gray-400 p-2 text-center">{totals.fohs}</td>
                                <td className="border border-gray-400 p-2 text-center">{totals.jetA1}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">[Capacity in Metric Tons]</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-4">
                <div className='mb-8'>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Terminal Storage Capacity
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 p-2 font-medium text-center">Terminal Name</th>
                                <th className="border border-gray-400 p-2 font-medium text-center">Fuel Oil</th>
                                <th className="border border-gray-400 p-2 font-medium text-center">Edible Oil</th>
                                <th className="border border-gray-400 p-2 font-medium text-center">Bitumen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {StorageCapacityData.map((row, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-400 p-2">{row.terminal}</td>
                                    <td className="border border-gray-400 p-2 text-center">{row.fuelOil}</td>
                                    <td className="border border-gray-400 p-2 text-center">{row.edibleOil}</td>
                                    <td className="border border-gray-400 p-2 text-center">{row.bitumen}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-sm text-gray-600 mt-2 text-center italic">[Capacity in Metric Tons]</p>
                </div>
            </div>
            <div className='my-4'>
                <p className='text-sm text-red-600 mt-2 text-center italic underline'>NB: All the above data are publicly available</p>
            </div>
        </div>
    );
};

export default StorageCapacity;