import "isomorphic-fetch";
import {get,post} from "../utils/nioUtils";
import {RegisterStepOne} from "../components/user/register/registerStepOneContainer";
import {system as S} from "../constants/system";
import {types as T} from "../constants/types";

export  const updateRegisterStepOne = (url, userName, password) => (dispatch) => {
  let postBody = {
    "RegisterStepOneUrl":url,
    "RegisterStepOneUser":userName,
    "RegisterStepOneUserPass":password
  };
  post(S.BK.API.REGISTER_STEP_ONE_UPDATE,postBody).then(() => {
    dispatch ({
      type: T.USER.REGISTER_STEP_ONE.UPDATE,
      payload: {url, userName, password}
    });
  })
    .catch(() => {
    // dispatch(addWiseMessage(error.message))
    // dispatch({type: T.CANCEL_FETCHING}) //TODO
    });
};
export const addWiseMessage = (type, message, heading="") => (dispatch) => {
  dispatch({
    type: T.WISE_MESSAGE.ADD,
    payload: {type,message,heading} // same as {type:type,message:message,heading:heading} in es6
  });
};
export const clearWiseMessage = (index) => (dispatch) => {
  dispatch({
    type: T.WISE_MESSAGE.CLEAR,
    payload: index
  });
};
export const viewRegisterStepOne = () => (dispatch) => {
  let registerStepOne = new RegisterStepOne();
  dispatch(addWiseMessage(S.WISE_MESSAGE.ERROR,
                          "newErrorMessage",
                          "Custom Heading"));
  dispatch(addWiseMessage(S.WISE_MESSAGE.SUCCESS,
                          "newSuccessMessage"));
  dispatch(addWiseMessage(S.WISE_MESSAGE.INFO,
                          "newInfoMessage"));
  dispatch(addWiseMessage(S.WISE_MESSAGE.WARNING,
                          "newWarningMessage","Custom Warn Heading here"));
  // dispatch(addWiseMessage(`testError2`))
  // dispatch(addWiseMessage(`testError3`))
  registerStepOne.fetching = true;
  dispatch({
    type: T.USER.REGISTER_STEP_ONE.FETCHING,
    payload: registerStepOne
  });

  get(S.BK.API.REGISTER_STEP_ONE_VIEW).then(({body}) => {

    registerStepOne.url = body.data.theUrlName;
    registerStepOne.userName = body.data.theUserName;

    dispatch ({
      type: T.USER.REGISTER_STEP_ONE.VIEW,
      payload: registerStepOne
    });
  })
    .catch(() => {
    // dispatch(addWiseMessage(error.message))
    // dispatch({type: T.CANCEL_FETCHING}) //TODO
    });
};

