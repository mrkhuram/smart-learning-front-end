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

            let chapters = action.payload.resp.chapter
            let chapterAll = []

            let chapterArr = []
            let obj = {
                chapterName: null,
                topics: []
            }
            if (chapters) {

                // chapters.forEach((item, ind) => {
                //     if (item.parent === null) {
                //         obj.chapterName = item
                //         chapterArr.push(item)
                //     }
                //     chapterArr.forEach((itemArr, index) => {
                //         if (itemArr._id === item.parent) {
                //             obj.topics.push(item)
                //             chapterAll.push(obj)

                //             return true

                //         }
                //     })
                //     if (chapters.length === ind + 1) {
                //         chapterArr.push(obj)
                //         return true

                //     }
                // })
                chapters.forEach((item,ind)=>{
                    if(item.course_id === item.parent){
                        console.log(item);
                        
                    }
                })

                console.log(chapterArr);



            }

            newState.allChapter = action.payload.resp.chapter
            // newState.allTopics = action.payload.resp.topics



            break;


        default:
            break;
    }
    return newState
}