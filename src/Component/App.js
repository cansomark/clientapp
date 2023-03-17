import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, List } from "semantic-ui-react";
import { GetActivity, getIActivity, removeActivity } from "../store";
import { Dashboard } from "./dashboard/dashboardActivity";
import { HomePage } from "./home/home";
import { ActivityLayout } from "./layout/activityLayout";
import { Nav } from "./nav/nav.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      showForm:false,
      showAdd: false,
      selectedId:0,
      loading:false
    }
  }
  async componentDidMount(){
    this.setState({loading:true})
    try {
      await this.props.dispatch(GetActivity());
    } catch (error) {
      console.log(error)
    }finally{
      this.setState({loading:false})
    }
    
  }

  handelSelectedActivity(id){    
    this.props.dispatch(getIActivity(id))
    this.setState({selectedId:id})
    this.setState({showForm:false})
  }

  handelShowForm(value){
    this.setState({showForm:value})
  }

  handelShowAdd(value){
    this.setState({showAdd:value})
  }
 async handelDeleteActivity(id){
    await this.props.dispatch(removeActivity(id));
    await this.props.dispatch(GetActivity());
  }
  render(){
    if(this.state.loading)
    {
      return <h1>Data is Loading...</h1>
    }
   
    return(
      <>
        <ActivityLayout handelShow={this.handelShowForm.bind(this)} handelShowAdd={this.handelShowAdd.bind(this)} >
            <Dashboard activity={this.props.activity} activityList={this.props.activityList} loading={this.props.loading} 
              selectedActivity={this.handelSelectedActivity.bind(this)} visibleForm={this.state.showForm} 
              handelShow={this.handelShowForm.bind(this)} title={this.props.title} date={this.props.date} description={this.props.description}
              category={this.props.category} city={this.props.city} venue={this.props.venue} selectedId={this.state.selectedId} 
              delete={this.handelDeleteActivity.bind(this)} showAdd={this.state.showAdd} handelShowAdd={this.handelShowAdd.bind(this)}
              />
        </ActivityLayout>
      </>
    )
  }
}

const mapStateToProps=(state)=>({
  activityList:state.activityReducer.activityList,
  loading:state.activityReducer.isLoading,
  activity:state.activityReducer.activity,
  title:state.activityReducer.title,
  date:state.activityReducer.date,
  description:state.activityReducer.description,
  category:state.activityReducer.category,
  city:state.activityReducer.city,
  venue:state.activityReducer.venue
})

const mapDispatchToProps=(dispatch)=>({
  dispatch
})

export default connect(mapStateToProps,mapDispatchToProps)(App)