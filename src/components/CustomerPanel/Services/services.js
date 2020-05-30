import React from 'react'
import './assets/order_management.scss'
import InProcess from './orders/InProcess'
import CompletedOrder from './orders/newOrder'
import CancelledOrder from './orders/CancelledOrder'

const ManageOrders = props => {


    const dataArray = [
        {
            id: '23123',
            date: '18 Feb 2020',
            offer: "I'm offering web design services.",
            status: 'In Process',
            timmer: 'DD : HH : MM : SS'
        },
        {
            id: '23123',
            date: '18 Feb 2020',
            offer: "I'm offering web design services.",
            status: 'In Process',
            timmer: 'DD : HH : MM : SS'
        },
        {
            id: '23123',
            date: '18 Feb 2020',
            offer: "I'm offering web design services.",
            status: 'In Process',
            timmer: 'DD : HH : MM : SS'
        },

    ]

    const datacompletedOrder = [
        {
            id: '23123',
            date: '18 Feb 2020',
            offer: "I'm offering web design services.",
            status: 'View Details',
            // timmer: 'DD : HH : MM : SS'
        },
        {
            id: '23123',
            date: '18 Feb 2020',
            offer: "I'm offering web design services.",
            status: 'View Details',
            // timmer: 'DD : HH : MM : SS'
        },
        {
            id: '23123',
            date: '18 Feb 2020',
            offer: "I'm offering web design services.",
            status: 'View Details',
            // timmer: 'DD : HH : MM : SS'
        },

    ]


    const dataCancelledOrder =[
        {
            id: '23123',
            date: '18 Feb 2020',
            offer: "I'm offering web design services.",
            status: 'View Details',
            // timmer: 'DD : HH : MM : SS'
        },
        {
            id: '23123',
            date: '18 Feb 2020',
            offer: "I'm offering web design services.",
            status: 'View Details',
            // timmer: 'DD : HH : MM : SS'
        },
        {
            id: '23123',
            date: '18 Feb 2020',
            offer: "I'm offering web design services.",
            status: 'View Details',
            // timmer: 'DD : HH : MM : SS'
        },

    ]

    return (
        <div className="services-customer-panel row">

            <div className="col-8">
                <p className="heading-booked-event">My Orders History</p>
            </div>
            <div className="col-4">
                <p className="book-btn">Book New Event</p>
            </div>
            <div className='col-12'>
                <ul className="nav nav-tabs tab-edit"
                    id="myTab"
                    role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active"
                            id="running-order-tab" data-toggle="tab" href="#in-process"
                            role="tab" aria-controls="running-order" aria-selected="true">In Process</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            id="new-order-tab" data-toggle="tab" href="#completed"
                            role="tab" aria-controls="new-order" aria-selected="false">Completed</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            id="completed-order-tab" data-toggle="tab" href="#cancelled"
                            role="tab" aria-controls="completed-order" aria-selected="false">Cancelled</a>
                    </li>
                </ul>
                <div className="tab-content p-0 tab-table"
                    id="myTabContent">
                    <div
                        className="tab-pane fade show active "
                        id="in-process"
                        role="tabpanel"
                        aria-labelledby="running-order-tab"
                    >
                        <InProcess data={dataArray} />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="completed"
                        role="tabpanel"
                        aria-labelledby="new-order-tab">
                        <CompletedOrder data={datacompletedOrder} />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="cancelled"
                        role="tabpanel"
                        aria-labelledby="completed-order-tab">
                        <CancelledOrder data={dataCancelledOrder} /></div>


                </div>
            </div>
        </div>
    )
}
export default ManageOrders