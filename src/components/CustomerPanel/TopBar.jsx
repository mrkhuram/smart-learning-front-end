import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as routes from "../../constants/routePaths";
import "./scss/_navBar.scss";
import Modal from "../HomePage/Modal";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const shopingCart = {

    color: '#30B484',
    margin: '0px 10px'
}

const downcaret = {

    color: '#30B484',
    margin: '0px 10px',
    position: 'relative',
    top: 4
}


const TopNavBar = (props) => {
    // const { switchModal } = props;
    let history = useHistory();
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
        <nav className="custom-navbar navbar navbar-expand-lg navbar-light">


            {/* <Modal
        type={modelType}
        open={open}
        handleCloseModal={handleCloseModal}
        switchModal={handleSwitchModal}
      /> */}
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
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
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
                        Become Partners
                    </button>
                    <ShoppingCartOutlinedIcon style={shopingCart} />

                    <div className="user-wrapper">
                        <div className="user-img-wrapper">
                            <img
                                src="https://www.tx2.fr/wp-content/uploads/2018/11/avatar_jeune_homme_lunettes_developpeur_geek.jpg"
                                alt=""
                                className="user-img"
                            />
                        </div>
                        <div className="user-name">
                            John Doe
                        </div>
                        <div className="caret">
                            <ExpandMoreOutlinedIcon style={downcaret}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default TopNavBar;
