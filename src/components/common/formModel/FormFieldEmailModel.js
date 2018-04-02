import {FormFieldBaseModel} from "./FormFieldBaseModel";
export class FormFieldEmailBaseModel extends FormFieldBaseModel{

  constructor(){
    super();
  }

  name = "userName";
  type = "text";
  label = "Login";
  placeHolder = "Enter Email";
  isFormateRequired = true;
  regex =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+)+\.(([a-zA-Z0-9])+)$/;
}
