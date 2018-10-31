import React from 'react';

export default function PostItem(props) {
  const {
    post,
    getPostId,
  } = props;

  return(
    <div onClick={()=>getPostId(post.id)}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
}