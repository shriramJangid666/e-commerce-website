'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductOverviewPage = () => {
  const searchParams = useSearchParams().toString();
  const parts = searchParams.split('=');
  const productToShow = Number(parts[1]);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4">Product Overview Page</h2>
      <div className="flex-grow w-full max-w-screen-xl flex flex-wrap justify-center">
        {product.map((item) => {
          if (item.id === productToShow) {
            return (
              <div
                key={item.id}
                className="bg-white p-4 rounded-md shadow-md m-4 flex flex-col items-center"
              >
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-contain mt-2"
                />
                <p className="mt-2 text-lg font-bold text-blue-500">${item.price}</p>
                <p className="mt-2 text-gray-700">{item.description}</p>
                <div className="mt-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
                    Buy Now
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ProductOverviewPage;
