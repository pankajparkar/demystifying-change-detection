import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dcd-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments

  constructor() { }

  ngOnInit() {
  }

}
