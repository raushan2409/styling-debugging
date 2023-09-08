import React, {useRef,useImperativeHandle} from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props,ref) => {
  const inputRef = useRef();

// for component initially render we use useEffect, we will run it once when the component initially render
// useEffect(()=>{
//   inputRef.current.focus(); //the focus method is a method is available on the input dom object which we got access through this ref
   // this will focus on temporarily on  password. focus is a method that not come to react that build in to js
// },[]) my goal is for ex have own method here in the input component let's say activate
const activate = ()=>{
  inputRef.current.focus()  // this function is called from outside 
}
// useImperativeHandle is a hook which allows us to use this component for functionality from inside this component imperatively.simply means not through the regular state props management not by controlling the component through state in the parent component 
useImperativeHandle(ref,()=>{
  return{
    // a function that should return an object and that object will contain all the data u will we able to use outside 
    focus:activate
  }
})
  return (<div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
    ref={inputRef}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>

)

});

export default Input;
