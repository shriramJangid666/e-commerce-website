"use client"
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl font-semibold">E-commerce Store</p>
        </Link>
        <div className="space-x-4 flex items-center justify-center">
          <Link href="/Cart">
            <p>Cart</p>
          </Link>
          <Link href="/Login">
            <p>Login</p>
          </Link>
          <Link href="/Register">
            <p>Register</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
