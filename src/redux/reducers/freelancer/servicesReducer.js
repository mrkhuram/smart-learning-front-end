import {
    GET_ALL_FREELANCER_SERVICES,
    GET_ALL_FREELANCER_SERVICES_FAIL,
    GET_ALL_FREELANCER_GIGS,
    GET_ALL_FREELANCER_GIGS_FAIL
} from '../../constants'


let initState = {
    services: null,
    msg: "",
    gigs: []

}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_ALL_FREELANCER_SERVICES:
            return (
                newState.services = action.payload
            )

        case GET_ALL_FREELANCER_SERVICES_FAIL:
            newState.msg = "Information invalid, please check and try again."

            break;
        case GET_ALL_FREELANCER_GIGS:
            // console.log(action.payload);

            newState.gigs = action.payload.service
            break;

        case GET_ALL_FREELANCER_GIGS_FAIL:
            newState.msg = "Information invalid, please check and try again."

            break;

        default:
            break;
    }
    return newState
}