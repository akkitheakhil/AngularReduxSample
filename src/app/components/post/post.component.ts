import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'src/app/utils/common.utils';
import { PostDto } from '../../models/post.model';
import { PostFacadeService } from './post-facade.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  getAllPost$ = this.postService.getAllPost();
  searchPost$ = this.postService.getSearchPost();

  public username: string = '';
  public comment: string = '';
  public searchKeyword: string = '';

  constructor(private postService: PostFacadeService) { }

  ngOnInit(): void {
    this.postService.loadAllPost();
  }

  /**
   * @description Returns if the user is currently perfoming a search.
   * If there are Values in search Text box. Then it is considered that the user is seaching.
   */
  get isSearching(): boolean {
    return !isEmpty(this.searchKeyword);
  }

  /**
 * @description Save new post to API.
 *
 */
  save() {
    if (isEmpty(this.username) && isEmpty(this.comment)) return;
    const data: PostDto = { name: this.username, comment: this.comment };
    this.postService.addNewPost(data);
  }

  /**
 * @description search by keyword.
 * Search for the post or based on username in API
 *
 */
  search() {
    if (isEmpty(this.searchKeyword)) return;
    this.postService.searchPost(this.searchKeyword);
  }


}
