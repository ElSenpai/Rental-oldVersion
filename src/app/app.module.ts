import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http'
import { CarimageComponent } from './components/carimage/carimage.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UseroperationclaimComponent } from './components/useroperationclaim/useroperationclaim.component';
import { OperationclaimComponent } from './components/operationclaim/operationclaim.component';
import { NaviComponent } from './components/navi/navi.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';

import{ToastrModule} from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';




@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    RentalComponent,
    ColorComponent,
    BrandComponent,
    UserComponent,
    CarimageComponent,
    CustomerComponent,
    UseroperationclaimComponent,
    OperationclaimComponent,
    NaviComponent,
    CardetailComponent,
    FilterCarPipe,
    FilterColorPipe,
    FilterBrandPipe,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
