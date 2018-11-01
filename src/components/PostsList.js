import React from 'react';
import PostItem from './PostItem';

export default function PostsList(props) {
  const {
    posts,
    getPostId
  } = props;
  const post = posts.map((item) => {
    return (
      <PostItem
        key={item.id}
        post={item}
        getPostId={getPostId}
      />
    );
  });

  if (posts.length !== 0) {
    return (
      <ul>
        {post}
      </ul>
    );
  } else {
    return null;
  }
}