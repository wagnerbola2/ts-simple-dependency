import {IValidateNumber} from '../Interfaces/ValidateNumberInterface'
export class ValidateNumberController{
  private validadeNumber: IValidateNumber;
  constructor(validateNumber: IValidateNumber){
    this.validadeNumber = validateNumber;
  }
  validateNumber(){
    console.log(`O Numero ${this.validadeNumber.getTargetNumber()} é ${this.validadeNumber.getIsEven() ? "Par" : "Impar"}!`);
  }
}