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

const FuelImportIPPChart = () => {

    const monthlyData = [
        { month: 'January', '2020': 15240.00, '2021': 108069.25, '2022': 159234.36, '2023': 94648.59, '2024': 0 },
        { month: 'February', '2020': 65052.17, '2021': 106514.97, '2022': 256801.68, '2023': 61063.73, '2024': 30059.72 },
        { month: 'March', '2020': 64425.78, '2021': 124914.53, '2022': 129356.21, '2023': 128610.16, '2024': 30589.19 },
        { month: 'April', '2020': 19030.00, '2021': 177475.62, '2022': 276109.67, '2023': 75430.69, '2024': 0 },
        { month: 'May', '2020': 21999.65, '2021': 169490.20, '2022': 190756.05, '2023': 98314.94, '2024': 75883.87 },
        { month: 'June', '2020': 61317.23, '2021': 178309.58, '2022': 114985.68, '2023': 30153.89, '2024': 94479.79 },
        { month: 'July', '2020': 30091.35, '2021': 212299.30, '2022': 175348.35, '2023': 102300.60, '2024': 79211.95 },
        { month: 'August', '2020': 61543.85, '2021': 132304.63, '2022': 132992.49, '2023': 94496.67, '2024': 139584.88 },
        { month: 'September', '2020': 64424.91, '2021': 137690.51, '2022': 174992.02, '2023': 60204.62, '2024': 60760.43 },
        { month: 'October', '2020': 102482.10, '2021': 286987.10, '2022': 224694.37, '2023': 43492.82, '2024': 128000.00 },
        { month: 'November', '2020': 61848.77, '2021': 91099.62, '2022': 79295.30, '2023': 22100.08, '2024': 0 },
        { month: 'December', '2020': 85939.61, '2021': 53064.21, '2022': 60267.39, '2023': 0, '2024': 0 },
    ];


    return (
        <div style={{ width: '100%', height: 500 }}>
            <h2 className="text-center font-bold text-lg my-4">Monthly Demand Trend of Petroleum Products</h2>
            <ResponsiveContainer width="100%" height="95%">
                <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => value.toLocaleString()} />
                    <Tooltip formatter={(value) => value.toLocaleString()} />
                    <Legend />
                    <Line type="monotone" dataKey="2020" stroke="#4BC0C0" />
                    <Line type="monotone" dataKey="2021" stroke="#36A2EB" />
                    <Line type="monotone" dataKey="2022" stroke="#FFCE56" />
                    <Line type="monotone" dataKey="2023" stroke="#9966FF" />
                    <Line type="monotone" dataKey="2024" stroke="#FF6384" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FuelImportIPPChart;
