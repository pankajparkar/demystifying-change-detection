import { Component, ViewEncapsulation } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'dcd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  posts;
  constructor(private postsService: PostService) {

  }
  title = 'demystifying-change-detection';
  ngOnInit () {
    this.posts = this.postsService.getPostList();
  }
}
