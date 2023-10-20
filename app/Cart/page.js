import React, { useContext } from 'react'
import Cart from '../component/cart/Cart';

function CartPage() {
  // Fetch the user's cart data, for example, from a context or state management library
  const cartItems = []; // Replace with your actual cart data

  return (
    <div>
      <h1 className='text-5xl'>Shopping Cart</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default CartPage;