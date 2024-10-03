"use client";

import React from 'react';

// Example product recommendations based on user history (This should be fetched dynamically from your backend)
const recommendedProducts = [
    { id: 1, name: 'Casual T-Shirt', brand: 'H&M', price: 25, image: '/assets/tshirt.jpg' },
    { id: 2, name: 'Running Shoes', brand: 'Adidas', price: 90, image: '/assets/shoes.jpg' },
    { id: 3, name: 'Gold Earrings', brand: 'Pandora', price: 300, image: '/assets/earrings.jpg' },
    { id: 4, name: 'Slim Fit Jeans', brand: 'Levi’s', price: 60, image: '/assets/jeans.jpg' },
    // Add more recommended products
];

const PersonalizedRecommendations = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Personalized Recommendations</h2>

            {/* Recommended Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedProducts.length > 0 ? (
                    recommendedProducts.map((product) => (
                        <div key={product.id} className="card bg-base-100 shadow-md">
                            <figure>
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title">{product.name}</h3>
                                <p>Brand: {product.brand}</p>
                                <p className="text-lg font-bold">${product.price}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">View Product</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No personalized recommendations available.</p>
                )}
            </div>
        </div>
    );
};

export default PersonalizedRecommendations;
