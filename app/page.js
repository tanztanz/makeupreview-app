// app/page.js
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(/images/mkp2.jpg)' }}
    >
      <nav className="w-full bg-black bg-opacity-60 py-4 px-8 flex justify-between items-center fixed top-0 left-0">
        <Link href="/" className="text-lg md:text-xl font-semibold text-white">
          Home
        </Link>
        <div className="space-x-4">
          <Link href="/categories" className="text-lg md:text-xl font-semibold text-white hover:text-pink-600 transition">
            Categories
          </Link>
          <Link href="/review-form" className="text-lg md:text-xl font-semibold text-white hover:text-pink-600 transition">
            Review Form
          </Link>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white pt-20">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Welcome to the Makeup Review Site!
        </h1>
        <p className="mt-6 text-xl md:text-2xl drop-shadow-md">
          Discover the best makeup products and read reviews from other users.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
