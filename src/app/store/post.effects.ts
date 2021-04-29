import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from './post.actions';
import { map, mergeMap, catchError, switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { PostHttpService } from '../components/post/post-http.service';
import { EMPTY, of } from 'rxjs';



@Injectable()
export class PostEffects {

  //#region Load Post Effect
  /**
   * @description Effect for loading post from API based on action LoadPost
   */
  loadPost$ = createEffect((): any => this.actions$.pipe(
    ofType(PostActions.loadPosts),
    switchMap(() => {
      return this.postService.getAllPost().pipe(
        map(data =>
          PostActions.loadPostsSuccess({ data })),
        catchError(error => of(PostActions.loadPostsFailure({ error })))
      )
    })
  ));
  //#endregion

  //#region Save Post Effect
  /**
   * @description Effect for saving post to API based on action addPost
   * Once date is posted. It will call the API to get all the new posts
   */
  savePost$ = createEffect((): any => this.actions$.pipe(
    ofType(PostActions.addPost),
    switchMap((data) => {
      return this.postService.addNewPost(data?.data).pipe(map(data => PostActions.addPostsSuccess({ data })),
        catchError(error => of(PostActions.loadPostsFailure({ error })))).pipe(
          switchMap(() => [
            PostActions.loadPosts()
          ])
        )
    }
    )
  ));
  //#endregion

  //#region Search Post Effect
  /**
 * @description Effect for searching in Post API based on action Search Post
 */
  searchPost$ = createEffect((): any => this.actions$.pipe(
    ofType(PostActions.searchPost),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap((data) => {
      return this.postService.searchPost(data?.data).pipe(
        map(response => PostActions.searchPostsSuccess({ data: response })),
        catchError(error => of(PostActions.searchPostsFailure({ error })))
      )
    })
  ))
  //#endregion

  constructor(private actions$: Actions, private postService: PostHttpService) { }

}
