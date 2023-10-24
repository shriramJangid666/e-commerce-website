'use client'
import React, { useEffect,  useState } from 'react';
import ProductCard from './/productCard/ProductCard'
import Link from 'next/link';
import CartPage from './Cart/page';

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
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);


  function addToCart(product) {
    setCart((prev) => {
      return [...prev, product];
    });
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  console.log(cart)


  useEffect(() => {
    async function fetchData() {
      const categorizedData = await categorizeProducts();
      setCategorizedProducts(categorizedData);
    }
    fetchData();
  }, []);


  
 
  return (
    <div>
      {Object.keys(categorizedProducts).map((category) => (
        <div key={category} className='flex-col items-center'>
          <h1>{category}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categorizedProducts[category].map((product) => (          
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
