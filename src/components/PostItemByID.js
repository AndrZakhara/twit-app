import React from 'react';

export default function PostItemById(props) {
  const {
    post,
  } = props;

  return(
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
}