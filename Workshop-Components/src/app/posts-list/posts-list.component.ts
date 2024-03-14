import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../themes-list/types/post';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  constructor (private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPosts(5).subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

}