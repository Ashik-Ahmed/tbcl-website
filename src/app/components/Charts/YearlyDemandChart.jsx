"use client";

import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { year: '2019', Gasoil: 1980000, Jet: 320000, HSFO: 400000, Mogas: 280000, 'M. Fuel': 0 },
    { year: '2020', Gasoil: 1980000, Jet: 320000, HSFO: 400000, Mogas: 280000, 'M. Fuel': 0 },
    { year: '2021', Gasoil: 1940000, Jet: 280000, HSFO: 360000, Mogas: 200000, 'M. Fuel': 0 },
    { year: '2022', Gasoil: 2500000, Jet: 425000, HSFO: 280000, Mogas: 360000, 'M. Fuel': 120000 },
    { year: '2023', Gasoil: 2440000, Jet: 600000, HSFO: 500000, Mogas: 360000, 'M. Fuel': 120000 },
    { year: '2024', Gasoil: 2420000, Jet: 360000, HSFO: 250000, Mogas: 750000, 'M. Fuel': 120000 },
];

const YearlyDemandBarChart = () => {
    return (
        <div style={{ width: '100%', height: 500 }}>
            <h2 className="text-center font-bold text-lg my-4">Demand Trend of Finished Petroleum Products <span className='text-xs italic'>[Qty. in Metric Ton]</span> </h2>
            <ResponsiveContainer width="100%" height="95%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis tickFormatter={(value) => value.toLocaleString()} />
                    <Tooltip formatter={(value) => value.toLocaleString()} />
                    <Legend />
                    <Bar dataKey="Gasoil" fill="#4BC0C0" />
                    <Bar dataKey="Jet" fill="#36A2EB" />
                    <Bar dataKey="HSFO" fill="#FFCE56" />
                    <Bar dataKey="Mogas" fill="#9966FF" />
                    <Bar dataKey="M. Fuel" fill="#FF6384" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default YearlyDemandBarChart;
