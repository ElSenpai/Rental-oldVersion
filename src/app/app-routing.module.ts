import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  
  {path:"",component:UploadComponent},
  {path:"cardetails",component:CardetailComponent},
  
  {path:"cardetails/:brandId/:colorId",component:CardetailComponent},
  {path:"login",component:LoginComponent},
  
  {path:"rental",component:RentalComponent},
  {path:"car/add",component:CarAddComponent},
  {path:"car/update",component:CarUpdateComponent},
  {path:"color/add",component:ColorAddComponent},
  {path:"color/update",component:ColorUpdateComponent},
  {path:"brand/add",component:BrandAddComponent},
  {path:"brand/update",component:BrandUpdateComponent},

  {path:"carimages/car/:carId",component:CarimageComponent},
  {path:"cardetails/color/:colorId/carimages/car/:carId",component:CarimageComponent},
  {path:"cardetails/brand/:brandId/carimages/car/:carId",component:CarimageComponent},
  //{path:"cardetails/brand/:brandId/color/:colorId",component:CardetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
