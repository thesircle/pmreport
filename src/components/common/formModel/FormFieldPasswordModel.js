import {FormFieldBaseModel} from "./FormFieldBaseModel";
export class FormFieldPasswordBaseModel extends FormFieldBaseModel{

  constructor(){
    super();
  }

  name = "password";
  type = "password";
  label = "Password";
  placeHolder = "Enter Password";
  regex=new RegExp("");
}
