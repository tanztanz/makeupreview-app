import React from 'react';

const Item = ({ name, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col">
      <span className="font-bold text-lg text-gray-900">{name}</span>
      <span className="text-gray-600 text-sm mt-1">{category}</span>
    </div>
  );
};

export default Item;
