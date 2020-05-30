import React, { useState } from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import * as router from '../../../../constants/routePaths'

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';



const scheduleIcon = {
  color:" #30B484",
  marginRight: 10,
  position: 'relative',
  top: 5
}

const StudentQueryTable = ({ data }) => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen] = useState(false);
  // const [id, setId] = useState({
  //   oneUser: { id: 'demo' }
  // })

  // const [discount, setDiscount] = React.useState({})
  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };
  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };


  // const setCourse = (course) => {
  //   setDiscount(course)
  //   openModal()
  // }

  // const openModal = (course) => {

  //   setOpen(true);
  // };
  // const handleCloseModal = () => {
  //   setOpen(false);
  // };





  // const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={anchorEl}
  //     onClose={handleMenuClose}

  //   >

  //     <Link
  //       to={{
  //         pathname: `/institute/course_management/view/${id.oneUser._id}`,
  //         // query: id.oneUser
  //       }}>
  //       <MenuItem onClick={handleMenuClose}>View Course Details</MenuItem>
  //     </Link>

  //     <MenuItem onClick={handleMenuClose}>Edit Course</MenuItem>

  //   </Menu>
  // );

  return (


    <>





      <table className="table table_course_management table-borderless in-process-order">
      
      <tbody>
          {
            data ?

              data.map((d, i) => (
                <tr key={i}>
                  <td className='in-process'>
                    <Link to={router.freelancerViewOrderDetailRunning} className="link">

                      {/* <img src={d.img} alt="" className="avatar-img" /> */}
                      <div className="name-outer">

                        Order ID : #{d.id}
                        <p className="offer-running-order">
                          <WatchLaterSharpIcon style={scheduleIcon}/>{d.date}
                        </p>
                      </div>

                    </Link> 
                  </td>

                  <td>{d.offer}</td>

                  <td>
                    <Link className="link"
                    to={router.CustomerCompletedOrderDetails}>
                    <span className="status-process">
                      {d.status}

                    </span>
                    </Link>

                  </td>


                </tr>
              ))
              :
              <div className="nothing_to_show">
                <h4>Nothing to Show</h4>
              </div>
          }
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentQueryTable));