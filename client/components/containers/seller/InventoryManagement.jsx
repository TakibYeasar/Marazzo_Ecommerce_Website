"use client";

import React, { useEffect, useState } from 'react';

// Sample data for products (replace this with your actual data fetching logic)
const sampleProducts = [
    { id: 1, name: 'Blue T-Shirt', stock: 10 },
    { id: 2, name: 'Red Sneakers', stock: 5 },
    { id: 3, name: 'Green Jacket', stock: 2 },
    { id: 4, name: 'Leather Belt', stock: 0 },
];

const InventoryManagement = () => {
    const [products, setProducts] = useState(sampleProducts);
    const [restockAmount, setRestockAmount] = useState({});

    useEffect(() => {
        // Here, you could fetch actual product data from an API
        // setProducts(fetchedProducts);
    }, []);

    const handleRestockChange = (productId, value) => {
        setRestockAmount({ ...restockAmount, [productId]: value });
    };

    const handleRestockSubmit = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, stock: product.stock + Number(restockAmount[productId]) };
            }
            return product;
        });

        setProducts(updatedProducts);
        setRestockAmount({ ...restockAmount, [productId]: '' }); // Reset the restock amount input
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Inventory Management</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className="text-left">Product Name</th>
                        <th className="text-left">Stock Level</th>
                        <th className="text-left">Restock</th>
                        <th className="text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={restockAmount[product.id] || ''}
                                    onChange={(e) => handleRestockChange(product.id, e.target.value)}
                                    className="input input-bordered w-full"
                                    placeholder="Quantity"
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => handleRestockSubmit(product.id)}
                                    className="btn btn-primary"
                                    disabled={!restockAmount[product.id]}
                                >
                                    Restock
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryManagement;
