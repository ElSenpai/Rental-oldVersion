import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/dto/carDto';
import { Card } from 'src/app/models/entities/card';
import { Customer } from 'src/app/models/entities/customer';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CustomerService } from 'src/app/services/customer.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  customers:Customer[]=[];
  cards:Card[]=[]
  isCheck:boolean=false;
  customerId:number
  cardNumber:string
  cardPassword:string

  cardto:CarDto;
  @Input() carForRent:CarDto
  constructor(private customerService: CustomerService,private toastrService: ToastrService,private cardetailService:CardetailService,private activatedRoute:ActivatedRoute,private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDto(params["carId"])
        this.getCustomer();
      }else{
        
      }
    })
    
  }


  Payment(){
   let newPay:Card={
     customerId:this.customerId,
     cardNumber:this.cardNumber,
     money:this.cardto.dailyPrice,
     cardPassword:this.cardPassword


   }
   this.paymentService.payment(newPay).subscribe(res=>{
     this.isCheck=true;
     this.toastrService.success("Ödeme gerçekleşti ");
   })
    

  }

  getCarDto(carId:number)
  {
    this.cardetailService.getDtoByCarId(carId).subscribe(response=>{
      this.cardto=response.data[0]
    })
  }
  getCustomer()
  {
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data
    });
  }

}
