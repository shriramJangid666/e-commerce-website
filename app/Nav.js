"use client"
import Link from 'next/link';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl font-semibold">E-commerce Store</p>
        </Link>
        <div className="space-x-4 flex items-center justify-center">
          {isAuthenticated ? <h1>Welcome {user.name}</h1> : ''}
          <Link href="/Cart">
            <p>Cart</p>
          </Link>
          {isAuthenticated ? (
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
