import {

    COURSE_ADDED,
    ERROR,
    ALL_CHAPTER
} from '../../constants'
import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    institute_id: "5e9d4a5eab438002fc7d97df", // temporarily
    userDetail: null,
    msg: null,
    err: null,
    allChapter: null
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        // case COURSE_ADDED:

        //     newState.userDetail = action.payload.resp.userData

        //     break;

        // case ERROR:
        //     console.log(action.payload);

        //     newState.err = action.payload

        //     break;



        case ALL_CHAPTER:
            console.log(action.payload.resp);


            newState.allChapter = action.payload.resp.chapter


            break;


        default:
            break;
    }
    return newState
}