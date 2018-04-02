import {combineReducers} from "redux";
import {types as T} from "../constants/types";

export const RegisterStepOne = (state={}, action) => { //tslint:disable-line
  switch(action.type) {
  case T.USER.REGISTER_STEP_ONE.VIEW
    || T.USER.REGISTER_STEP_ONE.UPDATE
    || T.USER.REGISTER_STEP_ONE.FETCHING
    || T.USER.REGISTER_STEP_ONE.TRANSMITTING :
    //returning the same for all so using same case..
    return Object.assign({}, state, action.payload);
  default:
    return state;
  }
};
export const WiseMessages = (state=[], action) => {//tslint:disable-line
  switch(action.type) {
  case T.WISE_MESSAGE.ADD :
    return [
      ...state,
      action.payload
    ] ;
  case T.WISE_MESSAGE.CLEAR :
    return state.filter((i) => i !== action.payload);
  default:
    return state;
  }
};

export const appReducer=combineReducers({
  RegisterStepOne: RegisterStepOne,
  WiseMessages,
  state: (state = {}) => state //??
});

//