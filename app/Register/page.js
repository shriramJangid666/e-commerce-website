'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ... (registration logic)
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="w-full border rounded px-3 py-2"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded px-3 py-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border rounded px-3 py-2"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-background-color"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Already have an account?</p>
          <Link href="/Login">
            <p className="text-blue-500 hover:underline">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
