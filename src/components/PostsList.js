import React from 'react';
import PostItem from './PostItem';
import CategoryItem from "./CategoryItem";

export default function PostsList(props) {
  const {posts} = props;
  const post = posts.map((item) => {
    return (
      <li>
        <PostItem
          key={item.id}
          post={item}
        />
      </li>
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