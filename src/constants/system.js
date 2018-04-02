import * as configImport from "../../../config/config.json";
const config = configImport[configImport.currentEnv];

export const system = {
  BK : {
    FORWARD_SLASH:"/",
    URL : {
      PROTOCOL:`${config.BackendProtocol}`,
      HOST: `${config.BackendHost}:`,
      PORT: `${config.BackendPort}/`
    },
    RESPONSE:{
      MESSAGES:{
        NON_AUTHORIZED : "Un-authorized access"
      }
    },
    API: {
      REGISTER_STEP_ONE_VIEW: "registerStepOne/",
      REGISTER_STEP_ONE_UPDATE: "something/"
    }
  },
  WISE_MESSAGE:{
    WARNING: "wiseMessageWarning",
    WARNING_HEADING: "Warning!",
    INFO: "wiseMessageInfo",
    INFO_HEADING: "Info!",
    SUCCESS: "wiseMessageSuccess",
    SUCCESS_HEADING: "Success!",
    ERROR: "wiseMessageError",
    ERROR_HEADING: "Error!",

  }
};