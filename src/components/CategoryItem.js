import React from 'react';

export default function CategoryItem(props) {
  const { category } = props;
  console.log(category)

  return(
    <div>
      <span>{category.title}</span>
    </div>
  )
}