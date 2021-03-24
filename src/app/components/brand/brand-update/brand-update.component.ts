import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private brandService:BrandService) { }

  ngOnInit(): void {
    this.createBrandUpdateForm();
  }
  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
      id:["",Validators.required],
     brandName:["",Validators.required]
    })
  }

  update() {
    if (this.brandUpdateForm.valid) {
      let carModel = Object.assign({}, this.brandUpdateForm.value)
      this.brandService.update(carModel).subscribe(data => {
        this.toastrService.success("Brand güncellendi", "Başarılı")
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası")

          }
        }
      })
    } else {
      this.toastrService.error("Form eksik", "Dikkat")
    }

  }

}
