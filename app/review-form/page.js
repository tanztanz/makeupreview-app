// review-form/page.js

'use client'; // Add this at the top

import React from 'react';
import ReviewItems from './review-items';

export default function ReviewFormPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="relative max-w-3xl mx-auto p-8 bg-pink-50 shadow-lg rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/mkp1.jpg')" }}>
        <div className="absolute inset-0 bg-pink-50 opacity-70"></div>
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl font-semibold mb-8 text-center text-pink-600">✨ Submit a Review ✨</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div className="form-group">
            <label htmlFor="productName" className="block text-lg font-medium text-pink-700">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              required
              className="mt-2 block w-full px-4 py-2 border border-pink-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="reviewText" className="block text-lg font-medium text-pink-700">Review</label>
            <textarea
              id="reviewText"
              name="reviewText"
              required
              rows="4"
              className="mt-2 block w-full px-4 py-2 border border-pink-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="rating" className="block text-lg font-medium text-pink-700">Rating</label>
            <select
              id="rating"
              name="rating"
              required
              className="mt-2 block w-full px-4 py-2 border border-pink-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">Select Rating</option>
              <option value="1">1 🌟</option>
              <option value="2">2 🌟</option>
              <option value="3">3 🌟</option>
              <option value="4">4 🌟</option>
              <option value="5">5 🌟</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Submit Review 💖
          </button>
        </form>
        <div className="mt-8">
          <ReviewItems />
        </div>
      </div>
    </div>
  );
}
