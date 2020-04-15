import React, { useState } from "react";
import "./_course_mangement.scss";
import Stepper from "react-stepper-horizontal";
import Select from "../../Common/Select";
import CustomUploadFile from "../common/CustomUploadFile.js/CustomUploadFile";
import OfferCourseTable from "./OfferCourseTable";
import AdminModal from "../common/AdminModal/AdminModal";
import { updateProfileInstructor } from '../../../redux/actions/instructor/profileUpdate'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import * as routes from '../../../constants/routePaths'



const CourseManagement = props => {
  const { setNewProfile } = props



  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [state, setState] = useState({
    institute: null,
    degrees: null,
    degree_name: null,
    degree_file: null,
    certification: null,
    certification_name: null,
    certification_file: null,
    about_us: null,
    job_title: null,
    other: null,
    otp: null
  })



  const handleNext = () => {
    return setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const closeModal = () => setModalOpen(false);

  const array = [
    "",
    "Your Courses",
    "Reviews",
    "Status",
    "Discounts",
    ""

  ]
  const dataArray = [
    {
      empty: '',
      name: "Intro to general mathematics",
      review: <>

        <Rating className="" value={5} readOnly />
      </>,
      based: 'Based on 200 students',
      status: "active",
      button: '',
      discounts: "Add Discount",
      more: <MoreVertIcon />
    },
    {
      empty: '',
      name: "Intro to general mathematics",
      review: <>

        <Rating className="" value={5} readOnly />
      </>,
      based: 'Based on 200 students',
      status: "suspend",
      button: '',
      discounts: "Add Discount",
      more: <MoreVertIcon />

    },
    {
      empty: '',

      name: "Intro to general mathematics",
      review: <>

        <Rating className="" value={5} readOnly />
      </>,
      based: 'Based on 200 students',
      status: "active",
      button: '',
      discounts: "Add Discount",
      more: <MoreVertIcon />

    }
  ]




  return (
    <div className="offer-course-cntnr">
      <div className="row">
        <div className="col-md-9">
          <h3 className="courseHeading">
            Course Management
          </h3>
          <p
            className="heading-texting"
          >Here you can manage your courses</p>
        </div>
        <div className="col-md-3">
          <Link to={routes.AddNewCourse}>
            <button className="add-course">
              add new course
          </button>
          </Link>
        </div>
      </div>

      <div className="row">
        <OfferCourseTable headings={array} data={dataArray} />
      </div>

    </div>
  );
};


let mapStateToProps = store => {

  return {
    userDetail: store.auth.userDetail
  }
}
let mapDispatchToProps = dispatch => {
  return {
    setNewProfile: (state, user) => {
      dispatch(updateProfileInstructor(state, user))
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CourseManagement))
