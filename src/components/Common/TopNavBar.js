import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as routes from "../../constants/routePaths";
import "./scss/_navBar.scss";

const TopNavBar = (props) => {
  const { switchModal, openModal } = props;
  let history = useHistory(); 
  return (
    <nav className="custom-navbar navbar navbar-expand-lg navbar-light">
      <Link to={routes.Home} className="navbar-brand logo-text">
        <span>SMART</span> LEARNERS
      </Link>
      <button
        className="navbar-toggler"
        type="button" 
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className=" navbar-item searchbar-item" id="navbarSupportedContent">
          <form className="form-inline h-100 my-2 my-lg-0 ">
            <img className="search-icon" src={require("../../assets/icons/search.png")} alt="" />
            <input
              type="text"
              className=" navbar-search"
              placeholder="Find Services"
            />
            <div className="input-group-append h-100">
              <button className="btn search-btn h-100" type="button">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="navbar-item action-navbar-item">
          <button
            className="sign-btn mr-2"
            onClick={(e) => {
              e.preventDefault();
              history.push("/become-freelancer")
            }}
          >
            BECOME FREELANCER
          </button>
          <button
            className="sign-btn mr-2"
            onClick={() => {
              switchModal("signIn");
              openModal();
            }}
          >
            Sign In 
          </button>
          <button
            className="sign-btn"
            onClick={() => {
              switchModal("signUp");
              openModal();
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
};
export default TopNavBar;
