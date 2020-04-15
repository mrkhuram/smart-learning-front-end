import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routePaths";
import TopNavBar from "../../components/Common/TopNavBar";
import Footer from "../Common/Footer";

import Modal from "./Modal";



const BecomeFreelancerPage = props => {
  const [open, setOpen] = useState(false);
  const [modelType, setModelType] = useState("signIn");
  const [modelFor, setModelFor] = useState("register");


  const openModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleSwitchModal = type => {
    setModelType(type);
  };
  const handleModalFor = type => {
    setModelFor(type);
  };

  return (
    <>
      <Fragment>
        <TopNavBar />
        <Modal
          type={modelType}
          open={open}
          handleCloseModal={handleCloseModal}
          switchModal={handleSwitchModal}
          modelFor={modelFor}
          onClose={handleCloseModal}
        />

        <div className="become-freelancer">
          <div className="row" style={{ padding: "20px 36px" }}>
            <div className="col-12">
              <h3>Build Your Teaching Experience with us!</h3>
              <h5 className="text-muted">
                Join the world's largest online learning marketplace.
          </h5>
              <h6>Benefits</h6>
              <ul>
                <li>You will earn money when a student purchase your course</li>
                <li>
                  Get started with us and teach the students around the world.
            </li>
                <li>Share and polish your knowledge</li>
                <li>Become teacher and teach the student around the world.</li>
              </ul>
            </div>
            <div className="col-12">
              <h3 className="text-primary text-center">How it works</h3>
              <div className="row">
                <div className="col-12 col-md-4 how-it-works-col">
                  <h5>Create a Course</h5>
                  <p>
                    Teach what you love and what you want.It should be informative
              </p>
                  <img
                    className="img-fluid"
                    src="https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-10.jpg?scale.width=2000"
                    alt="abc"
                  />
                </div>
                <div className="col-12 col-md-4 how-it-works-col">
                  <h5>Create a Course</h5>
                  <p>
                    Teach what you love and what you want.It should be informative
              </p>
                  <img
                    className="img-fluid"
                    src="https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-10.jpg?scale.width=2000"
                    alt="def"
                  />
                </div>
                <div className="col-12 col-md-4 how-it-works-col">
                  <h5>Create a Course</h5>
                  <p>
                    Teach what you love and what you want.It should be informative
              </p>
                  <img
                    className="img-fluid"
                    src="https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-10.jpg?scale.width=2000"
                    alt="ghi"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <h3>So Are You Ready?</h3>
              <div className="become-freelancer-btns">
                {/* <Link to={routes.OfferCourse}> */}
                <button onClick={()=>{
                  openModal()
                  handleModalFor('instructor')
                  handleSwitchModal("Sign Up")
                }} >offer course</button>
                {/* </Link> */}
                {/* <Link to={routes.OfferService}> */}
                <button onClick={()=>{
                  openModal()
                  handleModalFor('freelancer')
                  handleSwitchModal("Sign Up")
                }} >offer service</button>
                {/* </Link> */}
                {/* <Link to={routes.RegisterAsInstitute}> */}
                <button onClick={()=>{
                  openModal()
                  handleModalFor('institute')
                  handleSwitchModal("Sign Up")
                }} >register Institute</button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    </>
  )
}
export default BecomeFreelancerPage;
