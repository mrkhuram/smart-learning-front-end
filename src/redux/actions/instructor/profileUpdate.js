import axios from 'axios'
import {baseURL} from "../../config/config"
import {
    PROFILE_UPDATED_INSTRUCTOR,
    INVALID_INFORMATION
} from '../../constants'



export const updateProfileInstructor = (body,user)=>{
    return dispatch =>{
        console.log(body,user);
        
        axios.post(baseURL + '/api/'+ user +'/updateinstructor/',body)
        .then(resp => {
            if(resp){
                dispatch({
                    type: PROFILE_UPDATED_INSTRUCTOR,
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




// export const signIn = (body,user)=>{
//     return dispatch =>{
//         console.log(body,user);
        
//         axios.post(baseURL + '/api/'+ user +'/auth/login',body)
//         .then(resp => {
//             if(resp){
//                 console.log(resp);
//                 dispatch({
//                     type: LOGIN,
//                     payload: {resp: resp.data, type: user}
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


