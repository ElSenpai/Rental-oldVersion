import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/dto/carDto';
import { ListResponseModel } from '../models/response/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl='https://localhost:44310/api/';
  constructor(private httpClient:HttpClient) { }
  
  
  getCarDetails():Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/getdetail"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailByBrandId(brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/getdetailbrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailByColorId(colorId:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/getdetailcolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
}
