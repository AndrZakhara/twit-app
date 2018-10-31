import React from 'react';

export default function CategoryItem(props) {
  const {
    category,
    getCategoriesId,
  } = props;

  return(
    <div>
      <span onClick={() => getCategoriesId(category.id)}>{category.title}</span>
    </div>
  );
}