import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-msg-box',
  templateUrl: './header-msg-box.component.html',
  styleUrls: ['./header-msg-box.component.scss']
})
export class HeaderMsgBoxComponent implements OnInit {

  public isShownMenuOpt: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleMenuOpt = () => {
    this.isShownMenuOpt = !this.isShownMenuOpt;
  }

}
