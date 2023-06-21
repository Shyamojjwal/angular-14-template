import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { appSettings } from '@app-core/config';
import { cryptoJSHelper } from '@app-shared/helper/cryptoJSHelper';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private credentials: string = appSettings.credentialsKey;
  private userCredential: string = appSettings.userInfo;
  private userLoginRemember: string = appSettings.credentialsRememberKey;

  constructor(
    private _router: Router,
    private _storageService: StorageService,
  ) { }

  isAuthenticated = () => {
    return this.getToken() ? true : false;
  }

  setAuthToken = (_token: string) => {
    this._storageService.save(this.credentials, cryptoJSHelper.encrypt(_token));
  }

  setUserInfo = (_userInfo: any) => {
    delete _userInfo.accessToken;

    this._storageService.save(this.userCredential, cryptoJSHelper.encrypt(JSON.stringify(_userInfo)));
  }

  getToken = () => {
    var _item = this._storageService.get(this.credentials) || null;
    if (_item) {
      return cryptoJSHelper.decrypt(_item);
    } else {
      return '';
    }
  }

  getUserInfo = () => {
    var _item = this._storageService.get(this.userCredential) || null;
    if (_item) {
      return JSON.parse(cryptoJSHelper.decrypt(_item))
    } else {
      return null;
    }
  }

  removeSiteInfo = () => {
    this._storageService.remove(this.credentials);
    this._storageService.remove(this.userCredential);
  }
}
