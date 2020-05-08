import {combineReducers} from "redux"
import auth from './common/auth'
import InstructorReducer from './instructor/profileUpdate'
import InstituteReducer from './institute/profileUpdate'
import CourseReducer from './institute/courseDetailReducer'
import ChapterReducer from './institute/chapterReducer'
import DegreeReducer from './institute/degreesReducer'


let allReducer  = {
    auth,
    InstructorReducer,
    InstituteReducer,
    CourseReducer,
    ChapterReducer,
    DegreeReducer
}

let reducers = combineReducers(allReducer)
export default reducers