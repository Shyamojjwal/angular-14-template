import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app-core/services';

@Component({
  selector: 'sidebar-userbox',
  templateUrl: './sidebar-userbox.component.html',
  styleUrls: ['./sidebar-userbox.component.scss']
})
export class SidebarUserboxComponent implements OnInit {

  @ViewChild('toggleMenuSec') toggleMenuSec: ElementRef | any;
  @ViewChild('toggleButton') toggleButton: ElementRef | any;
  @ViewChild('menuOpt') menuOpt: ElementRef | any;

  public isUserMenuOpen: boolean = false;

  public userInfo: any = null;

  constructor(
    private _router: Router,
    private renderer: Renderer2,
    private _authUserService: AuthenticationService
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.toggleButton.nativeElement && e.target !== this.menuOpt.nativeElement) {
        this.isUserMenuOpen = false;
      }
    });
  }

  ngOnInit(): void {
    this.userInfo = this._authUserService.getUserInfo();
    console.log("ngOnInit: ", this.userInfo)
  }

  toogleMenuBtn = () => {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  userSignOut = () => {
    this._authUserService.removeSiteInfo();
    this._router.navigate(['/auth']);
  }

}
