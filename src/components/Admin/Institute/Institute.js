import React, { Fragment, useState, useEffect, Suspense, lazy } from "react";
import { Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
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
import CourseManagement from './courseManagement/courseManagement'
import AddNewCourse from "./courseManagement/addNewCourse";
import ViewCourseDetails from './courseManagement/viewCourseDetails'
import PayFee from './Payment/PayFeePage'
import ProfileUnderReview from './ProUnderReview/ProfileUnderReview'
import DeshboardInstitute from './Deshboard/deshboardInstitute';
import ManageSales from './manageSales/manageSales'



const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector(state => state.auth.userDetail ? state.auth.userDetail.fee.status : 2);
  console.log(authenticated);

  return (
    <Route
      {...rest}
      render={props =>

        authenticated === 2
          // true
          ? (
            <Component {...props} />
          ) : (
            <Redirect to="/institute/review_profile" />
          )
      }
    />
  );
};

const InstituteDeshboard = ({ match }) => {
  const [focused, setFocused] = useState("home");
  const status = useSelector(state => state.auth.userDetail ? state.auth.userDetail.status : 3)
  const feeStatus = useSelector(state => state.auth.userDetail ? state.auth.userDetail.fee.status : null)

  useEffect(() => {
    document.getElementById(focused).focus();
  }, [focused])

  return (
    <Fragment>
      <AdminTopNavbar />

      <section className="admin-section d-flex">
        <ul className="links-list">
          <li>
            <Link
              to={routes.InstituteHome}
              id="home" onClick={() => setFocused("home")}>
              <img src={home} alt="home" title="home" />
            </Link>
          </li>
          <li>

            <Link
              to={

                status === 1 ? //pending
                  routes.RegisterAsInstitute :
                  status === 2 ? // verified :
                    routes.PayFee :
                    status === 3 || status === 4 ? // 3-> active , 4-> inActive 
                      // routes.EditProfile :
                      // status === 5 ? //denied
                      //   routes.Denied : 
                      routes.RegisterAsInstitute
                      :
                      '#'

              }

              id="user" onClick={() => setFocused("user")}>
              <img src={user} alt="user" title="user" />
            </Link>
          </li>
          <li>
            <Link to={routes.CourseManagementInstitute} id="plus" onClick={() => setFocused("plus")}>
              <img src={plusCircle} alt="plus" />
            </Link>
          </li>
          <li>
            <Link to={routes.SalesManagement}>
              <img src={stock} alt="stock-icon" id="stock" onClick={() => setFocused("stock")} />
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Suspense >
          <Switch>
            <PrivateRoute 
            exact 
            path={routes.InstituteHome} 
            component={DeshboardInstitute} 
            />
            <Route
              exact
              path={routes.ProfileUnderReview}
              component={ProfileUnderReview}
            />
            <PrivateRoute
              exact
              path={routes.CourseManagementInstitute}
              component={CourseManagement}
            />
            <PrivateRoute
              exact
              path={routes.OfferCourseInstitute}
              component={OfferCoursePage}
            />

            <PrivateRoute
              exact
              path={routes.SalesManagement}
              component={ManageSales}
            />
            <Route
              exact
              path={routes.RegisterAsInstitute}
              component={RegisterAsInstitutePage}
            />
            <PrivateRoute
              exact
              path={routes.AddNewCourseInstitute}
              component={AddNewCourse}
            />
            <PrivateRoute
              exact
              path={routes.ViewCourseDetailsInstitute}
              component={ViewCourseDetails}
            />
            <Route
              exact
              path={routes.PayFee}
              component={PayFee}
            />
            <Route
              path="*"
              component={() => <div>No page found</div>}
            />
          </Switch>
        </Suspense>
      </section>
      <Footer />
    </Fragment >
  );
};
export default withRouter(InstituteDeshboard);

