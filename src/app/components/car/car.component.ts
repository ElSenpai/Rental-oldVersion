import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/dto/carDto';
import { Car } from 'src/app/models/entities/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 cars:Car[]=[];
 cardtos:CarDto[]=[];

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarDetails();
    this.getCars();
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.cardtos=response.data
    })
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
    })
  }

}
