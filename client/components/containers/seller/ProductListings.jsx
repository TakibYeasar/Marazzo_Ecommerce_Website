"use client";

import React, { useState } from 'react';

const ProductListings = () => {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        size: '',
        stock: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e) => {
        setProductData({ ...productData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the product data to the server
        console.log('Product submitted:', productData);
        // Reset the form
        setProductData({
            name: '',
            description: '',
            price: '',
            size: '',
            stock: '',
            image: null,
        });
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Submit New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        required
                        rows="4"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Price ($)</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                            min="0"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Size</span>
                        </label>
                        <input
                            type="text"
                            name="size"
                            value={productData.size}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Stock Level</span>
                    </label>
                    <input
                        type="number"
                        name="stock"
                        value={productData.stock}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                        min="0"
                    />
                </div>

                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="file-input file-input-bordered w-full"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-4">
                    Submit Product
                </button>
            </form>
        </div>
    );
};

export default ProductListings;
