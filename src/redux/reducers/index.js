import {combineReducers} from "redux"
import auth from './common/auth'
import InstructorReducer from './instructor/profileUpdate'
import InstituteReducer from './institute/profileUpdate'
import CourseReducer from './institute/addCourseReducer'

let allReducer  = {
    auth,
    InstructorReducer,
    InstituteReducer,
    CourseReducer
}

let reducers = combineReducers(allReducer)
export default reducers