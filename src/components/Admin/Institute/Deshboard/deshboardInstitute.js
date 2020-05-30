import React, { useState } from "react";
import "./_deshboard.scss";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import EnrolledStudent from './enrolled/enrolledStudent'
import Reviews from './reviews/recentReviews'
import StudentQueryTable from './studentQueryTable'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import TotalSales from './totalSales/totalSales'




const array = [
    "",
    "Name",
    "Course",
    "Topic",
    "Status",
    ""

]
const dataArray = [
    {
        time: '7 May 9:45 PM',
        name: 'Ahsan Islam',
        course: "Intro to general mathematics",
        topic: 'BIOS Operator',
        status: 'Replied',
        more: <MoreVertIcon />
    },
    {
        time: '7 May 9:45 PM',
        name: 'Ahsan Islam',
        course: "Intro to general mathematics",
        topic: 'BIOS Operator',
        status: 'Un Replied',
        more: <MoreVertIcon />

    },
    {
        time: '7 May 9:45 PM',
        name: 'UX UI Designer',
        course: "Human Computer Interaction",
        topic: 'BIOS Operator',
        status: 'Replied',
        more: <MoreVertIcon />

    },
    {
        time: '7 May 9:45 PM',
        name: 'Ahsan Islam',
        course: "Geometry",
        topic: 'BIOS Operator',
        status: 'Replied',
        more: <MoreVertIcon />

    },
    {
        time: '7 May 9:45 PM',
        name: 'Kashif Khan',
        course: "Intro to Biology",
        topic: 'BIOS Operator',
        status: 'Un Replied',
        more: <MoreVertIcon />

    }
]




const InstituteDeshboard = props => {

    const { setNewProfile } = props

    const [state, setState] = useState({

    })

    return (
        <div className="deshboard-wrapper-institute"> 
            <div className="row">
                <div className="col-5">
                    <EnrolledStudent />  
                </div>
                <div className="col-7">
                    <Reviews />
                </div>
            </div>



            <div className="query-table-section">

                <div className="student-query-head-section">
                    <div className="row">
                        <div className="col-5 ">
                            <p className="student-heading">Student Queries</p>
                        </div>
                        <div className="col-2">
                            <select name="" id="" className="select-topic-in-question"  >

                                <option value="select topic">By Course</option>
                                <option value="select topic">1</option>
                                <option value="select topic">2</option>
                                <option value="select topic">3</option>


                            </select>
                        </div>
                        <div className="col-2">
                            <select name="" id="" className="select-topic-in-question"  >

                                <option value="select topic">By Topic</option>
                                <option value="select topic">1</option>
                                <option value="select topic">2</option>
                                <option value="select topic">3</option>


                            </select>
                        </div>
                        <div className="col-2">
                            <select name="" id="" className="select-topic-in-question"  >

                                <option value="select topic">By Reply</option>
                                <option value="select topic">1</option>
                                <option value="select topic">2</option>
                                <option value="select topic">3</option>


                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <StudentQueryTable headings={array} data={dataArray} />
                </div>

            </div>


          
                <TotalSales />
   





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


export default withRouter(connect(null, {})(InstituteDeshboard))

