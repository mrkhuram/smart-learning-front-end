import {combineReducers} from "redux"
import auth from './common/auth'
import InstructorReducer from './instructor/profileUpdate'
import InstituteReducer from './institute/profileUpdate'
import CourseReducer from './institute/courseDetailReducer'
import ChapterReducer from './institute/chapterReducer'

let allReducer  = {
    auth,
    InstructorReducer,
    InstituteReducer,
    CourseReducer,
    ChapterReducer
}

let reducers = combineReducers(allReducer)
export default reducers