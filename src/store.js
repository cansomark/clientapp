import { configureStore } from "@reduxjs/toolkit";
import { ActivityApi } from "./middelware/activityMid";
import { activityReducer, getActivityList, getInitial, getActivity, editActivity, addActivity,deleteActivity } from "./slice/activitySlice";
import { GetActivity,getIActivity, editActionActivity, addActionActivity,removeActivity } from "./action/actionCreator/activityAction";
export const store=configureStore({
    reducer:{
        activityReducer
    },
    middleware:[ActivityApi]
    
})

export {getActivityList,removeActivity, GetActivity, getIActivity, getInitial, getActivity, editActivity, editActionActivity, addActivity, addActionActivity, deleteActivity};