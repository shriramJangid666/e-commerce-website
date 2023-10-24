'use client'
import React, { useState, useEffect } from 'react';

function CartPage() {
  const [cartData, setCartData] = useState([]);


  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCartData = storedCartData.map(item => {
      return { ...item, quantity: 1 };
    });

    setCartData(updatedCartData);
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartData.filter(item => item.id !== itemId);
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateGrandTotal = () => {
    return cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      {cartData.length > 0 ? (
        <div>
          {cartData.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded p-4 my-4 flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-fit rounded mr-4" />
              <div>
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.details}</p>
                <p className="text-gray-800">Price: ${item.price}</p>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 text-gray-700 p-2 rounded-full mr-2"
                    onClick={() => updatedCartData(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    className="bg-gray-200 text-gray-700 p-2 rounded-full ml-2"
                    onClick={() => updatedCartData(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-600 text-white p-2 rounded-full ml-2"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-2xl font-semibold">Grand Total: ${calculateGrandTotal()}</p>
          </div>
          <button className="bg-blue-500 text-white p-3 rounded mt-4" onClick={() => handleCheckout()}>
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
