'use client'
import React from 'react';
import Link from 'next/link';

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 transition-transform transform hover:scale-105 text-center">
      <Link href={`/Overview?id=${product.id}`}>
        <div className="relative aspect-w-1 aspect-h-1 mb-2">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full" // Set fixed width and height
          />
        </div>
      </Link>
      <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
      <p className="text-sm font-semibold text-blue-500">${product.price}</p>
      <div className="flex justify-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-2 py-1 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
