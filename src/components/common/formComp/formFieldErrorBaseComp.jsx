
export const error = (props) => {
  let defaultValue = "";
  return (
    <span className="error" >
      {props.value ? props.value: defaultValue}
    </span>
  );
};