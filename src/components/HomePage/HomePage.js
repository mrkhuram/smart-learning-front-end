import React, { useState } from "react";
import "./scss/_homepage.scss";
import TopNavBar from "../Common/TopNavBar";
import Carousel from "./Carousel";
import GeneralSlider from "../Common/GeneralSlider/GeneralSlider";
import Select from "../Common/Select";
import Footer from "../Common/Footer";
import Modal from "./Modal";
import ServicesSlider from "../Common/GeneralSlider/ServicesSlider";
import SelectLocation from "../Common/SelectLocation/SelectLocation";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [modelType, setModelType] = useState("signIn");

  const openModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleSwitchModal = type => {
    setModelType(type);
  };

  return (
    <div className="homepage container-fluid"> 
      <TopNavBar openModal={openModal} switchModal={handleSwitchModal} />
      <Modal 
        type={modelType}
        open={open}
        handleCloseModal={handleCloseModal}
        switchModal={handleSwitchModal}
      />
      <Carousel /> 
      <div className="carousel-bottom-text">
        <h5>Unlimited Courses ! Learn With Our Experts</h5>
      </div>
      <div className="dropdown-div">
        <Select category="Select Degree" />
        <Select category="Select Subject" />
        <input
          className="search-institute"
          type="text"
          placeholder="search institute"
        />
        <SelectLocation category="location" />
      </div>
      <div className="cards-group">
        <h6>New Courses</h6>
        <GeneralSlider />
      </div>
      <div className="cards-group">
        <h6>Trending Courses</h6>
        <GeneralSlider />
      </div>
      <div className="dropdown-div pt-0">
        <Select category="Services" />
        <Select category="Category" />
      </div>
      <div className="cards-group">
        <h6>Popular Services</h6>
        <ServicesSlider />
      </div>
      <Modal />
      <Footer />
    </div>
  );
};
export default HomePage;
