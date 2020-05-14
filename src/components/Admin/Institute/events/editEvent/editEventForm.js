import React, { useState } from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
// import Modal from "./Modal";
import { Link } from "react-router-dom";
// import * as router from '../../../../constants/routePaths'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from "@fortawesome/free-regular-svg-icons";


const PurpleSwitch = withStyles({
  switchBase: {
    color: " white",
    '&$checked': {
      color: "white",

    },
    '&$checked + $track': {
      backgroundColor: "#2ebf5b",
      opacity: 1,

    },
  },
  checked: {},
  track: {},
})(Switch);





const ViewEventsTable = ({ headings, data, courses }) => {

  const [state, setState] = useState({
    event_name: "Intro To Pysics part 1 with notes",
    event_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta asperiores odio blanditiis dignissimos aut necessitatibus iusto voluptatibus architecto quibusdam repudiandae sint animi expedita labore, soluta nihil temporibus exercitationem corrupti!',
    event_venue: " Wall Street, Washington DC ",
    event_date: "Saturday 20 FEB",
    event_time: "9AM TO 2PM",
    event_price: "AD 150"
  })


  const onChangeHandler = e => {
    let name = e.target.name
    let val = e.target.value

    setState({
      ...state,
      [name]: val
    })
  }


  const edit_image = e => {
    let input = document.getElementById('event_img')
    console.log(input);
    input.setAttribute("id", "event_poster")
    let img = document.getElementById('event_img_id')
    img.classList.add("edit-mode")
  }

  const editName = e => {
    let input = document.getElementById('input-name')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous-name')
    name.classList.add("hidden")
  }
  const editDesc = e => {
    let input = document.getElementById('input-desc')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous-desc')
    name.classList.add("hidden")
  }

  const editVenue = e => {
    let input = document.getElementById('input-venue')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous_venue')
    name.classList.add("hidden")
  }


  const editDate = e => {
    let input = document.getElementById('input-date')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous_date')
    name.classList.add("hidden")
  }
  
  const editTime = e => {
    let input = document.getElementById('input-time')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous_time')
    name.classList.add("hidden")
  }

  
  const editPrice = e => {
    let input = document.getElementById('input-price')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous_price')
    name.classList.add("hidden")
  }
  return (
    <>
      <div className="edit-event-wrapper">
        <div className="col-6">
          <div className="edit-icon">
            <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={edit_image} />
          </div>
          <div className="img-outer">
            <label htmlFor="event_poster">
              <img src="https://mackayexpo.com.au/marketing-tools/MLE20-Exhibitor-Banner-600x270.jpg"
                alt="event_image"
                className="event_image "
                id="event_img_id" />
            </label>
            <input type="file" accept="image/*" className="hidden"
              id="event_img"
            />
          </div>
        </div>


      </div>
      <div className="col-8">
        <div className="edit-left-wrapper">
          <div className="edit-name-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editName} />
            </div>
            <div className="edit-name">
              <span id="previous-name">
                {state.event_name}
              </span>
              <input type="text"
                className="addNewName hidden"
                id="input-name"
                name="event_name"
                value={state.event_name}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="edit-desc-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editDesc} />
            </div>
            <div className="edit-name">
              <span id="previous-desc">
                {state.event_desc}
              </span>
              <textarea type="text"
                className="addNewName hidden"
                id="input-desc"
                name="event_desc"
                value={state.event_desc}
                onChange={onChangeHandler}
              />


            </div>
          </div>
          <div className="edit-venue-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editVenue} />
            </div>
            <div className="edit-name">
              Venue:
              <span id="previous_venue">{state.event_venue} </span>
              <input type="text"
                className="addNewName hidden"
                id="input-venue"
                name="event_venue"
                value={state.event_venue}
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="edit-right-wrapper">
          <div className="edit-name-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editDate} />
            </div>
            <div className="edit-name">

              <span id="previous_date">{state.event_date} </span>
              <input type="text"
                className="addNewName hidden"
                id="input-date"
                name="event_date"
                value={state.event_date}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="edit-desc-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editTime}/>
            </div>
            <div className="edit-name">
             
              <span id="previous_time">{state.event_time} </span>
              <input type="text"
                className="addNewName hidden"
                id="input-time"
                name="event_time"
                value={state.event_time}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="edit-venue-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editPrice}/>
            </div>
            <div className="edit-name">
              
              <span id="previous_price">{state.event_price} </span>
              <input type="text"
                className="addNewName hidden"
                id="input-price"
                name="event_price"
                value={state.event_price}
                onChange={onChangeHandler}
              />
                    </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="saved-btn-wrapper">
          <button className="saved-edit-setting">
            Save
              </button>
        </div>
      </div>
    </>
  )
}


let mapStateToProps = store => {

  return {
    courses: store.CourseReducer.allCourses
  }
}
let mapDispatchToProps = dispatch => {
  return {

  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewEventsTable));