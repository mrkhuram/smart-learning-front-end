import React from 'react'
import './assets/order_management.scss'
import RunningOrder from './orders/RunningOrdersTable'
import NewOrder from './orders/newOrder'
import CompletedOrder from './orders/completedOrder'
import CancelOrder from './orders/cancelOrder'
import LateOrder from './orders/lateOrder'
import Revision from './orders/revisionOrder'

const ManageOrders = props => {


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
        "Start Date",
        "DeliveredAt",
        "Total",
        "Reviews",
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
    const lateHeading = [
        "Buyer Name & Order",
        "Start Date",
        "End Date",
        "DeliveredAt",
        "Total",
        "Status",
    ]
    const revisionHeadings = [
        "Buyer Name & Order",
        "Order Description",
        "Order Date",
        "Revisions",
        "Status",


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

    ]


    const dataCompletedOrder = [
        {
            name: 'Sarfraz Khan',
            img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
            offer: 'Create my logo Design',
            startDate: '11-April',
            deliverAt: '11-May',
            total: "$10",
            reviews: 4,
            status: 'completed',
        },
        {
            name: 'Sarfraz Khan',
            img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
            offer: 'Create my logo Design',
            startDate: '11-April',
            deliverAt: '11-May',
            total: "$10",
            reviews: 4,
            status: 'completed',
        },
        {
            name: 'Sarfraz Khan',
            img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
            offer: 'Create my logo Design',
            startDate: '11-April',
            deliverAt: '11-May',
            total: "$10",
            reviews: 4,
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
    const dataLateOrder = [
        {
            name: 'Sarfraz Khan',
            img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
            offer: 'Create my logo Design',
            startDate: '11-April',
            endDate: '11-May',
            deliverAt: '11-May',
            total: "$10",
            status: 'late',
        },
        {
            name: 'Sarfraz Khan',
            img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
            offer: 'Create my logo Design',
            startDate: '11-April',
            endDate: '11-May',
            deliverAt: '11-May',
            total: "$10",
            status: 'late',
        },
        {
            name: 'Sarfraz Khan',
            img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
            offer: 'Create my logo Design',
            startDate: '11-April',
            endDate: '11-May',
            deliverAt: '11-May',
            total: "$10",
            status: 'late',
        },


    ]
    const revisionOrder = [
        {
            name: 'Sarfraz Khan',
            img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
            offer: 'Create my logo Design',
            startDate: '11-May',
            total: "$10",
            status: 'pending',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'
        },
        {
            name: 'Sarfraz Khan',
            img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
            offer: 'Create my logo Design',
            startDate: '11-May',
            total: "$10",
            status: 'completed',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'

        },
        {
            name: 'Sarfraz Khan',
            img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
            offer: 'Create my logo Design',
            startDate: '11-May',
            total: "$10",
            status: 'pending',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'

        },

    ]

    return (
        <div className="order-manage-wrapper">
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="order-manage-heading">
                            Manage Orders
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul className="nav nav-tabs tab-edit"
                    id="myTab"
                    role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active"
                            id="running-order-tab" data-toggle="tab" href="#running-order"
                            role="tab" aria-controls="running-order" aria-selected="true">Running</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            id="new-order-tab" data-toggle="tab" href="#new-order"
                            role="tab" aria-controls="new-order" aria-selected="false">New</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            id="completed-order-tab" data-toggle="tab" href="#completed-order"
                            role="tab" aria-controls="completed-order" aria-selected="false">Completed</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            id="late-tab" data-toggle="tab" href="#late"
                            role="tab" aria-controls="late" aria-selected="false">Late</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            id="canceled-tab" data-toggle="tab" href="#canceled"
                            role="tab" aria-controls="canceled" aria-selected="false">Cancelled</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link"
                            id="revision-tab" data-toggle="tab" href="#revision"
                            role="tab" aria-controls="revision" aria-selected="false">Revisions</a>
                    </li>

                </ul>
                <div className="tab-content p-0 tab-table"
                    id="myTabContent">
                    <div
                        className="tab-pane fade show active "
                        id="running-order"
                        role="tabpanel"
                        aria-labelledby="running-order-tab"
                    >
                        <RunningOrder headings={array} data={dataArray} /> 
                    </div>
                    <div
                        className="tab-pane fade"
                        id="new-order"
                        role="tabpanel"
                        aria-labelledby="new-order-tab">
                        <NewOrder headings={newOrder} data={dataNewOrder} />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="completed-order"
                        role="tabpanel"
                        aria-labelledby="completed-order-tab">
                        <CompletedOrder headings={completedOrder} data={dataCompletedOrder} /></div>
                    <div
                        className="tab-pane fade"
                        id="late"
                        role="tabpanel"
                        aria-labelledby="late-tab">
                        <LateOrder headings={lateHeading} data={dataLateOrder} />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="canceled"
                        role="tabpanel"
                        aria-labelledby="canceled-tab"> <CancelOrder headings={cancelOrder} data={dataCancelOrder} /> </div>
                    <div
                        className="tab-pane fade"
                        id="revision"
                        role="tabpanel"
                        aria-labelledby="revision-tab"><Revision headings={revisionHeadings} data={revisionOrder} /> </div>


                </div>
            </div>
        </div>
    )
}
export default ManageOrders