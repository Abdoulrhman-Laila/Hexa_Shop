"use client";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCartIcon, EyeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { selectProducts } from '../../store/productsSlice'; // تأكد من صحة المسار

export default function Kids() {
  const products = useSelector(selectProducts);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextPage = () => {
    if (currentIndex + itemsPerPage < products.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevPage = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-8 pt-8">
      <h1 className="text-3xl font-bold mb-2 text-left w-full max-w-6xl">Kids Latest</h1>
      <p className="text-lg text-gray-700 mb-4 w-full max-w-6xl text-left">
        Discover the latest trends in kids' fashion. Shop our newest arrivals for your little ones!
      </p>
      <div className="relative w-full max-w-6xl pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(currentIndex, currentIndex + itemsPerPage).map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-0 relative overflow-hidden">
              <div className="relative group">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="h-3/4 w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                  <a href="#" className="bg-black text-white rounded-full p-2 m-2">
                    <ShoppingCartIcon className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-black text-white rounded-full p-2 m-2">
                    <EyeIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mt-2 text-center">{product.title}</h2>
                <p className="text-gray-600 text-center">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button 
            onClick={prevPage} 
            disabled={currentIndex === 0} 
            className={`p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button 
            onClick={nextPage} 
            disabled={currentIndex + itemsPerPage >= products.length} 
            className={`p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 ${currentIndex + itemsPerPage >= products.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}