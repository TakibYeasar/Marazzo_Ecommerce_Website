"use client";

import React, { useState } from 'react';
import { InventoryManagement, OrderFulfillment, ProductListings, SalesAnalytics, SellerDashboardContent } from '../../../components';

const SellerDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('Seller Dashboard');

    const renderContent = () => {
        switch (activeComponent) {
            case 'Seller Dashboard':
                return <SellerDashboardContent />;
            case 'Product Listings':
                return <ProductListings />;
            case 'Inventory Management':
                return <InventoryManagement />;
            case 'Sales Analytics':
                return <SalesAnalytics />;
            case 'Order Fulfillment':
                return <OrderFulfillment />;
            default:
                return <SellerDashboardContent />;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-900 text-white flex flex-col p-4 space-y-4">
                <h1 className="text-3xl font-bold text-center">Seller Dashboard</h1>
                <ul className="menu p-2">
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Seller Dashboard' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Seller Dashboard')}
                        >
                            Seller Dashboard
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Product Listings' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Product Listings')}
                        >
                            Product Listings
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Inventory Management' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Inventory Management')}
                        >
                            Inventory Management
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Sales Analytics' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Sales Analytics')}
                        >
                            Sales Analytics
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Order Fulfillment' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Order Fulfillment')}
                        >
                            Order Fulfillment
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

export default SellerDashboard;
