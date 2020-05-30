import React, { useState } from "react";
import "./_withdraw.scss";

import WithdrawTable from "./withdrawTable";
import { updateProfileInstructor } from '../../../../../redux/actions/instructor/profileUpdate'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import * as routes from '../../../../../constants/routePaths'
import { getAllCourse } from '../../../../../redux/actions/institute/courseDetailsAction'


const Withdraw = props => {
  const { getCourses, userDetail } = props

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
  const [courses, setCourses] = useState({
    all: null
  });


  React.useEffect(() => {
    // if(!userDetail.allCourses){
    getCourses({ institute_id: userDetail.institute_id }, "institute")
    // }
  }, [])


  const array = [
    "Date",
    "Name",
    "Bank Detail",
    "Status",
    "Amount"

  ]
  const dataArray = [
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "Local Bank Account",
      status: "pending",
      amount: "$40"
    },
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "PayPal",
      status: "pending",
      amount: "$60"
    },
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "Google pay Account",
      status: "sent",
      amount: "$40"
    },
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "Local Bank Account",
      status: "pending",
      amount: "$60"
    },
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "Local Bank Account",
      status: "sent",
      amount: "$40"
    },
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "Payoneer",
      status: "sent",
      amount: "$40"
    },

  ]

 const addBankAcc = e =>{
  fetch("/get-oauth-link", {
    method: "GET", 
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.url) {
        window.location = data.url;
        console.log(data.url);
        
      } else {
        // elmButton.removeAttribute("disabled");
        // elmButton.textContent = "<Something went wrong>";
        console.log("data", data);
      }
    });
   
 }


  return (
    <div className="withdrawal-wrapper-institute">
      <div className="row">
        <div className="col-md-7">
          <p className="courseHeading">
            Withdraw States
          </p>
          <p
            className="heading-texting"
          >Minimum Withdrawal Amount  <span>$100 OR ADU 500</span>   </p>
        </div>
        <div className="col-md-5">

          <p className="acc-balance">
            Account Balance: <span>adu 625</span>
          </p>
        </div>
      </div>

      <div className="row top-sales-details-wrapper">
        <div className="col-9">
          <div className="user-bank-details">
            <div className="sub-heading bank-name ">
              <p className="title-bank">Bank Name</p>
                Emirates NBD
              </div>
            <div className="sub-heading acc-holder">
              <p className="title-bank">Account Holder's Name</p>
                Ahsan Saleem
              </div>
            <div className="sub-heading acc-type">
              <p className="title-bank">Account Type</p>
                Checking Account
              </div>
            <div className="sub-heading acc-number">
              <p className="title-bank">Bank Account Number</p>
                12********34
              </div>
            <div className="sub-heading routing-number">
              <p className="title-bank">Routing Number</p>
                ******02
              </div>
            <div className="withdraw-amount">
              <p>withdraw</p>
              <select name="" id="" className="select-amount"  >

                <option value="select topic">500 Adu</option>
                <option value="select topic">1000 Adu</option>
                <option value="select topic">1500 Adu</option>
                <option value="select topic">2000 Adu</option>


              </select>
            </div>
            <div className="send-request">
              <button className="request-bt">
                Send Request
              </button>
            </div>

          </div>
        </div>

        <div className="col-3">
          <div className="total-sale-wrapper" title="Add Bank Account" onClick={addBankAcc}>

            <img src={require('../../../../../assets/Images/bank-logo.png')} alt="" className="bank-logo" />
            <p className="sale-amount">
              Add new
              <br />
              bank account</p>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-10 withdraw-transitions">
          Withdraw Transitions
        </div>
        
        
        <div className="col-2">
          <select name="" id="" className="select-month-transaction"  >

            <option value="select topic">Last Month</option>
            <option value="select topic">1</option>
            <option value="select topic">2</option>
            <option value="select topic">3</option>


          </select>
        </div>
      </div>

      <div className="row">
        <WithdrawTable headings={array} data={dataArray} />
      </div>

    </div>
  );
};


let mapStateToProps = store => {

  return {
    userDetail: store.CourseReducer
  }
}
let mapDispatchToProps = dispatch => {
  return {
    getCourses: (state, user) => {
      dispatch(getAllCourse(state, user))
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Withdraw))
