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


            <div className="list-wrapper">
                {/* {students.map((item, index) => { */}
                     <li className="list-items" 
                    //  key={index}
                     >
                        <div className="img-wrapper">
                            <img src="https://www.understandingrelationships.com/wp-content/uploads/Fotolia_56809123_Subscription_Monthly_M.jpg" alt="" />
                        </div>
                        <div className="content-list-item">
                            <p className="name">
                                Ahsan Saleem
                            </p>
                            <p className="course-name">
                               Graphic Designer
                            </p>
                        </div>
                    </li>
                {/* })} */}

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

