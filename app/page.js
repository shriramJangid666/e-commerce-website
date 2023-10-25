'use client'; // Use this directive to indicate that this component should run on the client-side

import React, { useEffect, useState } from 'react';
import ProductCard from './productCard/ProductCard';

async function fetchProductData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
}

async function categorizeProducts() {
  const products = await fetchProductData();
  const categorizedProducts = {};

  products.forEach((product) => {
    if (!categorizedProducts[product.category]) {
      categorizedProducts[product.category] = [];
    }
    categorizedProducts[product.category].push(product);
  });

  return categorizedProducts;
}

const Home = () => {
  const [categorizedProducts, setCategorizedProducts] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Check if we're running on the client-side
    if (typeof window !== 'undefined') {
      const storedCartData = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(Array.isArray(storedCartData) ? storedCartData : []);
    }
  }, []);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    async function fetchData() {
      const categorizedData = await categorizeProducts();
      setCategorizedProducts(categorizedData);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-8">
      {Object.keys(categorizedProducts).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categorizedProducts[category].map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
