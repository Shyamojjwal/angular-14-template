import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-featured-layout',
  templateUrl: './featured-layout.component.html',
  styleUrls: ['./featured-layout.component.scss']
})
export class FeaturedLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onResized(event: ResizedEvent | any) {

    var _el = document.querySelector("#main-wrapper") as HTMLElement;
    if (event.newWidth <= 768) {
      _el.classList.remove('mobile-view', 'sidebar-collapse', 'sidebar-expanded');

      _el.classList.add('mobile-view', 'sidebar-collapse')
    } else {
      _el.classList.remove('mobile-view', 'sidebar-collapse', 'sidebar-expanded');

      _el.classList.add('sidebar-expanded')
    }

    // this.width = event.newRect.width;
    // this.height = event.newRect.height;
  }

}
