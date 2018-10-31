import React from 'react';

export default function CategoryItem(props) {
  const {
    post,
    getPostId,
    id,
  } = props;

  const postByPostProps = (
    <div onClick={()=>getPostId(post.id)}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );

  const postById = (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );

  if (post !== undefined) {
    return postByPostProps;
  } else if (id !== undefined) {
    return postById;
  }
}