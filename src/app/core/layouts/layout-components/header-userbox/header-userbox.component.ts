import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-userbox',
  templateUrl: './header-userbox.component.html',
  styleUrls: ['./header-userbox.component.scss']
})
export class HeaderUserboxComponent implements OnInit {

  public isShownMenuOpt: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleMenuOpt = () => {
    this.isShownMenuOpt = !this.isShownMenuOpt;
  }

}
