import { createSelector } from 'reselect';

const getActiveCategoryId = store => store.mainPage.activeCategoryId;
const getPostsList = store => store.mainPage.posts;

export const getFilteredPostsList = createSelector(
  [getActiveCategoryId, getPostsList],
  (filter, postsList) => {
    if (filter === '') {
      return postsList.map((item)=>(item));
    } else {
      const filteredPostsList = postsList.filter(post => (
        post.category_id === filter
      ));

      return filteredPostsList;
    }

  },
)