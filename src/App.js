import React, {useEffect} from "react";
import "./assets/scss/style.scss";
import { Router, Route, Switch,withRouter } from "react-router-dom";
import * as routes from "./constants/routePaths";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/Common/NotFoundPage";
import CourseDetailPage from "./components/CourseDetail/CourseDetailPage";
import UserProfile from "./components/UserPage/UserPage";
import ServicePage from "./components/ServicePage/ServicePage";
import BecomeFreelancerPage from "./components/BecomeFreeLancerPage/BecomeFreelancerPage";
import AdminLayout from "./components/Admin/AdminLayout";
// import CourseManagements from "./components/Admin/courseManagement/courseManagement";
import history from './components/Common/history';
import { connect } from 'react-redux';
// import {loadProfile } from './redux/actions/auth'



// import './App.css';

const App = (props) => { 

  useEffect(()=>{
    // props.load()
  })
  


  return (  
    <Router history={history}> 
      <Switch>
        <Route exact path={routes.Home} component={HomePage} />
        <Route exact path={routes.CourseDetail} component={CourseDetailPage} />
        <Route exact path={routes.User} component={UserProfile} />
        <Route exact path={routes.Service} component={ServicePage} />
        <Route exact path={routes.BecomeFreelancer} component={BecomeFreelancerPage} />
        {/* <Route exact path={routes.CourseManagement} component={CourseManagements} /> */}
        <Route path={routes.Admin} component={AdminLayout} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

let mapStateToProps = store => {

  return {
    userDetail: store.auth.userDetail
  }
}
let mapDispatchToProps = dispatch => {
  return {
    load: ()=>{
      // dispatch(loadProfile())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);