import React from 'react';

export default function CategoriesList(props) {
  const { categories } = props;
  console.log('categories');
  console.log(categories)
  console.log(categories[0])
  return(
    <div>
      <h4>Categories list</h4>
      {categories.length !== 0
        ? <p>{categories[1].title}</p>
        : null}


    </div>

  );
}