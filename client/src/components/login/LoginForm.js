import React, {Component} from 'react';
import {Form, Icon, Input, Button, Divider, } from 'antd';
import {logIn} from "../../services/AuthServices";
import {Link} from 'react-router-dom';
import './Login.css'
import firebase from '../../firebase';

const FormItem = Form.Item;

class LoginForm extends Component {

  state = {
    user: {}
  };

  componentWillMount() {
    firebase.auth().getRedirectResult()
      .then(result => {
        if(!result.user) return;
        console.log(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
        this.props.history.push('/profile')
      })
      .catch(e => console.log(e));
  }

  loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    logIn(this.state.user)
      .then(user => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(localStorage.getItem('user'));
        this.setState({user:{}});
        if(user.role !== 'MASTERMIND') return this.props.history.push('/profile');
          return this.props.history.push('/mastermind');
      })
      .catch(e => console.log(e))
  };

  handleChange = (e) => {
    const {user} = this.state;
    const field = e.target.name;
    user[field] = e.target.value;
    this.setState({user});
  };

  render() {
    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h2>Inicia Sesión</h2>
          <FormItem>
            <Button className="redes" type="primary" shape="circle" icon="facebook" size="large" />
            <Button className="redes" type="primary" shape="circle" icon="google-plus" size="large" onClick={this.loginWithGoogle} />
          </FormItem>
          <Divider>O</Divider>
          <FormItem>
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" name="email" onChange={this.handleChange} />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" name="password" onChange={this.handleChange} />
          </FormItem>
          <Button type="primary" className="login-form-button" htmlType={"submit"}> Iniciar Sesión </Button>
          <FormItem>
            ¿No tienes cuenta aún?
          </FormItem>
          <FormItem>
            <Link to="/signup"> ¡Registraté! </Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default LoginForm;

