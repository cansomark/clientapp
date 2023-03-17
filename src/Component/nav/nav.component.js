import React, { Component } from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
export class Nav extends Component {
    handelShowForm(){
        if(this.props.handelShow) {
            this.props.handelShow(true);            
        }

        if(this.props.handelShow) {           
            this.props.handelShowAdd(true);
        }
       
     }

    render(){
        return(
           <Menu inverted fixed="top">
                <Container>
                    <Menu.Item header>
                        <img src={logo} className="nav-logo"></img>
                        <NavLink to="/">
                            Reactivities
                        </NavLink> 
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/activities" name="Activities"/>
                    <Menu.Item>
                        <Button as={NavLink} to="/create-activity" positive content='Create Activity' onClick={this.handelShowForm.bind(this)}/>
                    </Menu.Item>
                </Container>
           </Menu>
        )
    }
}