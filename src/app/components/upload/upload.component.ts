import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RentalDto } from 'src/app/models/dto/rentalDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  rentaldtos:RentalDto[]=[];
  constructor(private rentalService:RentalService,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getRentalDetails()
  }
  
  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentaldtos=response.data
    })
  }
}
