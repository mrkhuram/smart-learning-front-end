import { combineReducers } from "redux"
import auth from './common/auth'
import InstructorReducer from './instructor/profileUpdate'
import InstituteReducer from './institute/profileUpdate'
import CourseReducer from './institute/courseDetailReducer'
import ChapterReducer from './institute/chapterReducer'
import DegreeReducer from './institute/degreesReducer'
import EventReducer from './institute/eventsReducer'
import FreelancerServices from './freelancer/servicesReducer'

let allReducer = {
    auth,
    InstructorReducer,
    InstituteReducer,
    CourseReducer,
    ChapterReducer,
    DegreeReducer,
    EventReducer,
    FreelancerServices
}

let reducers = combineReducers(allReducer)
export default reducers