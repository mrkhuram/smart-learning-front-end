import {combineReducers} from "redux"
import auth from './common/auth'
import InstructorReducer from './instructor/profileUpdate'
import InstituteReducer from './institute/profileUpdate'


let allReducer  = {
    auth,
    InstructorReducer,
    InstituteReducer
}

let reducers = combineReducers(allReducer)
export default reducers