import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app-auth-modules/services';
import { appSettings } from '@app-core/config';
import { AuthenticationService, UserNotifyService } from '@app-core/services';
import { cryptoJSHelper } from '@app-shared/helper/cryptoJSHelper';
import { checkFormValidation, makeAllFormControlAsDirty } from '@app-shared/helper/shared-functions';
import { userSignInErrorMessage } from '@app-shared/helper/validation-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userInfoEnc: string = 'U2FsdGVkX1+zZSGC4GiDPda6YJ17waGOwaJpA4w50NhYJiNtK4fTOQiutYLHh4oRxgr/lnAVsr5qEJ51X2+o3SVBCNeMEx5Nl9Kk6bfvJIfeHgcYOwso3impEfBBjVHciTuaQ7xa+5bL/yzk+Rb3GGK/iPe2bBPAIvjQ36XNOK3P4zrt9Pw3ARmq2OqB3T2PtlZ3GApZClVdlaApcM+hFA=='

  public userForm: FormGroup | any;
  public isFormSubmitted: boolean = false;
  public validationMessages: any = null;

  public isFormReadOnly: boolean = true;

  constructor(
    private _router: Router,
    private _FB: FormBuilder,
    private _authService: AuthService,
    // private _notifyService: UserNotifyService,
    private _userAuthService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.initUserForm();

    setTimeout(() => {
      this.isFormReadOnly = false;
    }, 500);
  }

  initUserForm = () => {
    this.userForm = this._FB.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      token: ['', [Validators.required]]
      // rememberMe: [false, [Validators.required]]
    })
  }

  validateUser = () => {
    this.validationMessages = checkFormValidation(this.userForm, userSignInErrorMessage);
  }

  userSignIn = () => {
    const _userInfo = cryptoJSHelper.decrypt(this.userInfoEnc);
    
    this._userAuthService.setUserInfo(JSON.parse(_userInfo));
    this._userAuthService.setAuthToken(appSettings.cryptoJSKey);

    this._router.navigate(["/"]);
    return;
    
    if (!this.userForm.valid) {
      makeAllFormControlAsDirty(this.userForm);
      this.validateUser();
      return;
    }

    const _payload: any = { ...this.userForm.value };

    this._authService.userSignIn(_payload).subscribe({
      next: (_res: any) => {
        console.log("_User SignIn Res: ", _res);
        var _apiRes: any = { ..._res };

        delete _apiRes.message;

        this._userAuthService.setAuthToken(_apiRes.accessToken);
        this._userAuthService.setUserInfo(_apiRes);

        // this._notifyService.success('You are successfully logged in.')

        this._router.navigate(["/"]);
      },
      error: (_err: any) => {
        console.error("_User SignIn Err: ", _err);
      }
    })
  }

}
