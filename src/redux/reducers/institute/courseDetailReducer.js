import {

    COURSE_ADDED,
    ERROR,
    ALL_COURSES
} from '../../constants'
import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    institute_id: "5e9d4a5eab438002fc7d97df", // temporarily
    userDetail: null,
    msg: null,
    err: null,
    allCourses: []
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



        case ALL_COURSES:
            console.log(action.payload.resp);


            newState.allCourses = action.payload.resp.course


            break;

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