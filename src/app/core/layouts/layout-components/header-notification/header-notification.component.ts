import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-notification',
  templateUrl: './header-notification.component.html',
  styleUrls: ['./header-notification.component.scss']
})
export class HeaderNotificationComponent implements OnInit {

  public isShownMenuOpt: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleMenuOpt = () => {
    this.isShownMenuOpt = !this.isShownMenuOpt;
  }

}
