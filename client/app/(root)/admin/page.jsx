"use client";

import React, { useState } from 'react';
import { AnalyticsDashboard, ContentManagement, OrderPaymentManagement, ProductManagement, UserManagement } from '../../../components';

const AdminDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('User Management');

    const renderContent = () => {
        switch (activeComponent) {
            case 'User Management':
                return <UserManagement />;
            case 'Product Management':
                return <ProductManagement />;
            case 'Order & Payment Management':
                return <OrderPaymentManagement />;
            case 'Content Management':
                return <ContentManagement />;
            case 'Analytics Dashboard':
                return <AnalyticsDashboard />;
            default:
                return <UserManagement />;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-900 text-white flex flex-col p-4 space-y-4">
                <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
                <ul className="menu p-2">
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'User Management' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('User Management')}
                        >
                            User Management
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Product Management' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Product Management')}
                        >
                            Product Management
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Order & Payment Management' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Order & Payment Management')}
                        >
                            Order & Payment Management
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Content Management' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Content Management')}
                        >
                            Content Management
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Analytics Dashboard' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Analytics Dashboard')}
                        >
                            Analytics Dashboard
                        </button>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-6 bg-gray-100">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminDashboard;
