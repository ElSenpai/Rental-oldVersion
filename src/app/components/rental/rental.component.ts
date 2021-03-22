import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/dto/carDto';
import { RentalDto } from 'src/app/models/dto/rentalDto';
import { Car } from 'src/app/models/entities/car';
import { Carimage } from 'src/app/models/entities/carimage';
import { Customer } from 'src/app/models/entities/customer';
import { Rental } from 'src/app/models/entities/rental';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
rentals:Rental[]=[];
rentaldtos:RentalDto[]=[];
customers:Customer[]=[];
rental:Rental;
customerId:number
//carId:number
rentDate:Date
returnDate:Date
@Input() carForRent:CarDto

  constructor(private rentalService:RentalService,private toastrService: ToastrService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getRentalDetails();
    this.getCustomer();
    
  }
  // getcarId(carId:number){
  //   this.carId =carId;
  // }
  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentaldtos=response.data
    })
  }

  RentAdd(id:number){
    
    let newRental:Rental={
     carId: this.carForRent.carId,
      customerId:this.customerId,
      rentDate:this.rentDate,
      returnDate:this.returnDate  
    }
    
    this.rentalService.RentAdd(newRental).subscribe(res=>{
      this.toastrService.success("Kirala işlemi gerçekleşti ");
    })
  }

  getCustomer()
  {
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data
    });
  }
}
