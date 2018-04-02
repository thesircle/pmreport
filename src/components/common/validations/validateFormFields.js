/*
 * We can use validatejs, ajv, joi later
 */
export const validateField = (props) => {
  let result = true;//being permissive
  let message = "";

  if(props.isRequired && props.value === ""){
    message += " not be empty";
    result= false;
  }

  if(props.isFormateRequired && !props.regex.test(props.value)){
    message += `${(result? " be": " &")} in correct format`;
    result= false;
  }

  //todo password, max/min length etc

  let preMessage = result? "": `${props.label} should`;
  return {result: result,message: preMessage + message};
};

//