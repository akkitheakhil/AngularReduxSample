import { createAction, props } from '@ngrx/store';
import { PostDto, PostResponse } from '../models/post.model';

//#region Load Post

/**
 * @description Action for loading post from API
 */
export const loadPosts = createAction(
  '[Post] Load Posts'
);

/**
 * @description Action for handling success from api for Load post
 */
export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ data: any }>()
);

/**
 * @description Action for handling failure from api for Load post
 */
export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);

//#endregion

//#region Add Post

/**
 * @description Action for posting data to API to add new post
 */
export const addPost = createAction(
  '[Post] Add Posts',
  props<{ data: PostDto }>()
);


/**
 * @description Action for handling success from api for adding new post
 */
export const addPostsSuccess = createAction(
  '[Post] Add Posts Success',
  props<{ data: any }>()
);

/**
 * @description Action for handling success from api for adding new post
 */
export const addPostsFailure = createAction(
  '[Post] Add Posts Failure',
  props<{ error: any }>()
);

//#endregion

//#region

/**
 * Action for search based on keyword in Post API
 */
export const searchPost = createAction(
  '[Post] Search Post',
  props<{ data: string }>()
);

/**
 * Action for handling success from api when searching
 */
export const searchPostsSuccess = createAction(
  '[Post] Search Posts Success',
  props<{ data: any }>()
);

/**
 * Action for handling failure from api when searching
 */
export const searchPostsFailure = createAction(
  '[Post] Search Posts Failure',
  props<{ error: any }>()
);

//#endregion
