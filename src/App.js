import React, { useEffect } from "react";
import "./assets/scss/style.scss";
import { Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import * as routes from "./constants/routePaths";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/Common/NotFoundPage";
import CourseDetailPage from "./components/CourseDetail/CourseDetailPage";
import UserProfile from "./components/UserPage/UserPage";
import ServicePage from "./components/ServicePage/ServicePage";
import BecomeFreelancerPage from "./components/BecomeFreeLancerPage/BecomeFreelancerPage";
import Institute from "./components/Admin/Institute/Institute";
import Instructor from "./components/Admin/Instructor/Instructor";

// import CourseManagements from "./components/Admin/courseManagement/courseManagement";
import history from './components/Common/history';
import { connect } from 'react-redux';
// import {loadProfile } from './redux/actions/auth' 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import './App.css';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector(state => state.auth.authenticated);
  console.log(authenticated);


  return (

    <Route
      {...rest}
      render={props =>

        authenticated === true
          // true
          ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
      }
    />

  );
};

const App = (props) => {

  useEffect(() => {
    // props.load()
  })



  return (
    <Router history={history}>
      <ToastContainer 
      autoClose={2000}
      />
      <Switch>
        <Route exact path={routes.Home} component={HomePage} />
        <Route exact path={routes.CourseDetail} component={CourseDetailPage} />
        <Route exact path={routes.User} component={UserProfile} />
        <Route exact path={routes.Service} component={ServicePage} />
        <Route exact path={routes.BecomeFreelancer} component={BecomeFreelancerPage} />
        {/* <Route exact path={routes.CourseManagement} component={CourseManagements} /> */}
        <PrivateRoute path={routes.Institute} component={Institute} />
        <PrivateRoute path={routes.Instructor} component={Instructor} />

        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

let mapStateToProps = store => {
  console.log(store);
  
  return {
    userDetail: store.auth.userDetail
  }
}
let mapDispatchToProps = dispatch => {
  return {
    load: () => {
      // dispatch(loadProfile())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);