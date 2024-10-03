"use client";

import React from 'react';

const wishlistItems = [
    // Example wishlist items (You should replace this with dynamic data from your backend)
    { id: 1, name: 'Leather Jacket', brand: 'Zara', price: 150, image: '/assets/jacket.jpg' },
    { id: 2, name: 'Running Shoes', brand: 'Nike', price: 120, image: '/assets/shoes.jpg' },
    { id: 3, name: 'Silver Necklace', brand: 'Pandora', price: 250, image: '/assets/necklace.jpg' },
    // Add more wishlist items
];

const Wishlist = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">My Wishlist</h2>

            {/* Wishlist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.length > 0 ? (
                    wishlistItems.map((item) => (
                        <div key={item.id} className="card bg-base-100 shadow-md">
                            <figure>
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title">{item.name}</h3>
                                <p>Brand: {item.brand}</p>
                                <p className="text-lg font-bold">${item.price}</p>
                                <div className="card-actions justify-between">
                                    <button className="btn btn-primary">Move to Cart</button>
                                    <button className="btn btn-error">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items in your wishlist yet.</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
