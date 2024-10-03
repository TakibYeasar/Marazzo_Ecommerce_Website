"use client";

import React, { useState } from 'react';

const SecureCheckout = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
    });
    const [paypalEmail, setPaypalEmail] = useState('');

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        // Process the payment and order here
        console.log('Processing checkout with:', paymentMethod, paymentMethod === 'creditCard' ? cardDetails : paypalEmail);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Secure Checkout</h2>
            <form onSubmit={handleCheckout}>
                {/* Payment Method Selection */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
                    <div className="flex space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="creditCard"
                                checked={paymentMethod === 'creditCard'}
                                onChange={() => handlePaymentMethodChange('creditCard')}
                                className="radio"
                            />
                            <span className="ml-2">Credit Card</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={() => handlePaymentMethodChange('paypal')}
                                className="radio"
                            />
                            <span className="ml-2">PayPal</span>
                        </label>
                    </div>
                </div>

                {/* Credit Card Information */}
                {paymentMethod === 'creditCard' && (
                    <div className="space-y-4 mb-6">
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={cardDetails.cardNumber}
                            onChange={handleCardChange}
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="text"
                            name="cardHolder"
                            placeholder="Card Holder Name"
                            value={cardDetails.cardHolder}
                            onChange={handleCardChange}
                            className="input input-bordered w-full"
                            required
                        />
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                name="expiryDate"
                                placeholder="Expiry Date (MM/YY)"
                                value={cardDetails.expiryDate}
                                onChange={handleCardChange}
                                className="input input-bordered w-1/2"
                                required
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                value={cardDetails.cvv}
                                onChange={handleCardChange}
                                className="input input-bordered w-1/2"
                                required
                            />
                        </div>
                    </div>
                )}

                {/* PayPal Information */}
                {paymentMethod === 'paypal' && (
                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="PayPal Email"
                            value={paypalEmail}
                            onChange={(e) => setPaypalEmail(e.target.value)}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                )}

                {/* Checkout Button */}
                <button type="submit" className="btn btn-primary w-full mt-4">
                    Complete Purchase
                </button>
            </form>
        </div>
    );
};

export default SecureCheckout;
