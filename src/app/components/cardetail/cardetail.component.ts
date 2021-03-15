import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/dto/carDto';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  
  cars:CarDto[]=[];
  
  constructor(private cardetailService:CardetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"] ) {
        this.getCarDetailBrandId(params["brandId"])

      } else if( params["colorId"]){
        this.getCarDetailColorId(params["colorId"])
      }else {

        this.getCarDetails();
      }
    })

  }

  getCarDetails(){
    this.cardetailService.getCarDetails().subscribe(response=>{
      this.cars=response.data
    })
  }
  getCarDetailBrandId(brandId:number){
    this.cardetailService.getCarDetailByBrandId(brandId).subscribe(response=>{
      this.cars=response.data
    })
  }
  getCarDetailColorId(colorId:number){
    this.cardetailService.getCarDetailByColorId(colorId).subscribe(response=>{
      this.cars=response.data
    })
  }
  

  

}
