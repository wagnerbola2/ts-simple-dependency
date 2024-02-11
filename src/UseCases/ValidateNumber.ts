import {IValidateNumber} from '../Interfaces/ValidateNumberInterface'
export class ValidateNumber implements IValidateNumber{
  private targetNumber: number;
  private isEven: boolean;
  constructor(_targetNumber: number){
    this.targetNumber = _targetNumber;
    this.isEven = this.targetNumber%2 === 0;
  }
  getTargetNumber(): number {
    return this.targetNumber;
  }
  getIsEven (): boolean{
    return this.isEven
  }
  getIsOdd (): boolean{
    return !this.isEven
  }
}