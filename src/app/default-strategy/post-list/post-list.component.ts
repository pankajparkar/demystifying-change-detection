import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'dcd-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostListComponent implements OnInit {

  posts;

  constructor(private postsService: PostService) { }

  ngOnInit () {
    this.posts = this.postsService.getPostList();
  }

}
