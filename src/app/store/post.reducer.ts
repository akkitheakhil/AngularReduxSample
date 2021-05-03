import { Action, createReducer, on } from '@ngrx/store';
import { PostState } from '../models/state.model';
import * as PostActions from '../store/post.actions'

export const postFeatureKey = 'post';

export const initialState: PostState = {
  post: null,
  search: null
};

export const reducer = createReducer(
  initialState,

  // load post reducer
  on(PostActions.loadPostsSuccess, (state, { data }) => ({ ...state, post: data })),
  on(PostActions.loadPostsFailure, (state, { error }) => ({ ...state, error })),

  // add new post
  on(PostActions.addPostsSuccess, (state, { data }) => ({ ...state })),
  on(PostActions.addPostsFailure, (state, { error }) => ({ ...state, error })),

  // search in posts
  on(PostActions.searchPostsSuccess, (state, { data }) => ({ ...state, search: data })),
  on(PostActions.searchPostsFailure, (state, { error }) => ({ ...state, error })),
);

