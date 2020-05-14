import {
    REGISTER,
    INVALID_INFORMATION,
    LOGIN,
    PROFILE,
    FEE_PAID
} from '../../constants'
import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    institute_id: "5eb3e297f96ebf00b0638bea",
    userDetail: null,
    msg: null,
    status: true, // if false profile gets under review
    paid: false, // if false then user will see the payment page 
    authenticated: true,
    feeStatus: null
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case REGISTER:

            if (action.payload.type === "institute") {
                newState.authenticated = true

                setTimeout(() => {
                    history.push(routes.RegisterAsInstitute)
                    
                }, 1000);
            }
            if (action.payload.type === "instructor") {
                newState.authenticated = true
                setTimeout(() => {
                    history.push(routes.RegisterAsInstructor)
                    
                }, 1000);
            }


            newState.userDetail = action.payload.resp.userData

            break;

        case INVALID_INFORMATION:
            newState.msg = "Information invalid, please check and try again."

            break;



        case LOGIN:

            console.log(action.payload.resp.resp);
            newState.authenticated = true
            newState.Institute_id = action.payload.resp.resp._id
            newState.userDetail = action.payload.resp.resp
            setTimeout(() => {
                if (action.payload.type === "institute") {
                    if (action.payload.resp.resp.fee.status === 1) {
                        history.push(routes.PayFee)
                    }
                    else {
                        history.push(routes.RegisterAsInstitute)
                    }
                }
                if (action.payload.type === "instructor") {
                    if (action.payload.resp.resp.status === 2) {
                        history.push(routes.PayFee)
                    }
                    if (action.payload.resp.resp.status !== 2) {
                        history.push(routes.RegisterAsInstructor)
                    }

                }

            });

            break;

        case PROFILE:


            newState.userDetail = action.payload.resp

            break;

        case FEE_PAID:

            newState.feeStatus = action.payload.resp

            break;


        default:
            break;
    }
    return newState
}