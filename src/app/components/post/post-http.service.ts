import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto, PostResponse } from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostHttpService {

  constructor(private http: HttpClient) { }

  /**
   *  @method Get
   *  @description This will fetch all the post from the api.
   *  @returns Array of object 'PostResponse'
   */
  getAllPost(): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>('http://localhost:3000/posts');
  }

  /**
     *
   *  @description Post new object of 'post' to API.
   *  @param Accepts object of PostDto
   */
  addNewPost(post: PostDto) {
    return this.http.post<PostResponse[]>('http://localhost:3000/posts', post);
  }

  /**
   *
 *  @description Search in API using the keyword
 *  @param Accepts object of type 'String'.
 */
  searchPost(keyword: string) {
    return this.http.get<PostResponse[]>(`http://localhost:3000/posts?q=${keyword}`);
  }

}
