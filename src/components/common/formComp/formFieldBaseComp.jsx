import {Component} from "react";
import {error as Error} from "./formFieldErrorBaseComp";
// import {FormFieldBaseModel} from "../formModel/FormFieldBaseModel";
import {validateField} from "../validations/validateFormFields";

export class FormFieldBaseComp extends Component{

  constructor(props){
    super(props);
    this.state = {
      classNames: "someClass another thirdOne"
    };
  }

  render(){
    let props = this.props;
    let state = this.state;
    return(
      <div className={(props.classNames) ? props.classNames : state.classNames}>
        <div className="">
          <label className="">{props.model.label}</label>
          <input
            ref={props.model.name}
            type={props.model.type}
            required={props.model.isRequired}
            name={props.model.name}
            onChange={props.onChange}
            value={props.model.value}
            className=""
            placeholder={props.model.placeHolder} />
          <Error value={validateField(props.model).message} />
        </div>
      </div>
    );
  }
}

