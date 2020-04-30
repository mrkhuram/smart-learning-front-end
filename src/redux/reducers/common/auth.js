import {
    REGISTER,
    INVALID_INFORMATION,
    LOGIN,
    PROFILE
} from '../../constants'
import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    institute_id: "5e9d4a5eab438002fc7d97df",
    userDetail: null,
    msg: null
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case REGISTER:

            if (action.payload.type === "institute") {
                history.push(routes.RegisterAsInstitute)
            }
            if (action.payload.type === "instructor") {
                history.push(routes.OfferCourse)
            }


            newState.userDetail = action.payload.resp.userData

            break;

        case INVALID_INFORMATION:
            newState.msg = "Information invalid, please check and try again."

            break;



        case LOGIN:

            console.log(action.payload.resp);

            newState.userDetail = action.payload.resp
            setTimeout(() => {
                if (action.payload.type === "institute") {
                    history.push(routes.RegisterAsInstitute)
                }
                if (action.payload.type === "instructor") {
                    history.push(routes.OfferCourse)
                }
                
            });

            break;

        case PROFILE:

            console.log(action.payload.resp);

            newState.userDetail = action.payload.resp

            // if (action.payload.type === "institute") {
            //     history.push(routes.RegisterAsInstitute)
            // }
            // if (action.payload.type === "instructor") {
            //     history.push(routes.OfferCourse)
            // }

            break;


        default:
            break;
    }
    return newState
}