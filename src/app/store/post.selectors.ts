import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../models/state.model';
import { postFeatureKey } from './post.reducer';

// Select Post Feature
export const selectPostsFeature = createFeatureSelector<any, PostState>(postFeatureKey);

// Select all posts
export const selectAllPost = createSelector(selectPostsFeature, (state: PostState) => state?.post);

// Select search posts
export const selectSeachPost = createSelector(selectPostsFeature, (state: PostState) => state?.search);
