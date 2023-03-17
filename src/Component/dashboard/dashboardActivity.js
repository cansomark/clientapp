import React, {Component} from "react";
import { Grid, List } from "semantic-ui-react";
import { ActivityDetails } from "../details/detailsActivity";
import  ActivityForm from "../form/ActivityForm";
import ActivityList  from "./activityList";

export class Dashboard extends Component {
    render(){
        return(
            <Grid>
                <Grid.Column width='10'>
                   <ActivityList delete={this.props.delete} activityList={this.props.activityList} selectedActivity={this.props.selectedActivity}/>
                </Grid.Column >
                <Grid.Column width='6'>
                    {
                        this.props.activity && !this.props.visibleForm &&
                            <ActivityDetails activity={this.props.activity} loading={this.props.loading} handelShow={this.props.handelShow} handelShowAdd={this.props.handelShowAdd}/>
                    }
                    {
                        this.props.visibleForm &&
                        <ActivityForm selectedId={this.props.selectedId} 
                        title={this.props.title} date={this.props.date} 
                        description={this.props.description}
                        category={this.props.category} city={this.props.city} 
                        venue={this.props.venue} showAdd={this.props.showAdd} 
                        handelShow={this.props.handelShow}
                        />
                    }
                   
                    
                </Grid.Column>
            </Grid>            
        )

    }
}