import {ValidateNumberController} from './Controllers/ValidateNumberController'
import {ValidateNumber} from './UseCases/ValidateNumber'

const targetNumber: number = 3;
const validadeNumber = new ValidateNumber(targetNumber);
const validadeNumberController = new ValidateNumberController(validadeNumber)

validadeNumberController.validateNumber();
