import axios from 'axios'
import {baseURL} from '../config/config'
import {
    REGISTER,
    INVALID_INFORMATION,
    LOGIN,
    PROFILE
} from '../constants' 
import { toast } from "react-toastify";




export const registerUser = (body,user)=>{
    return dispatch =>{
        console.log(body,user);
        
        axios.post(baseURL + '/api/'+ user +'/auth/register',body)
        .then(resp => {
            if(resp){
                dispatch({
                    type: REGISTER,
                    payload: {resp: resp.data.data, type: user}
                })
            }    
        })
        .catch(err => {
            dispatch({
                type: INVALID_INFORMATION,
                payload: err
            })
        })

    }
}



export const signIn = (body,user)=>{ 
    return dispatch =>{
        console.log(body,user);
        
        axios.post(baseURL + '/api/'+ user +'/auth/login',body)
        .then(resp => {
            if(resp){
                toast.success(resp.data.message)
                console.log(resp);
                dispatch({
                    type: LOGIN, 
                    payload: {resp: resp.data.data, type: user}
                })
            }    
        })
        .catch(err => {
            
            if(err) toast.error("Internal Server Error")
            
            

            dispatch({
                type: INVALID_INFORMATION,
                payload: err
            })
        })

    }
}

// export const loadProfile = (body)=>{
//     return dispatch =>{
//         console.log(body);
        
//         axios.post(baseURL + '/api/institute/auth/load',body)
//         // axios.get(baseURL + '/profile')
//         .then(resp => {
//             if(resp){
//                 console.log(resp);
//                 dispatch({
//                     type: PROFILE,
//                     payload: resp.data
//                 })
//             }    
//         })
//         .catch(err => {
//             dispatch({
//                 type: INVALID_INFORMATION,
//                 payload: err
//             })
//         })

//     }
// }

