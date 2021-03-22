import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/entities/card';
import { ListResponseModel } from '../models/response/listResponseModel';
import { ResponseModel } from '../models/response/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl='https://localhost:44310/api/';
  constructor(private httpClient:HttpClient) { }

  payment(card:Card):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cards/add"
    return this.httpClient.post<ResponseModel>(newPath,card)
  }
}
