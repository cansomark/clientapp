import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { removeActivity, getActivity } from "../../store";

class ActivityList extends Component {
    constructor(props){
        super(props);
        this.getSelectedId=this.getSelectedId.bind(this)
    }
    getSelectedId(id){
        
        this.props.selectedActivity(id)
    }
   async removeData(id){
      this.props.delete(id)   
    }
    render(){
        return(
            <Segment>
                <Item.Group divided>
                        {this.props.activityList.map((activity,index)=>
                            <Item key={index}>
                                <Item.Content>
                                    <Item.Header as="a">{activity.title}</Item.Header>
                                    <Item.Meta>{activity.data}</Item.Meta>
                                    <Item.Description>
                                        <div>{activity.description}</div>
                                        <div>{activity.city}, {activity.venue}</div>
                                    </Item.Description>
                                    <Item.Extra>
                                        <Button onClick={()=>this.getSelectedId(activity.id)} floated="right" content="view" color="blue"/>
                                        <Button onClick={()=>this.removeData(activity.id)} floated="right" content="delete" color="red"/>
                                        <Label basic content={activity.category} />
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        )}
                </Item.Group>
            </Segment>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    dispatch
})

export default connect(mapDispatchToProps)(ActivityList);