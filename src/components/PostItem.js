import React from 'react';

export default function PostItem(props) {
  const {
    post,
    getPostId,
  } = props;

  return(

    <li onClick={()=>getPostId(post.id)}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </li>
  );
}