import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",component:CardetailComponent},
  {path:"cardetails",component:CardetailComponent},
  
  {path:"cardetails/:brandId/:colorId",component:CardetailComponent},
  {path:"rental",component:RentalComponent},
  
  
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
