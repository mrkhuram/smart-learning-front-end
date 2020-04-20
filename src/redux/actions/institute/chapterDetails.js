import axios from 'axios'
import {baseURL} from "../../config/config"
import {
    COURSE_ADDED,
    ERROR,
    ALL_CHAPTER
} from '../../constants'



export const addNewChapter = (body,user)=>{
    return dispatch =>{
        // console.log(body,user);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }


        let formData = new FormData();        
        // console.log(data);

        for(var item in body){            
            
            formData.append(item, body[item]);

        }
        axios.post(baseURL + '/api/'+ user +'/chapter',formData, config)
        .then(resp => {
            console.log(resp);
            
            if(resp){
                dispatch({
                    type: COURSE_ADDED,
                    payload: {resp: resp.data.data, type: user}
                })
            }    
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })

    }
}


export const getAllChapter = (body,user)=>{
    return dispatch =>{

        // body = {"institute_id": "5e9d4a5eab438002fc7d97df"} for demo 
        
        axios.post(baseURL + '/api/'+ user +'/chapter/getmany',body)
        .then(resp => {
            console.log(resp);
            
            if(resp){
                dispatch({
                    type: ALL_CHAPTER,
                    payload: {resp: resp.data.data, type: user}
                })
            }    
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })

    }
}
