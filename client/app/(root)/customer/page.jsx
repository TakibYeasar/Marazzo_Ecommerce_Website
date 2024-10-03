"use client";

import React, { useState } from 'react';
import { AccountSettings, OrderTracking, PersonalizedRecommendations, ProductDiscovery, SecureCheckout, ShoppingCart, Wishlist } from '../../../components';

const CustomerDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('Product Discovery');

    const renderContent = () => {
        switch (activeComponent) {
            case 'Product Discovery':
                return <ProductDiscovery />;
            case 'Wishlist':
                return <Wishlist />;
            case 'Personalized Recommendations':
                return <PersonalizedRecommendations />;
            case 'Shopping Cart':
                return <ShoppingCart />;
            case 'Secure Checkout':
                return <SecureCheckout />;
            case 'Order Tracking':
                return <OrderTracking />;
            case 'Account Settings':
                return <AccountSettings />;
            default:
                return <ProductDiscovery />;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-900 text-white flex flex-col p-4 space-y-4">
                <h1 className="text-3xl font-bold text-center">Customer Dashboard</h1>
                <ul className="menu p-2">
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Product Discovery' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Product Discovery')}
                        >
                            Product Discovery
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Wishlist' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Wishlist')}
                        >
                            Wishlist
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Personalized Recommendations' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Personalized Recommendations')}
                        >
                            Personalized Recommendations
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Shopping Cart' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Shopping Cart')}
                        >
                            Shopping Cart
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Secure Checkout' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Secure Checkout')}
                        >
                            Secure Checkout
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Order Tracking' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Order Tracking')}
                        >
                            Order Tracking
                        </button>
                    </li>
                    <li>
                        <button
                            className={`btn w-full ${activeComponent === 'Account Settings' ? 'btn-primary' : ''}`}
                            onClick={() => setActiveComponent('Account Settings')}
                        >
                            Account Settings
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

export default CustomerDashboard;
