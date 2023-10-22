'use client'
import React from 'react';


function ProductCard({ product }) {

  return (
    <div>
        <div className="product-card overflow-hidden border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
          <div className="relative aspect-w-1 aspect-h-1">
            <img src={product.image} alt={product.title} className="object-cover" />
          </div>
          <h3 className="text-lg font-semibold mt-3">{product.title}</h3>
        </div>
      
      <div className="flex items-center justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-700 transition-background-color">
          Add to Cart
        </button>
      </div>
    </div>
  );

}

export default ProductCard;
