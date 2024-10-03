"use client";

import React, { useState } from 'react';

const ProductManagement = () => {
    // Sample product data
    const [products, setProducts] = useState([
        { id: 1, name: 'Blue T-Shirt', category: 'Clothing', price: '$25', status: 'Active' },
        { id: 2, name: 'Leather Shoes', category: 'Shoes', price: '$80', status: 'Pending Approval' },
        { id: 3, name: 'Gold Necklace', category: 'Jewelry', price: '$200', status: 'Active' },
        { id: 4, name: 'Running Shorts', category: 'Clothing', price: '$35', status: 'Pending Approval' },
    ]);

    const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '' });

    const addProduct = () => {
        const newId = products.length + 1;
        setProducts([...products, { id: newId, ...newProduct, status: 'Active' }]);
        setNewProduct({ name: '', category: '', price: '' });
    };

    const editProduct = (id, updatedProduct) => {
        setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const approveProduct = (id) => {
        setProducts(
            products.map((product) =>
                product.id === id && product.status === 'Pending Approval'
                    ? { ...product, status: 'Approved' }
                    : product
            )
        );
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Product Management</h2>

            {/* Add New Product Section */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        className="input input-bordered w-full"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered w-full"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                </div>
                <button className="btn btn-primary mt-4" onClick={addProduct}>
                    Add Product
                </button>
            </div>

            {/* Product List Section */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <span
                                        className={`badge ${product.status === 'Active'
                                                ? 'badge-success'
                                                : product.status === 'Pending Approval'
                                                    ? 'badge-warning'
                                                    : 'badge-secondary'
                                            }`}
                                    >
                                        {product.status}
                                    </span>
                                </td>
                                <td className="space-x-2">
                                    {product.status === 'Pending Approval' && (
                                        <button className="btn btn-primary btn-sm" onClick={() => approveProduct(product.id)}>
                                            Approve
                                        </button>
                                    )}
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        onClick={() => editProduct(product.id, { ...product, name: 'Edited Product Name' })}
                                    >
                                        Edit
                                    </button>
                                    <button className="btn btn-error btn-sm" onClick={() => deleteProduct(product.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManagement;
