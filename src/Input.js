import React from "react";
const Input = (props) => {
  const { name ,onChange} = props;
  return  (<input type="text" id="fname" name="fname" onChange={onChange}/>)
};
export default Input;
