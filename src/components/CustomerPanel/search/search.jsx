import React, { useState } from "react";
import "./_search.scss";
import Select from "../../Common/Select";
import SelectLocation from "../../Common/SelectLocation/SelectLocation"
// import TopNavBar from "../Common/TopNavBar";
import SearchIcon from '@material-ui/icons/Search';
// import Footer from "../Common/Footer"
import Courses from './Course/courses'

const MyCourses = () => {
  const [open, setOpen] = useState(false);
  const [modelType, setModelType] = useState("signIn");

  const openModal = () => {
    setOpen(true);
  };

  const handleSwitchModal = type => {
    setModelType(type);
  };

  return (
    <div className="search-page container-fluid">

      <div className="dropdown-div">
        <Select category="Select Degree" />
        <Select category="Select Subject" />
        <input
          className="search-institute"
          type="text"
          placeholder="search institute"
        />
        <SelectLocation category="location" />
        <button
          className="search-institute-button"
          type="text"
        > Search <SearchIcon className="search-icon" /></button>
      </div>
      <div className="buttons-buy">

        <div className="my-courses">
          My Courses
        </div>
        {/* <div className="buy-courses"> */}
          <button className="btn-buy">
            Buy New Courses
        </button>
        {/* </div> */}
      </div>
      <Courses />

    </div>
  );
};
export default MyCourses;
