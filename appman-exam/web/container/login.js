import React, { Component } from "react";
import Style from './web/styles/index.scss';
import axios from '../../../lib/axios';
import { Form } from "formsy-semantic-ui-react";
import {Grid, Segment, Portal } from 'semantic-ui-react';
import Cookies from 'js-cookie';
import LoginForm from "../../component/loginForm";
import server from "../../server/index.js";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }


  handleOnChange = (field, e) => {
    this.setState({ [field]: e });
  };

  handleSubmit = async ()=>{
   const resp =  await axios.post('/api/login',{
        password:this.state.password,
        email:this.state.email
    })
  }

  // handleClick = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })




  render() {
    const { open,redirect } = this.state
    if(redirect && Cookies.get('user') !== undefined){
      window.location.replace("/main");
    }
    return (
      <div>
        <Grid columns={2}>
        <Grid.Column>
          <Portal onClose={()=>this.handleClose()} open={open}>
            <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
              <p>ผู้ใช้หรือรหัสผ่านไม่ถูกต้อง</p>
            </Segment>
          </Portal>
        </Grid.Column>
      </Grid>
      <div className="loginForm">
      <center>
      <p>เข้าสู่ระบบ</p>
      </center>
        <Form onSubmit={this.handleSubmit}>
          <LoginForm 
         handleOnChange = {this.handleOnChange}
          />
        </Form>
        </div>
      </div>
    );
  }
}

export default Login;
