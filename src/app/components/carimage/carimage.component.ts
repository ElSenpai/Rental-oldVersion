import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/dto/carDto';
import { Carimage } from 'src/app/models/entities/carimage';
import { Rental } from 'src/app/models/entities/rental';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { RentalService } from 'src/app/services/rental.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {

  carimages:Carimage[]=[];
  currentCarImage:Carimage;
  cardto:CarDto;
  
  constructor(private carimageService:CarimageService,private activatedRoute:ActivatedRoute, private cardetailService:CardetailService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
        this.getCarDto(params["carId"])
    
        
      }else {
        this.getCarimages();
      }
    })
  }
  getCarimages(){
    this.carimageService.getCarimages().subscribe(response=>{
      this.carimages=response.data
    })
  }

  getCarDto(carId:number)
  {
    this.cardetailService.getDtoByCarId(carId).subscribe(response=>{
      this.cardto=response.data[0]
    })
  }

  getCarImagesByCarId(carId:number){
    this.carimageService.getCarimagesByCarId(carId).subscribe(response=>{
      this.carimages=response.data
    })
  }
  setCurrentCarImage(carimage:Carimage){
    this.currentCarImage=carimage;
  }
  
  
  
}
