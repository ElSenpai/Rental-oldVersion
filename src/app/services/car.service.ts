import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/dto/carDto';
import { Car } from '../models/entities/car';
import { ListResponseModel } from '../models/response/listResponseModel';
;


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:44310/api/cars/getall';
  apiUrldto='https://localhost:44310/api/cars/getdetail';
  constructor(private httpClient:HttpClient) { }
  
  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
  getCarDetails():Observable<ListResponseModel<CarDto>>{
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrldto);
  }

}
