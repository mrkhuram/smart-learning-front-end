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
import LinearProgress from '@material-ui/core/LinearProgress';



const ProgressBar = props => {
  const {color} = props
  const BorderLinearProgress = withStyles({
    root: {
      height: 20,
      backgroundColor: '#c8c8c8',
      borderRadius: 10,
      position: 'relative',
      top: 15,
      overflow: 'visible'
    },
    bar: {
      borderRadius: 20,
      backgroundColor: color
    },
    // bar2: {
    //   borderRadius: 20,
    //   backgroundColor: '',

    // }
  })(LinearProgress);
  return (


    <BorderLinearProgress
      variant="determinate"
      value={80}

    />
  )
}

const OfferCourseTable = ({ headings, data, courses }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({
    oneUser: { id: 'demo' }
  })

  const [discount, setDiscount] = React.useState({})
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const setCourse = (course) => {
    setDiscount(course)
    openModal()
  }

  const openModal = (course) => {

    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };





  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={anchorEl}
      onClose={handleMenuClose}

    >

      <Link
        to={{
          pathname: `/institute/course_management/view/${id.oneUser._id}`,
          // query: id.oneUser
        }}
        style={{
          color: 'black'
        }}
      >
        <MenuItem onClick={handleMenuClose}>View Course Details</MenuItem>
      </Link>

      <MenuItem onClick={handleMenuClose}>Edit Course</MenuItem>
      <MenuItem onClick={handleMenuClose}>View Invoice</MenuItem>


    </Menu>
  );


  return (


    <>
      {/* <Modal
        open={open}
        handleCloseModal={handleCloseModal}
        onClose={handleCloseModal}
        course={discount}
      /> */}
      <table className="table table_course_management table-borderless table-sales-freelancer">
        <thead>
          <tr>
            {headings.map((h, i) => (
              <th key={i} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            data ?

              data.map((d, i) => (
                <tr key={i}>
                  <td className="date-table">{d.date}</td>

                  <td className="font-500">
                    <img src={d.img} alt="" className="buyer-img" />
                    {d.name}
                  </td>
                  <td className="course-name font-500">{d.course}</td>
                  <td className="font-500 bar-outer">
                  <ProgressBar color={d.status === 'pending' ? '#50a7ee' : "#33aa58" }/>
                    <span className="pending">{d.status === 'pending' ? 'pending' : "recieved" }</span>
                  </td>
                  <td className="font-500">

                    {d.amount}
                  </td>

                </tr>
              ))
              :
              <div className="nothing_to_show">
                <h4>Nothing to Show</h4>
              </div>
          }
          {renderMenu}
        </tbody>
      </table>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfferCourseTable));