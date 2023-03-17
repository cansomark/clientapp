import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Nav } from "../nav/nav.component";

export class ActivityLayout extends Component {
   
    render(){
        return(
            <>
            <Nav handelShow={this.props.handelShow} handelShowAdd={this.props.handelShowAdd}/>
            <div>       
                <Container style={{marginTop: '7em'}}>
                   {this.props.children}
                </Container>
            </div>
            </>
        )
    }
}