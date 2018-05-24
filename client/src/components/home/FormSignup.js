import React, {Component} from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {signUp} from "../../services/AuthServices";
import * as toastr from "toastr";
const FormItem = Form.Item;

class FormSignup extends Component {

  state = {
    user: {}
  };

  handleSubmit = (e) => {
    e.preventDefault()
    signUp(this.state.user)
      .then(user => {
        toastr.success('Por favor revisa tu email', '¡Cuenta creada exitosamente!');
        this.props.history.push('/login')
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
          <h2>Registrarse</h2>
          <FormItem>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" name="name" onChange={this.handleChange}  />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apellido" name="lastname" onChange={this.handleChange} />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" name="email" onChange={this.handleChange} />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" name="password1" onChange={this.handleChange} />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Repite password" name="password" onChange={this.handleChange} />
          </FormItem>
            <Button type="primary" className="login-form-button" htmlType={"submit"}> Crear cuenta </Button>
        </Form>
      </div>
    );
  }
}

export default FormSignup;

