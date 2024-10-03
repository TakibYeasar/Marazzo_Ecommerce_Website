"use client";

import React, { useState } from 'react';

const initialCartItems = [
    { id: 1, name: 'Casual T-Shirt', brand: 'H&M', price: 25, quantity: 2, image: '/assets/tshirt.jpg' },
    { id: 2, name: 'Running Shoes', brand: 'Adidas', price: 90, quantity: 1, image: '/assets/shoes.jpg' },
    { id: 3, name: 'Gold Earrings', brand: 'Pandora', price: 300, quantity: 1, image: '/assets/earrings.jpg' },
];

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    // Calculate total price
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Update quantity
    const handleQuantityChange = (id, value) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + value) } : item
            )
        );
    };

    // Remove item from cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

            {cartItems.length > 0 ? (
                <div className="flex flex-col space-y-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between space-x-4">
                            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">{item.name}</h3>
                                <p className="text-sm">Brand: {item.brand}</p>
                                <p className="text-lg font-bold">${item.price}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button
                                    className="btn btn-outline btn-primary btn-sm"
                                    onClick={() => handleQuantityChange(item.id, -1)}
                                >
                                    -
                                </button>
                                <span className="font-semibold text-lg">{item.quantity}</span>
                                <button
                                    className="btn btn-outline btn-primary btn-sm"
                                    onClick={() => handleQuantityChange(item.id, 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="btn btn-error btn-sm"
                                onClick={() => removeItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* Total Price */}
                    <div className="flex justify-between items-center mt-4">
                        <h3 className="text-2xl font-bold">Total:</h3>
                        <p className="text-2xl font-bold">${calculateTotal()}</p>
                    </div>

                    {/* Checkout Button */}
                    <div className="text-right">
                        <button className="btn btn-success">Proceed to Checkout</button>
                    </div>
                </div>
            ) : (
                <p className="text-lg">Your cart is empty.</p>
            )}
        </div>
    );
};

export default ShoppingCart;
