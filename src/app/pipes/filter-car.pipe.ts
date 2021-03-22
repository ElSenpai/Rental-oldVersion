import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/dto/carDto';

@Pipe({
  name: 'filterCar'
})
export class FilterCarPipe implements PipeTransform {

  transform(value: CarDto[], filterText:string): CarDto[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:CarDto)=>p.brandModel.toLocaleLowerCase().indexOf(filterText)!==-1)
    
    :value;
  }

}
