import {

    COURSE_ADDED,
    ERROR
} from '../../constants'
import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    userDetail: null,
    msg: null,
    err: null
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case COURSE_ADDED:

            newState.userDetail = action.payload.resp.userData

            break;

        case ERROR:
            console.log(action.payload);
            
            newState.err = action.payload

            break;



        // case LOGIN:

        //     console.log(action.payload.resp);

        //     newState.userDetail = action.payload.resp
        //     setTimeout(() => {
        //         if (action.payload.type === "institute") {
        //             history.push(routes.RegisterAsInstitute)
        //         }
        //         if (action.payload.type === "instructor") {
        //             history.push(routes.OfferCourse)
        //         }

        //     });

        //     break;

        // case PROFILE:

        //     console.log(action.payload.resp);

        //     newState.userDetail = action.payload.resp

        //     // if (action.payload.type === "institute") {
        //     //     history.push(routes.RegisterAsInstitute)
        //     // }
        //     // if (action.payload.type === "instructor") {
        //     //     history.push(routes.OfferCourse)
        //     // }

        //     break;


        default:
            break;
    }
    return newState
}