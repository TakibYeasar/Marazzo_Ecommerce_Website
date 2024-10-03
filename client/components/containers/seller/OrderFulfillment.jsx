"use client";

import React, { useEffect, useState } from 'react';

// Sample data for orders (replace this with actual data fetching logic)
const sampleOrders = [
    {
        id: 1,
        productName: 'Blue T-Shirt',
        customerName: 'John Doe',
        status: 'Pending',
        orderDate: '2024-10-01',
    },
    {
        id: 2,
        productName: 'Red Sneakers',
        customerName: 'Jane Smith',
        status: 'Shipped',
        orderDate: '2024-09-30',
    },
    {
        id: 3,
        productName: 'Green Jacket',
        customerName: 'Alice Johnson',
        status: 'Delivered',
        orderDate: '2024-09-28',
    },
];

const OrderFulfillment = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Here, you could fetch actual orders from an API
        setOrders(sampleOrders);
    }, []);

    const updateOrderStatus = (id, newStatus) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, status: newStatus } : order
            )
        );
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Order Fulfillment</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Product Name</th>
                            <th className="text-left">Customer Name</th>
                            <th className="text-left">Order Date</th>
                            <th className="text-left">Status</th>
                            <th className="text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.productName}</td>
                                <td>{order.customerName}</td>
                                <td>{order.orderDate}</td>
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
                                <td>
                                    {order.status === 'Pending' && (
                                        <button
                                            className="btn btn-success btn-sm mr-2"
                                            onClick={() => updateOrderStatus(order.id, 'Shipped')}
                                        >
                                            Mark as Shipped
                                        </button>
                                    )}
                                    {order.status === 'Shipped' && (
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => updateOrderStatus(order.id, 'Delivered')}
                                        >
                                            Mark as Delivered
                                        </button>
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

export default OrderFulfillment;
