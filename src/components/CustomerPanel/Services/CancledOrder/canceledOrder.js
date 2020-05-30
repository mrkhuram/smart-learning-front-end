import React, { useState } from "react";
import "./_viewOrder.scss";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FlipClock from 'x-react-flipclock'

import CheckIcon from '@material-ui/icons/Check';



const activeIcon = {
  position: 'absolute',
  top: '10px',
  left: '-20px'
}
const ViewRunningOrder = props => {
  const { userDetail } = props

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
    // getCourses({ institute_id: userDetail.institute_id }, "institute")
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
    <div className="cancled-order-view-wrapper">
      <div className="row">
        <div className="col-12 completed-header">
          <img src={require('../assets/cross.png')} alt="" className="tick-mark-img"/>
        {/* <CheckIcon style={{fontSize: '3em',fontWeight: '900',color: " white",position: 'relative',top:'0px',left:'-10px'}}/> */}
        Order Cancelled
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="chat-btn-wrapper">
            <img src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1" alt=""
              className="user-image" />
            <FiberManualRecordIcon style={{
              position: 'absolute',
              // top: '-5px',
              left: '50px',
              height: '10px',
              width: "10px",
              color: '#51ab59'
            }} />
            <span className="chat-text">
              Chat

            </span>
          </div>
        </div>
        <div className="col-4">
          <div className="process-txt">
            Order Completed
          </div>
        </div>
      </div>

      <div className="row order-heading-wrapper">
        <div className="col-7">
          <div className="order-id">
            Order ID : #14123123
            </div>
          <div className="seller-detail">
            <span className="seller-txt">
              Seller
              </span>
            <span className="seller-name">
              Cardova
              </span>
            <span className="date">
              18 Feb 2020
              </span>
          </div>
        </div>
        <div className="col-5">
            <span className="deliverd-on">
              Cancelled on <span className="delivery-date"> 18 Feb 2020</span>
            </span>
        </div>
      </div>
      <div className="row">
        <div className="summery">
          Order Summary
        </div>
      </div>

      <div className="row items">
        <table>
          <thead>
            <td className="item-text">Items</td>
            <td className="duration">Duration</td>
            <td className="amount">Amount  </td>
          </thead>
          <tbody>
            <tr>
              <td>I'm offering web design services</td>
              <td> 3 Days</td>
              <td> AED 100</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div className="row">
        <div className="package-name col-12">
          Package <span className="package">BASIC</span>
        </div>
        <div className="col-4">
          <div className="box-package-detail">
            <div className="row">

              <div className="col-10 txt">Source file</div>
              <div className="col-2 txt"> -</div>
            </div>
            <div className="row">

              <div className="col-10 txt">Concept Includes</div>
              <div className="col-2 txt"> <CheckIcon style={{fontSize: '1.5em',fontWeight: '500',color: " #1dbf73",position: 'relative',top:'0px',left:'-10px'}}/></div>
            </div>
            <div className="row">

              <div className="col-10 txt">3D Mockup</div>
              <div className="col-2 txt"> -</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row description-box">
        <div className="col-6">
          <div className="headiing"> Description</div>
          <div className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur alias, debitis cum ipsam optio. Maiores, distinctio non cum et laudantium nulla quisquam tempore nihil! Assumenda exercitationem perferendis velit deserunt.
          </div>
        </div>
      </div>
      <div className="row description-box">
        <div className="col-6">
          <div className="headiing"> Requirements</div>
          <div className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur alias, debitis cum ipsam optio. Maiores, distinctio non cum et laudantium nulla quisquam tempore nihil! Assumenda exercitationem perferendis velit deserunt.
          </div>
        </div>
      </div>



      <div className="row">
        <div className="col-6 recieved-worked">
          <div className="heading">
            Recieved Worked Files
          </div>
          <div className="your-files">
            Your Work Files
          </div>
          <textarea name="message" id="" cols="30" rows="10" className="message-text-area"
          placeholder="Message : "></textarea>
        </div>

       

        <div className="col-6">
          <div className="chat-box-wrapper-progress-order">
            <div className="header-section">
              Chating Room
            </div>

            <div className="message-container">
              <div className="message-wrapper">
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      I'm fine how about you dear?
                    </p>
                  </div>
                </div>
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      I'm fine how about you dear?
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div className="new-message-container">
              <input type="text" className="input-chat" />
              <label htmlFor="file" className="input-file"></label>
              <input type="file" className="hidden" id="file" />
              <button className="button-send"> </button>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
};


let mapStateToProps = store => {

  return {
    userDetail: store.CourseReducer
  }
}
// let mapDispatchToProps = dispatch => {
//   return {
//     getCourses: (state, user) => {
//       dispatch(getAllCourse(state, user))
//     }
//   }
// }


export default withRouter(connect(mapStateToProps, {})(ViewRunningOrder))
