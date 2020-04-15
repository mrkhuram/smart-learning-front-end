import React from "react";
import "./scss/_select.scss";

const Select = ({ category,onChangeHandler,type }) => (
  <select className="custom-select" onChange={onChangeHandler} name={type}>
    <option>{category}</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
); 
export default Select;
