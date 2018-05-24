import React, {Component} from 'react';
import { Form, Icon, Input, Button} from 'antd';
const FormItem = Form.Item;

class FormSignup extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h2>Registrarse</h2>
          <FormItem>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" name="name" />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apellido" name="lastname" />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" name="email" />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" name="password1"/>
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Repite password" name="password"/>
          </FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button"> Crear cuenta </Button>
        </Form>
      </div>
    );
  }
}

export default FormSignup;

