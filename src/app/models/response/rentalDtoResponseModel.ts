import { RentalDto } from "../dto/rentalDto";
import { ResponseModel } from "./responseModel";

export interface RentalDtoResponseModel extends ResponseModel{
    data:RentalDto[]
    
}