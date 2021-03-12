import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
