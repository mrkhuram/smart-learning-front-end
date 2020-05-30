import React, { useState } from "react";
import "./sales.scss";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Gig from '../ManageSingleGig/ManageSingleGig'

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


const TotalGigs = props => {

    const { setNewProfile } = props

    const [state, setState] = useState({

    })

    return (
        <div className="total-sales-wrapper">
            <div className="row">

                <div className="col-12">

                    <p className="enrolled-heading">
                        Total Gigs
                </p>

                </div>

            </div>

            <div className="row">
                <div className="gigs-wrapper">
                    <div className="gig">
                        <Gig /> 
                        <Gig /> 

                        <Gig /> 

                        <Gig /> 


                    </div>
                </div>
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


export default withRouter(connect(null, {})(TotalGigs))

