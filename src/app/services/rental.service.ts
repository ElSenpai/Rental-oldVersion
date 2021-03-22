import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDto } from '../models/dto/rentalDto';
import { Rental } from '../models/entities/rental';
import { ListResponseModel } from '../models/response/listResponseModel';
import { ResponseModel } from '../models/response/responseModel';



@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl='https://localhost:44310/api/';
 
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"rentals/getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalDetails():Observable<ListResponseModel<RentalDto>>{
    let newPath=this.apiUrl+"rentals/getdetail"
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }
  RentAdd(rental:Rental):Observable<ResponseModel>{
    let newPath=this.apiUrl+"rentals/add"
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
}
