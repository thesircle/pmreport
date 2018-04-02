import {Component} from "react";
import {connect}    from "react-redux";
import {FormFieldBaseComp} from "../../common/formComp/formFieldBaseComp";
import {RegisterStepOneFormModel} from "./registerStepOneFormModel";
import {updateRegisterStepOne,viewRegisterStepOne} from "./../../../actions/actions";
import {validateField} from "../../common/validations/validateFormFields";

export class RegisterStepOne {
  url;
  userName;
  password;
  fetching;
  transmitting;
}


export class RegisterStepOneComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      RegisterStepOne: new RegisterStepOne(),
      RegisterStepOneFormModel: new RegisterStepOneFormModel(),
      disableForm: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e){
    const target= e.target;
    const inputValue = target.value;
    const fieldName = target.name;
    let state=this.state;
    // state.RegisterStepOneFormModel[fieldObjectName].value = inputValue //{M.A}: bad approach
    //TODO: {M.A}: use a generic utils stateless function
    // that all other componenets can use to set state:
    this.updateFormFieldInState(state.RegisterStepOneFormModel[fieldName].name, inputValue);

    let disableForm = false;
    // //TODO: {M.A}: has bug, type last char and backspace, see submit button
    // for ( let field  in state.RegisterStepOneFormModel){
    //   // if (Object.hasOwnProperty(field)) {
    //     if(!validateField(state.RegisterStepOneFormModel[field]).result){
    //       disableForm = true;
    //       break;// break if even on field failed check
    //     }
    //   // }
    // }

    // //TODO: {M.A}: has bug, type last char and backspace, see submit button
    Object.keys(state.RegisterStepOneFormModel).forEach((key) => {
      if(!validateField( state.RegisterStepOneFormModel[key] ).result){
        disableForm = true;
        return;// break if even on field failed check
      }
    });
    this.setState({disableForm: disableForm});
  }

  handleSubmit(e) {
    let state = this.state;
    e.preventDefault();
    this.props.onUpdateRegisterStepOne({
      url: state.RegisterStepOneFormModel.url.value,
      userName: state.RegisterStepOneFormModel.userName.value,
      password: state.RegisterStepOneFormModel.password.value
    });
  }

  changeRouteState(e){
    const target= e.target;
    parent.postMessage({
      name:"route",
      route: target.innerText
    },"*");
  }

  /*
   * formField: string value of form model field name
   * value: value to be assigned to that field.value
   */
  updateFormFieldInState(formField, value) {
    this.setState((prevState) => (
      {
        RegisterStepOneFormModel: Object.assign({},
                                       prevState.RegisterStepOneFormModel,
                                       {[formField]: Object.assign({}, prevState.RegisterStepOneFormModel[formField], {value})}
        )

      }
      // {
      //   RegisterStepOneFormModel:
      //   { ...state.RegisterStepOneFormModel, [formField]:
      //     { ...state.RegisterStepOneFormModel[formField], value: value }
      //   }
      // }
    ));
  }

  //TODO: {M.A}: can we make more concise code and also not loose efficiency and performance?
  componentWillReceiveProps(nextProps){

    let state = this.state;
    this.updateFormFieldInState(state.RegisterStepOneFormModel.url.name, nextProps.Resource.url);
    this.updateFormFieldInState(state.RegisterStepOneFormModel.userName.name, nextProps.Resource.userName);
    this.updateFormFieldInState(state.RegisterStepOneFormModel.password.name, nextProps.Resource.password);
    this.setState((prevState) => ({
      RegisterStepOne: Object.assign({}, prevState.Resource, {fetching: nextProps.Resource.fetching})
    }));
    this.setState((prevState) => ({
      RegisterStepOne: Object.assign({}, prevState.Resource, {transmitting: nextProps.Resource.transmitting})
    }));

  }

  componentDidMount(){
    this.props.onViewRegisterStepOne();
  }

  render(){
    let state=this.state;
    return(
      <div>
        { (state.Resource.fetching) ? "fetching": "not fetching" }
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <form ref="registerStepOneForm" noValidate >
                  <div className="row clearfix">
                    <FormFieldBaseComp
                      model = {state.RegisterStepOneFormModel.url}
                      classNames="someClass anotherClass"
                      onChange={(e) => this.handleChange(e) }
                    />
                  </div>

                  <div className="row clearfix">
                    <div>&nbsp;</div>
                    <FormFieldBaseComp
                      model = {state.RegisterStepOneFormModel.userName}
                      onChange={(e) => this.handleChange(e) }
                      classNames={null}
                    />
                    {/* //TODO: classNames should be optional.*/}

                    <FormFieldBaseComp
                      model = {state.RegisterStepOneFormModel.password}
                      onChange={(e) => this.handleChange(e)}
                      classNames={null}
                    />
                    {/* //TODO: classNames should be optional.*/}

                    <button onClick={this.handleSubmit} >Update</button>
                  </div>
                </form>

                <div className="">
                  <div className="">
                    <div role="alert" className="alert-wrapper alr"
                      id="lblFailed" >
                      <button className="close"></button>
                      <strong>Invalid Credentials</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  Resource: state.Resource
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateRegisterStepOne(url, userName, password) {
    dispatch(
      updateRegisterStepOne(url, userName, password)
    );
  },
  onViewRegisterStepOne() {
    dispatch(
      viewRegisterStepOne()
    );
  }
});

export const registerStepOneContainer =
  connect   (mapStateToProps, mapDispatchToProps)(RegisterStepOneComp);
  // connect<IPropsForContainer, void, IProps & RouteComponentProps<{}>>(mapStateToProps, mapDispatchToProps)(RegisterStepOneComp);