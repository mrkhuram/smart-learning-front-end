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
import SearchIcon from '@material-ui/icons/Search';
import CourseCategories from './categories/categories';
import Events from './Events/events'; 
import { Link } from "react-router-dom";
import * as routes from '../../constants/routePaths'

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
        <Link to={routes.SearchPage} className="link">
        <button
          className="search-institute-button"
          type="text"
          > Search <SearchIcon className="search-icon" /></button>
          </Link>
      </div>

      <div className="cards-group course-category row">
        <div className="col-8">
          <p className="heading">Courses Category</p>
        </div>
        <div className="col-4">
        <Link to={routes.AllNewCourses} className="link">
          <p className="see-all">See All</p>
        </Link>
        </div>

        <CourseCategories />
      </div>
      <div className="cards-group row">

        <div className="col-8">
          <p className="heading-trending">Trending Courses</p>
        </div>
        <div className="col-4">
          <Link to={routes.AllTrendingCourses} className='link'>
          <p className="see-all">See All</p>
          </Link>
        </div>
        <GeneralSlider />
      </div>
      {/* <div className="cards-group row">

        <div className="col-8">
          <p className="heading-trending">New Courses</p>
        </div>
        <div className="col-4">
          <Link to={routes.AllTrendingCourses} className='link'>
          <p className="see-all">See All</p>
          </Link>
        </div>
        <GeneralSlider />
      </div> */}
      <div className="dropdown-div pt-0 selector-service-category">
        <Select category="Select Service" />
        <Select category="Select Category" />
      </div>
      <div className="cards-group row">

        <div className="col-8">
          <p className="heading-trending">Services</p>
        </div>
        <div className="col-4">
          <Link
          to={routes.AllServices}
          className="link"
          >
          <p className="see-all">See All</p>
          </Link>
        </div>
        <ServicesSlider />
      </div>

      <div className="cards-group row">

        <div className="col-8">
          <p className="heading-trending">Events</p>
        </div>
        <div className="col-4">
          <Link
          to={routes.AllEvents}
          className="link"
          >
          <p className="see-all">See All</p>
          </Link>
        </div>
        <Events /> 
      </div>
      <Modal />
      <Footer /> 
    </div>
  );
};
export default HomePage;
