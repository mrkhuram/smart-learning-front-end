import React, { useState,useEffect } from "react";
import "./_view_event.scss";

import ViewEventsTable from "./viewEventsTable";

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import * as routes from '../../../../../constants/routePaths'


const ViewEvent = props => {
  const { getCourses, userDetail,events } = props
  
  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [state, setState] = useState({
   
  })
  const [event, setEvent] = useState([]);



  const array = [
    "Date",
    "Name",
    "Mobile Number",
    "Ticket ID",
    "Seats",
    "Price",
    "Status"

  ]
  const dataArray = [
    {

      date: "20-6-2020",
      name: "Khuram Shahzad",
      mobile: "090078601",
      ticketID: "AD00987",
      seats: "09",
      price: "$40",
      status: "booked"
    },
    {

      date: "20-6-2020",
      name: "Khuram Shahzad",
      mobile: "090078601",
      ticketID: "AD00987",
      seats: "09",
      price: "$40",
      status: "booked",
    },
    {

      date: "20-6-2020",
      name: "Khuram Shahzad",
      mobile: "090078601",
      ticketID: "AD00987",
      seats: "09",
      price: "$40",
      status: "booked",
    },
    {

      date: "20-6-2020",
      name: "Khuram Shahzad",
      mobile: "090078601",
      ticketID: "AD00987",
      seats: "09",
      price: "$40",
      status: "cancel",
    },
  ]


 // fire when component will recieve the props
 useEffect(()=>{
  setEvent(events)
  
},[events])

console.log(event);
  return (
    <div className="event-management-wrapper">
      <div className="row">
        <div className="col-md-9">
          <h3 className="courseHeading">
            View Events
          </h3>
          <p
            className="heading-texting"
          >Here you can view your events</p>
        </div>
        
      </div>

      <div className="row">
        <ViewEventsTable headings={array} data={dataArray} />
      </div>

    </div>
  );
};

let mapStateToProps = store => {
  
  return {
    events: store.EventReducer.events
  }
}

export default withRouter(connect(mapStateToProps, {})(ViewEvent))
