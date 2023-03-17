import * as actions from "../actionType/activityType";
import { getActivityList, getInitial, getActivity, editActivity,addActivity, deleteActivity } from "../../store";
export const GetActivity=()=>actions.ACTIVITY_API({
    url:"/activity",
    method:"GET",
    onSuccess:getActivityList.type,
    onStart:getInitial.type
});

export const getIActivity=(id)=>actions.ACTIVITY_API({
    url:`/activity/${id}`,
    method:"GET",
    onSuccess:getActivity.type,
    onStart:getInitial.type
});

export const editActionActivity=(id,data)=>actions.ACTIVITY_API({
    url:`/activity/${id}`,
    method:"PUT",
    data:data,
    onSuccess:editActivity.type,
    onStart:getInitial.type
});

export const addActionActivity=(data)=>actions.ACTIVITY_API({
    url:"/activity",
    method:"POST",
    data:data,
    onSuccess:addActivity.type,
    onStart:getInitial.type
});


export const removeActivity = (id, data) => actions.ACTIVITY_API({
    url: `/activity/${id}`,
    method: "DELETE",
    data: data,
    onSuccess: deleteActivity.type,
    onStart: getInitial.type
  });