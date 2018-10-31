import React from 'react';
import CategoryItem from './CategoryItem';

export default function CategoriesList(props) {
  const { categories } = props;
  console.log('categories');
  console.log(categories);
  console.log(categories[0]);

  const category = categories.map((item) => {
    return (
      <li>
        <CategoryItem
          key={item.id}
          category={item}
        />
      </li>
    );
  });

  if(categories.length !== 0) {
    return (
      <ul>
        {category}
      </ul>
    );
  } else {
    return null;
  }
}