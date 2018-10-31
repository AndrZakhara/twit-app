import React from 'react';

export default function CategoryItem(props) {
  const { category } = props;

  return(
    <div>
      <span>{category.title}</span>
    </div>
  );
}