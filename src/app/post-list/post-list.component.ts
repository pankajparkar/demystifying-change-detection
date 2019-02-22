import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dcd-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts;

  constructor() { }

  ngOnInit() {
  }

}
