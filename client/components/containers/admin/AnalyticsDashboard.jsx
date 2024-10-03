"use client";

import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', sales: 4000, traffic: 2400, conversion: 4.0, popularity: 3200 },
    { name: 'Feb', sales: 3000, traffic: 2210, conversion: 3.8, popularity: 2900 },
    { name: 'Mar', sales: 2000, traffic: 2290, conversion: 3.2, popularity: 2800 },
    { name: 'Apr', sales: 2780, traffic: 2000, conversion: 3.5, popularity: 2500 },
    { name: 'May', sales: 1890, traffic: 2181, conversion: 3.0, popularity: 3000 },
    { name: 'Jun', sales: 2390, traffic: 2500, conversion: 4.2, popularity: 3700 },
    { name: 'Jul', sales: 3490, traffic: 2100, conversion: 4.5, popularity: 4100 },
];

const AnalyticsDashboard = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Analytics Dashboard</h2>

            {/* Overview Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {/* Total Sales */}
                <div className="card bg-primary text-primary-content shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title">Total Sales</h3>
                        <p className="text-2xl font-semibold">$25,450</p>
                    </div>
                </div>

                {/* Total Traffic */}
                <div className="card bg-secondary text-secondary-content shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title">Total Traffic</h3>
                        <p className="text-2xl font-semibold">45,000 Visitors</p>
                    </div>
                </div>

                {/* Conversion Rate */}
                <div className="card bg-accent text-accent-content shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title">Conversion Rate</h3>
                        <p className="text-2xl font-semibold">4.2%</p>
                    </div>
                </div>

                {/* Popular Products */}
                <div className="card bg-info text-info-content shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title">Popular Products</h3>
                        <p className="text-2xl font-semibold">3200 Items</p>
                    </div>
                </div>
            </div>

            {/* Sales and Traffic Graphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Sales Line Chart */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Monthly Sales</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Traffic Bar Chart */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Monthly Traffic</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="traffic" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Conversion Rate and Popular Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Conversion Rate Line Chart */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Conversion Rate</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="conversion" stroke="#ff7300" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Popular Products Bar Chart */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Product Popularity</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="popularity" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
