import React, { useState } from "react";
import "./_deshboard-freelancer.scss";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import EnrolledStudent from './enrolled/enrolledStudent'
import Reviews from './reviews/recentReviews'
import RunningOrder from './studentQueryTable'
import NewOrder from './newOrder'
import CompletedOrder from './completedOrder'
import CancelOrder from './cancelOrder'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import TotalGigs from './totalSales/totalSales'
import DashboardCard from "../common/DashoardCard/DashboardCard";
import GroupAddIcon from '../assets/group-add.png'
import GroupIcon from '../assets/group.png'
import CoinStack from '../assets/coins.png'


const array = [
    "Buyer Name & Order",
    "Start Date",
    "Total",
    "Status",
    "Timmer",


]
const newOrder = [
    "Buyer Name & Order",
    "Order Description",
    "Start Date",
    "Total",
    "Status",


]
const completedOrder = [
    "Buyer Name & Order",
    "DeliveredAt",
    "Total",
    "Status",
    // "Status",


]

const cancelOrder = [
    "Buyer Name & Order",
    "date",
    "Total",
    "Status",
    // "Status",


]
const dataArray = [
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'Active',
        timmer: 'HH : MM : SS'
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'Active',
        timmer: 'HH : MM : SS'
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'Active',
        timmer: 'HH : MM : SS'
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'Active',
        timmer: 'HH : MM : SS'
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'Active',
        timmer: 'HH : MM : SS'
    },
]

const dataNewOrder = [
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'new order',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'new order',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'

    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'new order',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'

    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'new order',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'

    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'new order',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'

    },
]


const dataCompletedOrder = [
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        deliverAt: '11-May',
        total: "$10",
        status: 'completed',
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        deliverAt: '11-May',
        total: "$10",
        status: 'completed',
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        deliverAt: '11-May',
        total: "$10",
        status: 'completed',
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        deliverAt: '11-May',
        total: "$10",
        status: 'completed',
    },
   
]


const dataCancelOrder = [
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        deliverAt: '11-May',
        total: "$10",
        status: 'cancel',
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        deliverAt: '11-May',
        total: "$10",
        status: 'cancel',
    }
   
]

const InstituteDeshboard = props => {

    const { setNewProfile } = props

    const [state, setState] = useState({

    })

    return (
        <div className="deshboard-wrapper-freelancer">
            <div className="row">
                <div className="col-5">
                    <EnrolledStudent />
                </div>
                {/* <div className="col-7">
                    <Reviews />
                </div> */}
            </div>
            <div className="query-table-section">

                <div className="student-query-head-section-freelancer">
                    <div className="row">
                        <div className="col-10 ">
                            <p className="student-heading">Deshboard</p>
                        </div>
                        <div className="col-2">
                            <select name="" id="" className="select-topic-in-question"  >

                                <option value="select topic">Last Month</option>
                                <option value="select topic">1</option>
                                <option value="select topic">2</option>
                                <option value="select topic">3</option>


                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <DashboardCard
                    type="total-students"
                    title="total orders"
                    count="150"
                    image={GroupAddIcon}
                />
                <DashboardCard
                    type="total-courses"
                    title="completed orders"
                    count="50"
                    image={GroupIcon}
                />
                <DashboardCard
                    type="total-sales"
                    title="total earning"
                    count="$1,150"
                    image={CoinStack}
                />
            </div>




            <div className="row">
                <RunningOrder headings={array} data={dataArray} />
            </div>


            <div className="row">
                <NewOrder headings={newOrder} data={dataNewOrder} />
            </div>
            <div className="row">
                {/* completed orders */}
                <div className="col-6">
                <CompletedOrder headings={completedOrder} data={dataCompletedOrder} />

                </div>
                <div className="col-6">
                <CancelOrder headings={cancelOrder} data={dataCancelOrder} />

                </div>
            </div>

            <TotalGigs />






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

