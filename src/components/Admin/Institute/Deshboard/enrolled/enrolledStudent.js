import React, { useState } from "react";
import "./enrolled.scss";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


const students = [
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
   

]


const EnrolledStudent = props => {

    const { setNewProfile } = props

    const [state, setState] = useState({

    })

    return (
        <div className="enrolled-wrapper">
            <div className="enrolled-outing">
                <p className="enrolled-heading">
                    Enrolled Students
                </p>
                <select name="" id="" className="select-topic-in-question"  >

                    <option value="select topic">Select Topic</option>
                    <option value="select topic">1</option>
                    <option value="select topic">2</option>
                    <option value="select topic">3</option>


                </select>
            </div>


            <div className="list-wrapper">
                {students.map((item, index) => {
                    return <li className="list-items" key={index}>
                        <div className="img-wrapper">
                            <img src="https://res.cloudinary.com/demo/image/upload/w_200,h_200,c_thumb,g_face,r_max/face_left.png" alt="" />
                        </div>
                        <div className="content-list-item">
                            <p className="name">
                                {item.name}
                            </p>
                            <p className="time">
                                {item.time}
                            </p>
                            <p className="course-name">
                                {item.subject}
                            </p>
                        </div>
                    </li>
                })}

            </div>

        </div>
    );
};


// let mapStateToProps = store => {
//   console.log(store);

//   return {
//     userDetail: store.auth.userDetail
//   }
// }
// let mapDispatchToProps = dispatch => {
//   return {
//     // setNewProfile: (state, user) => {
//     //   dispatch(updateProfileInstructor(state, user))
//     // }
//   }
// }


export default withRouter(connect(null, {})(EnrolledStudent))

