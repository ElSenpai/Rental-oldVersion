import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carimage } from '../models/entities/carimage';
import { ListResponseModel } from '../models/response/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  
  apiUrl='https://localhost:44310/api/';
  constructor(private httpClient:HttpClient) { }
  getCarimages():Observable<ListResponseModel<Carimage>>{
    let newPath=this.apiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<Carimage>>(newPath);
  }
  getCarimagesByCarId(carId:number):Observable<ListResponseModel<Carimage>>{
    let newPath=this.apiUrl+"carimages/getbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Carimage>>(newPath)
  }
}
