import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from '../../models/state.model';
import { selectAllPost, selectSeachPost } from '../../store/post.selectors';
import * as PostActions from '../../store/post.actions'
import { map } from 'rxjs/operators';
import { PostDto, PostResponse } from '../../models/post.model';
import { isEmpty } from 'src/utils/common.utils';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostFacadeService {

  constructor(private store: Store<PostState>) { }

  /**
 * @description Calls API to fetch all post data
 */
  loadAllPost() {
    this.store.dispatch(PostActions.loadPosts())
  }

  /**
   * @description Get all posts from store
   * @returns Observable Array of Post
   */
  getAllPost() {
    return this.store.select(selectAllPost).pipe(map((data: PostResponse[]) => {
      if (isEmpty(data)) return [];
      return data.slice().reverse();
    }));
  }

  /**
 * @description Post object of postDto to API
 * @returns Accepted object as body with 201 Status
 */
  addNewPost(data: PostDto) {
    this.store.dispatch(PostActions.addPost({ data }));
  }

  /**
 * @description Post object of postDto to API
 * @returns Accepted object as body with 201 Status
 */
  searchPost(keyword: string) {
    this.store.dispatch(PostActions.searchPost({ data: keyword }));
  }

  /**
* @description Get search result from Store
* @returns array of PostResponse object from API
*/
  getSearchPost() {
    return this.store.select(selectSeachPost).pipe(map((data: PostResponse[]) => {
      if (isEmpty(data)) return [];
      return data.slice().reverse();
    }));
  }

}
