"use client";

import React, { useEffect, useState } from 'react';

// Sample data for sales metrics (replace this with actual data fetching logic)
const sampleSalesData = [
    { id: 1, productName: 'Blue T-Shirt', sales: 120, feedback: 4.5 },
    { id: 2, productName: 'Red Sneakers', sales: 90, feedback: 4.0 },
    { id: 3, productName: 'Green Jacket', sales: 60, feedback: 3.8 },
    { id: 4, productName: 'Leather Belt', sales: 30, feedback: 4.2 },
];

const SalesAnalytics = () => {
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        // Here, you could fetch actual sales data from an API
        setSalesData(sampleSalesData);
    }, []);

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Sales Analytics</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Product Name</th>
                            <th className="text-left">Sales</th>
                            <th className="text-left">Customer Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData.map((product) => (
                            <tr key={product.id}>
                                <td>{product.productName}</td>
                                <td>{product.sales}</td>
                                <td>
                                    <div className="flex items-center">
                                        <span className="mr-2">{product.feedback}</span>
                                        <div className="w-1/2 h-2 bg-gray-300 rounded-full">
                                            <div
                                                className="h-full bg-green-500 rounded-full"
                                                style={{ width: `${(product.feedback / 5) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold">Overall Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <div className="p-4 bg-blue-100 rounded-lg shadow">
                        <h4 className="text-lg font-bold">Total Sales</h4>
                        <p className="text-2xl font-semibold">$1,200</p>
                    </div>
                    <div className="p-4 bg-green-100 rounded-lg shadow">
                        <h4 className="text-lg font-bold">Total Orders</h4>
                        <p className="text-2xl font-semibold">150</p>
                    </div>
                    <div className="p-4 bg-yellow-100 rounded-lg shadow">
                        <h4 className="text-lg font-bold">Average Feedback</h4>
                        <p className="text-2xl font-semibold">4.2</p>
                    </div>
                    <div className="p-4 bg-red-100 rounded-lg shadow">
                        <h4 className="text-lg font-bold">Pending Issues</h4>
                        <p className="text-2xl font-semibold">5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesAnalytics;
