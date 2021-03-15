import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDto } from '../models/dto/rentalDto';
import { Rental } from '../models/entities/rental';
import { ListResponseModel } from '../models/response/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl='https://localhost:44310/api/rentals/getall';
  apiUrldto='https://localhost:44310/api/rentals/getdetail';
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
  getRentalDetails():Observable<ListResponseModel<RentalDto>>{
    return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrldto);
  }
}
