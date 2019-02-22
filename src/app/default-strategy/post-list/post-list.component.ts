import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dcd-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostListComponent implements OnInit {

  @Input() posts;

  constructor() { }

  ngOnInit() {
  }

}
