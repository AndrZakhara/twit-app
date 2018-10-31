import React from 'react';

export default function CategoryItem(props) {
  const { post } = props;

  return(
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
}