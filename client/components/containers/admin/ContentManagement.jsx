"use client";

import React, { useState } from 'react';

const ContentManagement = () => {
    const [promotions, setPromotions] = useState([
        { id: 1, title: 'Summer Sale', description: 'Up to 50% off on summer wear!' },
        { id: 2, title: 'Holiday Specials', description: 'Exclusive holiday discounts on selected items.' },
    ]);

    const [banners, setBanners] = useState([
        { id: 1, image: '/banners/summer-sale.jpg', alt: 'Summer Sale Banner' },
        { id: 2, image: '/banners/holiday-specials.jpg', alt: 'Holiday Specials Banner' },
    ]);

    const [blogs, setBlogs] = useState([
        { id: 1, title: 'Fashion Trends 2024', content: 'Discover the latest fashion trends for the upcoming year.' },
        { id: 2, title: 'Best Winter Wardrobe', content: 'How to style the perfect winter wardrobe.' },
    ]);

    // Add New Promotion
    const addPromotion = () => {
        const newPromotion = { id: Date.now(), title: '', description: '' };
        setPromotions([...promotions, newPromotion]);
    };

    // Add New Blog
    const addBlog = () => {
        const newBlog = { id: Date.now(), title: '', content: '' };
        setBlogs([...blogs, newBlog]);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Content Management</h2>

            {/* Promotions Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Site-wide Promotions</h3>
                <div className="space-y-4">
                    {promotions.map((promotion) => (
                        <div key={promotion.id} className="p-4 bg-gray-100 rounded-lg">
                            <h4 className="text-xl font-semibold">{promotion.title}</h4>
                            <p>{promotion.description}</p>
                            <div className="mt-4 flex gap-2">
                                <button className="btn btn-secondary btn-sm">Edit</button>
                                <button className="btn btn-error btn-sm">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-primary mt-4" onClick={addPromotion}>Add New Promotion</button>
            </div>

            {/* Banners Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Update Banners</h3>
                <div className="grid grid-cols-2 gap-4">
                    {banners.map((banner) => (
                        <div key={banner.id} className="p-4 bg-gray-100 rounded-lg">
                            <img src={banner.image} alt={banner.alt} className="w-full h-32 object-cover mb-2" />
                            <div className="flex gap-2">
                                <button className="btn btn-secondary btn-sm">Edit</button>
                                <button className="btn btn-error btn-sm">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-primary mt-4">Add New Banner</button>
            </div>

            {/* Blogs/News Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-4">Blogs/News</h3>
                <div className="space-y-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="p-4 bg-gray-100 rounded-lg">
                            <h4 className="text-xl font-semibold">{blog.title}</h4>
                            <p>{blog.content}</p>
                            <div className="mt-4 flex gap-2">
                                <button className="btn btn-secondary btn-sm">Edit</button>
                                <button className="btn btn-error btn-sm">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn btn-primary mt-4" onClick={addBlog}>Add New Blog</button>
            </div>
        </div>
    );
};

export default ContentManagement;
