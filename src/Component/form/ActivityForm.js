import React, {Component} from "react";
import { connect } from "react-redux";
import { Button, Form, Segment } from "semantic-ui-react";
import { editActionActivity,GetActivity, addActionActivity } from "../../store";
import { ActivityLayout } from "../layout/activityLayout";

class ActivityForm extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            activity:{
                title: this.props.title,
                date: this.props.date,
                description: this.props.description,
                category: this.props.category,
                city: this.props.city,
                venue: this.props.venue,
            },
        }
    }

    handelChange(events){
        const {name, value}=events.target;
        this.setState({activity:{ ...this.state.activity, [name]: value }})   
           
    }

    async handelSave(){
        this.setState({loading:true})
        try {
            if(this.props.showAdd)
            {
                await this.props.dispatch(addActionActivity(this.state.activity))
                this.props.handelShow(false)
            } else 
            {
                await this.props.dispatch(editActionActivity(this.props.selectedId,this.state.activity))
            }
            await this.props.dispatch(GetActivity())
        } catch (error) {
            console.log(error)
        } finally{
            this.setState({loading:false})
        }
    }


    componentDidUpdate(prevProps) {
        if (this.props.showAdd !== prevProps.showAdd) {
          this.setState({
            activity: {
              title: "",
              date: "",
              description: "",
              category: "",
              city: "",
              venue: "",
            },
            showAdd: this.props.showAdd,
          });
        }
      }
   

    render(){
        if (this.state.loading){
            return <h4>Loading...</h4>
        }
       

        return(
            <ActivityLayout >
                 <Segment clearing>
                    <Form>
                        <Form.Input name="title" placeholder="Title" value={this.state.activity.title} onChange={this.handelChange.bind(this)} />
                        <Form.TextArea name="description" placeholder="Description" value={this.state.activity.description} onChange={this.handelChange.bind(this)}/>
                        <Form.Input name="category" placeholder="Category" value={this.state.activity.category} onChange={this.handelChange.bind(this)}/>
                        <Form.Input name="date" placeholder="Date" value={this.state.activity.date} onChange={this.handelChange.bind(this)}/>
                        <Form.Input name="city" placeholder="City" value={this.state.activity.city} onChange={this.handelChange.bind(this)}/>
                        <Form.Input name="venue" placeholder="Venue" value={this.state.activity.venue} onChange={this.handelChange.bind(this)} />
                        <Button floated="right" positive type="submit" content="Submit" onClick={this.handelSave.bind(this)} />
                        <Button floated="right" positive type="button" content="Cancel" />
                    </Form>
                </Segment>
            </ActivityLayout>
        )
    }
}


const mapDispatchToProps=(dispatch)=>({
    dispatch
})
export default connect(null,mapDispatchToProps)(ActivityForm)