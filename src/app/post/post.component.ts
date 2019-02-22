import { Component, OnInit, Input, ElementRef, AfterViewChecked, NgZone, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dcd-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, AfterViewChecked {

  @Input() post;

  constructor(private el: ElementRef, private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.zone.runOutsideAngular(() => {
      this.el.nativeElement.classList.add('highlight')
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight')
      }, 2000)
    })
  }

}
