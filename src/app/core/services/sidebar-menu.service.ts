import { Injectable } from '@angular/core';

interface MenuItem {
  title: string;
  isHeader?: boolean;
  link?: string;
  icon?: string;
  subMenu?: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {

  public menus: MenuItem[] = [
    {
      title: "Navigation Menu",
      isHeader: true
    },
    {
      title: "Dashboard",
      isHeader: false,
      icon: 'bi bi-sliders2-vertical',
      link: '/dashboard'
    },
    {
      title: "Others",
      icon: 'bi bi-arrow-down-right-circle',
      isHeader: false,
      subMenu: [
        {
          title: 'Link - 1',
          link: "/link-1"
        },
        {
          title: 'Link - 2',
          link: "/link-2"
        }
      ]

    }
  ]

  constructor() { }

  getMenuList = () => {
    return this.menus;
  }
}
