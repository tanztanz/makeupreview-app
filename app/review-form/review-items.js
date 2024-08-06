// review-items.js

import React from 'react';
import ItemList from './item-list'; // Updated path

const ReviewItems = () => {
  return (
    <div className="review-items">
      <h2 className="text-2xl font-bold mb-4">Product Reviews</h2>
      <ItemList />
    </div>
  );
};

export default ReviewItems;
