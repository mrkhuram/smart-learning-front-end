import React, { useState } from "react";


import { Link } from "react-router-dom";
import * as router from '../../../../constants/routePaths'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';



const scheduleIcon = {
  color: " #30B484",
  marginRight: 10,
  position: 'relative',
  top: 5
}

const RunningOrdersTable = ({ data }) => {








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
                          <WatchLaterSharpIcon style={scheduleIcon} />{d.date}
                        </p>
                      </div>

                    </Link>
                  </td>

                  <td>{d.offer}</td>
                  <td>{d.timmer}</td>
                  {/* <td>{d.topic}</td> */}

                  <td>
                    <Link to={router.CustomerInProcessDetails} className="link">
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RunningOrdersTable));