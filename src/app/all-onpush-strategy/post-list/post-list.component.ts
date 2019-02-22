import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'dcd-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {

  posts;

  constructor(private postsService: PostService, private cd: ChangeDetectorRef) { }

  ngOnInit () {
    this.postsService.getPostList().subscribe(
      posts => {
        this.posts = posts
        this.cd.detectChanges()
      }
    );
  }

}
