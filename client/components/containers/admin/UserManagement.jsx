"use client";

import React from 'react';
import { useState } from 'react';

const UserManagement = () => {
    // Dummy data for customers and sellers
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', role: 'Customer', status: 'Active' },
        { id: 2, name: 'Jane Smith', role: 'Seller', status: 'Pending Approval' },
        { id: 3, name: 'Emily Brown', role: 'Seller', status: 'Active' },
        { id: 4, name: 'Michael Lee', role: 'Customer', status: 'Active' },
    ]);

    const approveSeller = (id) => {
        setUsers(
            users.map((user) =>
                user.id === id && user.role === 'Seller' && user.status === 'Pending Approval'
                    ? { ...user, status: 'Approved' }
                    : user
            )
        );
    };

    const assignRole = (id, newRole) => {
        setUsers(users.map((user) => (user.id === id ? { ...user, role: newRole } : user)));
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">User Management</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>
                                    <select
                                        className="select select-bordered select-sm w-full max-w-xs"
                                        value={user.role}
                                        onChange={(e) => assignRole(user.id, e.target.value)}
                                    >
                                        <option value="Customer">Customer</option>
                                        <option value="Seller">Seller</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </td>
                                <td>
                                    <span
                                        className={`badge ${user.status === 'Active'
                                                ? 'badge-success'
                                                : user.status === 'Pending Approval'
                                                    ? 'badge-warning'
                                                    : 'badge-secondary'
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="space-x-2">
                                    {user.role === 'Seller' && user.status === 'Pending Approval' && (
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => approveSeller(user.id)}
                                        >
                                            Approve Seller
                                        </button>
                                    )}
                                    <button className="btn btn-error btn-sm" onClick={() => deleteUser(user.id)}>
                                        Delete User
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">User Actions</h3>
                <div className="space-x-4">
                    <button className="btn btn-secondary">Add New User</button>
                    <button className="btn btn-info">Monitor Seller Activity</button>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
