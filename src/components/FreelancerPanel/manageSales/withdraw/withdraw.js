import React, { useState } from "react";
import "./_withdraw.scss";

import WithdrawTable from "./withdrawTable";
import { updateProfileInstructor } from '../../../../redux/actions/instructor/profileUpdate'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
// import * as routes from '../../../constants/routePaths'
import { getAllCourse } from '../../../../redux/actions/institute/courseDetailsAction'
import CreditCardIcon from '@material-ui/icons/CreditCard';

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




  return (
    <div className="withdrawal-wrapper">
      <div className="row">
        <div className="col-md-7">
          <p className="courseHeading">
            Withdraw Status
          </p>
          <p
            className="heading-texting"
          >Minimum Withdrawal Amount  <span>$100 OR ADU 500</span>   </p>
        </div>

      </div>

     
      <div className="row top-sales-details-wrapper">
        <div className="col-3">
          <div className="total-sale-wrapper">
            {/* <p className="sale-heading">Total sale</p>
            <p className="sale-amount">$146</p> */}
            <img src={require('../../assets/bank-transfer.png')} alt="" className='bank-transfer'/>
          </div>
        </div>
        <div className="col-3">
          <div className="total-sale-wrapper">
            {/* <p className="sale-heading">Pending amount</p>
            <p className="sale-amount">$46</p> */}
           
            <p className="credit-card-text">  <CreditCardIcon className="credit-card"/> <br/> <span>
              Credit Card
              </span> 
              </p>

          </div>
        </div>
        <div className="col-3">
          <div className="total-sale-wrapper">
          <img src={require('../../assets/paypal.png')} alt="" className='bank-paypal'/>
            
          </div>
        </div>
        <div className="col-3">
          <div className="total-sale-wrapper">
          <img src={require('../../assets/gpay.png')} alt="" className='bank-gpay'/>

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
