"use client";

import React from 'react';

const OrderTracking = () => {
    // Sample data for orders (this can be fetched from an API)
    const orders = [
        {
            id: 1,
            status: 'Pending',
            date: '2024-10-01',
            total: '$50.00',
        },
        {
            id: 2,
            status: 'Shipped',
            date: '2024-09-28',
            total: '$75.00',
        },
        {
            id: 3,
            status: 'Delivered',
            date: '2024-09-15',
            total: '$100.00',
        },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Order Tracking</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No orders found.
                                </td>
                            </tr>
                        ) : (
                            orders.map((order) => (
                                <tr key={order.id}>
                                    <td>{`#${order.id}`}</td>
                                    <td>{order.date}</td>
                                    <td>{order.total}</td>
                                    <td>
                                        <span
                                            className={`badge ${order.status === 'Delivered'
                                                    ? 'badge-success'
                                                    : order.status === 'Shipped'
                                                        ? 'badge-warning'
                                                        : 'badge-error'
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary btn-sm">View Details</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTracking;
