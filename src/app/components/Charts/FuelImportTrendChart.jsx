"use client";

import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const FuelImportTrendChart = () => {

    const data = [
        { year: '2008', Gasoil: 240000, 'Jet A-1': 100000, SKO: 0, Mogas: 0, HSFO: 0, 'Marine Fuel': 0 },
        { year: '2009', Gasoil: 300000, 'Jet A-1': 200000, SKO: 150000, Mogas: 75000, HSFO: 0, 'Marine Fuel': 0 },
        { year: '2010', Gasoil: 1000000, 'Jet A-1': 160000, SKO: 140000, Mogas: 100000, HSFO: 0, 'Marine Fuel': 0 },
        { year: '2011', Gasoil: 897087, 'Jet A-1': 169495, SKO: 53851, Mogas: 20080, HSFO: 0, 'Marine Fuel': 0 },
        { year: '2012', Gasoil: 373725, 'Jet A-1': 116466, SKO: 20080, Mogas: 0, HSFO: 279589, 'Marine Fuel': 0 },
        { year: '2013', Gasoil: 345250, 'Jet A-1': 59188, SKO: 28416, Mogas: 0, HSFO: 0, 'Marine Fuel': 0 },
        { year: '2014', Gasoil: 608691, 'Jet A-1': 95673, SKO: 0, Mogas: 0, HSFO: 0, 'Marine Fuel': 0 },
        { year: '2015', Gasoil: 509352, 'Jet A-1': 110791, SKO: 0, Mogas: 0, HSFO: 131065, 'Marine Fuel': 0 },
        { year: '2016', Gasoil: 274818, 'Jet A-1': 54926, SKO: 0, Mogas: 0, HSFO: 86008, 'Marine Fuel': 0 },
        { year: '2017', Gasoil: 246050, 'Jet A-1': 9980, SKO: 0, Mogas: 0, HSFO: 105136, 'Marine Fuel': 0 },
        { year: '2018', Gasoil: 294479, 'Jet A-1': 10994, SKO: 0, Mogas: 0, HSFO: 72415, 'Marine Fuel': 0 },
        { year: '2019', Gasoil: 181664, 'Jet A-1': 10132, SKO: 0, Mogas: 0, HSFO: 19542, 'Marine Fuel': 0 },
        { year: '2020', Gasoil: 242859, 'Jet A-1': 10784, SKO: 0, Mogas: 0, HSFO: 0, 'Marine Fuel': 14906 },
        { year: '2021', Gasoil: 548581, 'Jet A-1': 16415, SKO: 0, Mogas: 0, HSFO: 0, 'Marine Fuel': 0 },
        { year: '2022', Gasoil: 297029, 'Jet A-1': 0, SKO: 0, Mogas: 1898, HSFO: 0, 'Marine Fuel': 0 },
        { year: '2023', Gasoil: 212215, 'Jet A-1': 40129, SKO: 0, Mogas: 0, HSFO: 24697, 'Marine Fuel': 0 },
        { year: '2024', Gasoil: 132959, 'Jet A-1': 50234, SKO: 0, Mogas: 0, HSFO: 0, 'Marine Fuel': 0 },
    ];


    return (
        <div style={{ width: '100%', height: 500 }}>
            <h2 className="text-center font-bold text-lg my-4">Product Wise Supply Trend | 2008 - 2024 <span className='text-xs italic'>[Qty. in Metric Ton]</span></h2>
            <ResponsiveContainer width="100%" height="95%">
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis tickFormatter={(value) => value.toLocaleString()} />
                    <Tooltip formatter={(value) => value.toLocaleString()} />
                    <Legend />
                    <Line type="monotone" dataKey="Gasoil" stroke="#4BC0C0" />
                    <Line type="monotone" dataKey="Jet A-1" stroke="#36A2EB" />
                    <Line type="monotone" dataKey="SKO" stroke="#FFCE56" />
                    <Line type="monotone" dataKey="Mogas" stroke="#9966FF" />
                    <Line type="monotone" dataKey="HSFO" stroke="#FF6384" />
                    <Line type="monotone" dataKey="Marine Fuel" stroke="#8A2BE2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FuelImportTrendChart;
