import React, { useState } from "react";
import "./_freelancer_dashboard.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import * as routes from "../../../constants/routePaths";
import { getAllCourse } from "../../../redux/actions/institute/courseDetailsAction";
import RunningOrdersTable from "./RunningOrdersTable";
import DashboardCard from "../common/DashoardCard/DashboardCard";

const FreelancerDashboard = props => {
  const { getCourses, userDetail } = props;

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
  });
  const [courses, setCourses] = useState({
    all: null
  });

  React.useEffect(() => {
    // if(!userDetail.allCourses){
    getCourses({ institute_id: userDetail.institute_id }, "institute");
    // }
  }, []);

  const array = [
    "",
    "Buyer Name & Order",
    "Start Date",
    "Total",
    "Status",
    "Time"
  ];
  const dataArray = [
    {
      empty: "",
      name: "Intro to general mathematics",
      review: (
        <>
          <Rating className="" value={5} readOnly />
        </>
      ),
      based: "Based on 200 students",
      status: "active",
      button: "",
      discounts: "Add Discount",
      more: <MoreVertIcon />
    },
    {
      empty: "",
      name: "Intro to general mathematics",
      review: (
        <>
          <Rating className="" value={5} readOnly />
        </>
      ),
      based: "Based on 200 students",
      status: "suspend",
      button: "",
      discounts: "Add Discount",
      more: <MoreVertIcon />
    },
    {
      empty: "",

      name: "Intro to general mathematics",
      review: (
        <>
          <Rating className="" value={5} readOnly />
        </>
      ),
      based: "Based on 200 students",
      status: "active",
      button: "",
      discounts: "Add Discount",
      more: <MoreVertIcon />
    }
  ];

  return (
    <div className="offer-course-cntnr">
      {/* <div className="row">
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
      </div> */}

      <div className="row">
        <DashboardCard
          type="total-students"
          title="total orders"
          count="150"
          // image={totalCoursesIcon}
        />
        <DashboardCard
          type="total-courses"
          title="completed orders"
          count="50"
          // image={totalCoursesIcon}
        />
        <DashboardCard
          type="total-sales"
          title="total earning"
          count="$1,150"
          // image={totalCoursesIcon}
        />
      </div>

      <div className="row">
        <RunningOrdersTable headings={array} data={courses.all} />
      </div>
    </div>
  );
};

let mapStateToProps = store => {
  return {
    userDetail: store.CourseReducer
  };
};
let mapDispatchToProps = dispatch => {
  return {
    getCourses: (state, user) => {
      dispatch(getAllCourse(state, user));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FreelancerDashboard)
);
