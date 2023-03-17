import { createSlice } from "@reduxjs/toolkit";
import { Activity } from "../model/modelActivity";
const activitySlice=createSlice({
    name:"activity",
    initialState:{
        activityList:[],
        isLoading:false,
        activity:"",
        title:"",
        date:"",
        description:"",
        category:"",
        city:"",
        venue:""
    },
    reducers:{
        getInitial(state,action) {
            state.isLoading=true
        },
        getActivityList(state,action){
            state.activityList=action.payload
            state.isLoading=false
        },
        getActivity(state,action) {
       
            state.activity=state.activityList.filter(x=>x.id===action.payload.id); 
            if(state.activity){
                state.title=state.activity[0].title
                state.date=state.activity[0].date
                state.description=state.activity[0].description
                state.category=state.activity[0].category
                state.city=state.activity[0].city
                state.venue=state.activity[0].venue
            }
            state.isLoading=false;
        },
        editActivity(state,action){
       
            var index=state.activityList.findIndex(x=>x.id===action.payload.id)
            if(index!==-1) {              
                state.activityList[index]=action.payload
            }
            state.isLoading=false;
        },
        addActivity(state,action) {
            state.activityList.push(action.payload);
            state.isLoading=false;
        },
        deleteActivity(state,action) {           
            const filteredList =state.activityList.filter(x=>x.id!==action.payload.id)
            state.activityList=filteredList;
            state.isLoading=false;
        }


    }
});

export const {getActivityList, getInitial, getActivity, editActivity, addActivity,deleteActivity}=activitySlice.actions;
export const activityReducer=activitySlice.reducer;