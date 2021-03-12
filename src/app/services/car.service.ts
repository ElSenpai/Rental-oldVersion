import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDtoResponseModel } from '../models/response/carDtoResponseModel';
import { CarResponseModel } from '../models/response/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44310/api/cars/getall';
  apiUrldto='https://localhost:44310/api/cars/getdetail';
  constructor(private httpClient:HttpClient) { }
  
  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
  getCarDetails():Observable<CarDtoResponseModel>{
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrldto);
  }

}
