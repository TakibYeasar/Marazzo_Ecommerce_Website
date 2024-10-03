"use client";

import React, { useState } from 'react';

const products = [
    // Example data (You should replace this with dynamic data from your backend)
    { id: 1, name: 'Sneakers', brand: 'Nike', size: 'M', material: 'Leather', color: 'Black', price: 120 },
    { id: 2, name: 'Jacket', brand: 'Adidas', size: 'L', material: 'Cotton', color: 'Blue', price: 80 },
    { id: 3, name: 'Ring', brand: 'Pandora', size: 'S', material: 'Silver', color: 'Silver', price: 200 },
    // Add more products
];

const ProductDiscovery = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedMaterial, setSelectedMaterial] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [priceRange, setPriceRange] = useState([0, 300]);

    // Filter products based on search and filters
    const filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedSize ? product.size === selectedSize : true) &&
            (selectedBrand ? product.brand === selectedBrand : true) &&
            (selectedMaterial ? product.material === selectedMaterial : true) &&
            (selectedColor ? product.color === selectedColor : true) &&
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );
    });

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Product Discovery</h2>

            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full max-w-lg"
                />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Size Filter */}
                <div>
                    <label className="block mb-2">Size</label>
                    <select
                        className="select select-bordered w-full"
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                    >
                        <option value="">All Sizes</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                    </select>
                </div>

                {/* Brand Filter */}
                <div>
                    <label className="block mb-2">Brand</label>
                    <select
                        className="select select-bordered w-full"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                        <option value="">All Brands</option>
                        <option value="Nike">Nike</option>
                        <option value="Adidas">Adidas</option>
                        <option value="Pandora">Pandora</option>
                        {/* Add more brands */}
                    </select>
                </div>

                {/* Material Filter */}
                <div>
                    <label className="block mb-2">Material</label>
                    <select
                        className="select select-bordered w-full"
                        value={selectedMaterial}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                    >
                        <option value="">All Materials</option>
                        <option value="Leather">Leather</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Silver">Silver</option>
                        {/* Add more materials */}
                    </select>
                </div>

                {/* Color Filter */}
                <div>
                    <label className="block mb-2">Color</label>
                    <select
                        className="select select-bordered w-full"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                    >
                        <option value="">All Colors</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="Silver">Silver</option>
                        {/* Add more colors */}
                    </select>
                </div>
            </div>

            {/* Price Range Slider */}
            <div className="mb-6">
                <label className="block mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <input
                    type="range"
                    min="0"
                    max="300"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="range range-primary w-full"
                />
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="card bg-base-100 shadow-md">
                            <div className="card-body">
                                <h3 className="card-title">{product.name}</h3>
                                <p>Brand: {product.brand}</p>
                                <p>Size: {product.size}</p>
                                <p>Material: {product.material}</p>
                                <p>Color: {product.color}</p>
                                <p className="text-lg font-bold">${product.price}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Add to Cart</button>
                                    <button className="btn btn-secondary">Wishlist</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found matching the criteria.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDiscovery;
