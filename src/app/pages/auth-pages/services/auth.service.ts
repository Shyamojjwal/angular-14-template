import { Injectable } from '@angular/core';
import { ApiService } from '@app-core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _apiService: ApiService
  ) { }

  userSignIn = (_payload: any) => {
    return this._apiService.post(`user/login`, _payload);
  }
}
