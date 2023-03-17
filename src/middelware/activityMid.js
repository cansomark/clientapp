import * as actions from "../action/actionType/activityType";
import axios from "axios";
export const ActivityApi=({dispatch})=>next=>async action=> {
   
    if(action.type!==actions.ACTIVITY_API.type) return next(action);

    const {url,method,data,onSuccess,onError,onStart}=action.payload;

    if(onStart) dispatch({type:onStart})
    next(action)
    try{
        const responce=await axios.request({
            baseURL:"http://localhost:5000/api",
            url,
            data,
            method,
            onSuccess,
            onError
        })
        dispatch({type:onSuccess, payload: responce.data})
        
    }catch(error){
        dispatch({type:onError, payload:error})
       
    }
}