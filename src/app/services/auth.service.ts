import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/entities/loginModel';
import { TokenModel } from '../models/entities/tokenModel';

import { SingleResponseModel } from '../models/response/singleResponseModel';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44310/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }



}