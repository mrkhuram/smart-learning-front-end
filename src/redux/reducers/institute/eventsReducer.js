import {
    ALL_EVENTS,
    ALL_EVENTS_ERROR
} from '../../constants'
import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    events: [],
    msg: null
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case ALL_EVENTS:
            console.log(action.payload.events);
            
            newState.events = action.payload.events

            break;

        case ALL_EVENTS_ERROR:
            newState.msg = "No Events yet."

            break;



       

        default:
            break;
    }
    return newState
}