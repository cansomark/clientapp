import React, { Component} from "react";
import { Button, Card, Icon, Image } from 'semantic-ui-react';
export class ActivityDetails extends Component {
    constructor(props){
        super(props);
        
    }
    handelShowForm(){
       this.props.handelShow(true);
       this.props.handelShowAdd(false);
    }
    handelCloseForm(){
        this.props.handelShow(false);
    }
    render(){  
        return(
                <>
                {
                    this.props.activity.map((activity,index)=>
                        <Card fluid key={index}>
                        <Image src={`../../assets/categoryImages/${activity.category}.jpg`} />
                        <Card.Content>
                        <Card.Header>{activity.title}</Card.Header>
                        <Card.Meta>{activity.date}</Card.Meta>
                        <Card.Description>
                            {activity.description}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button basic color='blue' content='Edit' onClick={this.handelShowForm.bind(this)}/>
                            <Button basic color='grey' content='Cancel' onClick={this.handelCloseForm.bind(this)}/>
                        </Card.Content>   
                    </Card>            
                    )
                }
                </>
        )
    }
}