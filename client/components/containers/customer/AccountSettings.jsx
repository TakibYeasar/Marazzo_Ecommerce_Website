"use client";

import React, { useState } from 'react';

const AccountSettings = () => {
    // Sample state for user details and addresses (can be fetched from API)
    const [userDetails, setUserDetails] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
    });

    const [addresses, setAddresses] = useState([
        {
            id: 1,
            address: '123 Main St, Springfield, IL',
        },
        {
            id: 2,
            address: '456 Elm St, Springfield, IL',
        },
    ]);

    const [paymentMethods, setPaymentMethods] = useState([
        {
            id: 1,
            cardType: 'Visa',
            lastFour: '1234',
        },
        {
            id: 2,
            cardType: 'MasterCard',
            lastFour: '5678',
        },
    ]);

    // Handler for updating user details
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Account Settings</h2>

            {/* Personal Details Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Personal Details</h3>
                <form>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={userDetails.email}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={userDetails.phone}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary mt-4">Save Changes</button>
                </form>
            </div>

            {/* Shipping Addresses Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Shipping Addresses</h3>
                <ul className="space-y-4">
                    {addresses.map((address) => (
                        <li key={address.id} className="flex justify-between items-center p-4 border rounded-lg">
                            <span>{address.address}</span>
                            <button className="btn btn-secondary btn-sm">Edit</button>
                        </li>
                    ))}
                </ul>
                <button className="btn btn-accent mt-4">Add New Address</button>
            </div>

            {/* Payment Methods Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-4">Payment Methods</h3>
                <ul className="space-y-4">
                    {paymentMethods.map((payment) => (
                        <li key={payment.id} className="flex justify-between items-center p-4 border rounded-lg">
                            <span>{`${payment.cardType} **** **** **** ${payment.lastFour}`}</span>
                            <button className="btn btn-secondary btn-sm">Edit</button>
                        </li>
                    ))}
                </ul>
                <button className="btn btn-accent mt-4">Add New Payment Method</button>
            </div>
        </div>
    );
};

export default AccountSettings;
