'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ... (login logic)
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Don't have an account?</p>
          <Link href="/Register">
            <p className="text-blue-500 hover:underline">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
