import React from 'react';
import CategoryItem from './CategoryItem';

export default function CategoriesList(props) {
  const {
    categories,
    getCategoriesId,
  } = props;

  const category = categories.map((item) => {

    return (
      <li>
        <CategoryItem
          key={item.id}
          category={item}
          getCategoriesId={getCategoriesId}
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