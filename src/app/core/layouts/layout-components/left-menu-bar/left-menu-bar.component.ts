import { Component, OnInit } from '@angular/core';
import { DropDownAnimation } from '@app-core/animations/animation';
import { SidebarMenuService } from '@app-core/services/sidebar-menu.service';

@Component({
  selector: 'left-menu-bar',
  templateUrl: './left-menu-bar.component.html',
  styleUrls: ['./left-menu-bar.component.scss'],
  animations: [DropDownAnimation]
})
export class LeftMenuBarComponent implements OnInit {

  public menuItems: Array<any> = []

  public isOpen = false;

  public openMenuIndex: any = null;

  constructor(
    private _menuService: SidebarMenuService
  ) {
    this.menuItems = [..._menuService.getMenuList()];
  }

  ngOnInit(): void {
  }

  toogleSubMenu = (_menuIndex: number) => {
    if(this.openMenuIndex != _menuIndex) {
      this.openMenuIndex = _menuIndex
    } else {
      this.openMenuIndex = null;
    }
  }

}
