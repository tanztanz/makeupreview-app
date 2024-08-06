import React from 'react';
import Item from './item';

const item1 = {
  name: "Foundation - Natural Beige",
  category: "face",
};

const item2 = {
  name: "Mascara - Black",
  category: "eyes",
};

const item3 = {
  name: "Lipstick - Classic Red",
  category: "lips",
};

const item4 = {
  name: "Blush - Rose Pink",
  category: "face",
};

const item5 = {
  name: "Eye Shadow Palette - Warm Neutrals",
  category: "eyes",
};

const item6 = {
  name: "Concealer - Light Ivory",
  category: "face",
};

const item7 = {
  name: "Eyeliner - Liquid Black",
  category: "eyes",
};

const item8 = {
  name: "Setting Spray - Matte Finish",
  category: "face",
};

const item9 = {
  name: "Makeup Remover - Oil-Free",
  category: "skincare",
};

const item10 = {
  name: "Lip Gloss - Clear Shine",
  category: "lips",
};

const item11 = {
  name: "Eyebrow Pencil - Dark Brown",
  category: "eyes",
};

const item12 = {
  name: "Face Primer - Hydrating",
  category: "face",
};

const items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12];

const ItemList = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ItemList;
