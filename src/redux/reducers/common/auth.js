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
    // institute_id: "5e9d4a5eab438002fc7d97df",
    userDetail: null,
    msg: null,
    status: true, // if false profile gets under review
    paid: true, // if false then user will see the payment page
    authenticated: true,
    feeStatus: null
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case REGISTER:

            if (action.payload.type === "institute") {
                history.push(routes.RegisterAsInstitute)
            }
            if (action.payload.type === "instructor") {
                history.push(routes.RegisterAsInstructor)
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