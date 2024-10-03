"use client";

import React, { useState } from 'react';

const SellerDashboardContent = () => {
    // Sample state for products and orders (can be fetched from API)
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Stylish Sneakers',
            price: 59.99,
            status: 'Available',
        },
        {
            id: 2,
            name: 'Casual T-Shirt',
            price: 19.99,
            status: 'Out of Stock',
        },
    ]);

    const [orders, setOrders] = useState([
        {
            id: 1,
            product: 'Stylish Sneakers',
            quantity: 2,
            status: 'Shipped',
            date: '2024-10-01',
        },
        {
            id: 2,
            product: 'Casual T-Shirt',
            quantity: 1,
            status: 'Pending',
            date: '2024-10-02',
        },
    ]);

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Seller Dashboard</h2>

            {/* Product Management Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Manage Product Listings</h3>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>${product.price.toFixed(2)}</td>
                                <td>
                                    <span className={`badge ${product.status === 'Available' ? 'badge-success' : 'badge-error'}`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                    <button className="btn btn-secondary btn-sm ml-2">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-accent mt-4">Add New Product</button>
            </div>

            {/* Order Tracking Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Track Orders</h3>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.product}</td>
                                <td>{order.quantity}</td>
                                <td>
                                    <span className={`badge ${order.status === 'Shipped' ? 'badge-success' : 'badge-warning'}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td>{order.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Sales Performance Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-4">Sales Performance</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="text-xl font-bold">Total Sales: $239.98</h4>
                    <p className="text-gray-700">Total Orders: 3</p>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboardContent;
