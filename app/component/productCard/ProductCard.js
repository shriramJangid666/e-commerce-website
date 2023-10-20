import React from 'react';
// import '../globals.css'

function ProductCard({ product }) {

  const handleAddToCart = (event) => {
    let item = event.target.id
    console.log(item)
  };

  
  return (
    <div className="product-card overflow-hidden border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
      <div className="relative aspect-w-1 aspect-h-1">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mt-3">{product.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      <p className="text-xl text-blue-600 font-semibold mt-1">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-700 transition-background-color"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
