import React, { Fragment, useState, useEffect } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import "../scss/_adminLayout.scss";
import AdminTopNavbar from "../common/AdminNavBar/AdminTopNavBar";
import * as routes from "../../../constants/routePaths";
import OfferCoursePage from "../OfferCoursePage/OfferCoursePage";
import OfferServicePage from "../OfferServicePage/OfferServicePage";
import Footer from "../../Common/Footer";
import RegisterAsInstitutePage from "../RegisterAsInstitutePage/RegisterAsInstitutePage";
import home from "../adminAssets/home.png";
import user from "../adminAssets/user.png";
import plusCircle from "../adminAssets/plus-circle.png";
import stock from "../adminAssets/stock.png";
import CourseManagementsInstructor from './courseManagement/courseManagement'
import AddNewCourseInstructor from "./courseManagement/addNewCourse";
import ViewCourseDetailsInstructor from './courseManagement/viewCourseDetails'
 

const InstructorDeshboard = ({ match }) => {
  const [focused , setFocused] = useState("home");
 
  useEffect(() => {
    document.getElementById(focused).focus();
  },[focused])
  
  return (
    <Fragment>
      <AdminTopNavbar />
      <section className="admin-section d-flex">
        <ul className="links-list">
          <li>
            <Link to={routes.OfferCourseInstructor} id="home" onClick={() => setFocused("home")}>
                <img src={home} alt="home" />
            </Link>
          </li>
          <li>
            <Link to={routes.RegisterAsInstructor} id="user" onClick={() => setFocused("user")}>
                <img src={user} alt="user" title="user"/>
            </Link>
          </li>
          <li>
            <Link to={routes.CourseManagementInstructor} id="plus" onClick={() => setFocused("plus")}>
                <img src={plusCircle} alt="plus" />
            </Link>
          </li>
          <li>
            <Link to={routes.OfferServiceInstructor}>
                <img src={stock} alt="stock-icon"  id="stock" onClick={() => setFocused("stock")}/>
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Switch>
          <Route exact path={routes.CourseManagementInstructor} component={CourseManagementsInstructor} />
          <Route 
            exact
            path={routes.OfferServiceInstructor}
            component={OfferServicePage}
          />
          <Route
            exact
            path={routes.RegisterAsInstructor}
            component={RegisterAsInstitutePage}  
          />
          <Route
            exact
            path={routes.AddNewCourseInstructor}
            component={AddNewCourseInstructor}
          />
          <Route
            exact
            path={routes.ViewCourseDetailsInstructor}
            component={ViewCourseDetailsInstructor}
          />
          <Route path="*" component={() => <div>No page found</div>} />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  );
};
export default withRouter(InstructorDeshboard);

