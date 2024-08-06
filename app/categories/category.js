"use client";
import { useRouter } from 'next/router';
import React from 'react';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-8">{category}</h1>
      {/* Display products based on the selected category */}
    </div>
  );
};

export default CategoryPage;
