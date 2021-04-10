import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';


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
import {ButtonModule} from 'primeng/button';
import{ToastrModule} from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';
import { UploadComponent } from './components/upload/upload.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';





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
    UploadComponent,
    CarAddComponent,
    CarUpdateComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    LoginComponent,
    RegisterComponent,
   
    
    
    
    

  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    ReactiveFormsModule,
    MenubarModule,
   
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
