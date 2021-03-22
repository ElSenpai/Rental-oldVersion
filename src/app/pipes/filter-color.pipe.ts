import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/dto/carDto';
import { Color } from '../models/entities/color';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: Color[], filterColorText:string): Color[] {
    filterColorText = filterColorText?filterColorText.toLocaleLowerCase():""
    return filterColorText?value
    .filter((p:Color)=>p.colorName.toLocaleLowerCase().indexOf(filterColorText)!==-1)
    :value;
  }

}
