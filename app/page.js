'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from './component/productCard/ProductCard';
import Link from 'next/link';

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
          <Link  href={`/Overview?id=${product.id}`}>
              <ProductCard key={product.id} product={product} />
          </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
