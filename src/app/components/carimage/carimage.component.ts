import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carimage } from 'src/app/models/entities/carimage';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {

  carimages:Carimage[]=[];
  currentCarImage:Carimage;
  constructor(private carimageService:CarimageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
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
  getCarImagesByCarId(carId:number){
    this.carimageService.getCarimagesByCarId(carId).subscribe(response=>{
      this.carimages=response.data
    })
  }
  setCurrentCarImage(carimage:Carimage){
    this.currentCarImage=carimage;
  }
}
