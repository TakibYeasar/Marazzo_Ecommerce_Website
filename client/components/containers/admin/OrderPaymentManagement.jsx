"use client";

import React, { useState } from 'react';

const OrderPaymentManagement = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            customerName: 'John Doe',
            items: ['Blue T-Shirt', 'Running Shoes'],
            total: '$100',
            status: 'Pending',
            paymentMethod: 'Credit Card',
        },
        {
            id: 2,
            customerName: 'Jane Smith',
            items: ['Gold Necklace'],
            total: '$200',
            status: 'Shipped',
            paymentMethod: 'PayPal',
        },
        {
            id: 3,
            customerName: 'Michael Johnson',
            items: ['Leather Shoes'],
            total: '$80',
            status: 'Delivered',
            paymentMethod: 'Credit Card',
        },
    ]);

    const processOrder = (id) => {
        setOrders(
            orders.map((order) =>
                order.id === id && order.status === 'Pending' ? { ...order, status: 'Processed' } : order
            )
        );
    };

    const trackOrder = (id) => {
        alert(`Tracking order #${id}`);
    };

    const handleRefund = (id) => {
        alert(`Refund initiated for order #${id}`);
    };

    const handleComplaint = (id) => {
        alert(`Complaint addressed for order #${id}`);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Order & Payment Management</h2>

            {/* Order List Section */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customerName}</td>
                                <td>{order.items.join(', ')}</td>
                                <td>{order.total}</td>
                                <td>
                                    <span
                                        className={`badge ${order.status === 'Pending'
                                                ? 'badge-warning'
                                                : order.status === 'Shipped'
                                                    ? 'badge-info'
                                                    : 'badge-success'
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td>{order.paymentMethod}</td>
                                <td className="space-x-2">
                                    {order.status === 'Pending' && (
                                        <button className="btn btn-primary btn-sm" onClick={() => processOrder(order.id)}>
                                            Process Order
                                        </button>
                                    )}
                                    <button className="btn btn-secondary btn-sm" onClick={() => trackOrder(order.id)}>
                                        Track Order
                                    </button>
                                    {order.status === 'Delivered' && (
                                        <>
                                            <button className="btn btn-error btn-sm" onClick={() => handleRefund(order.id)}>
                                                Refund
                                            </button>
                                            <button className="btn btn-warning btn-sm" onClick={() => handleComplaint(order.id)}>
                                                Handle Complaint
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderPaymentManagement;
