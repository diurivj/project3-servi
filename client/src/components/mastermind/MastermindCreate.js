import React, {Component} from 'react';
import {Form, Input, Button} from 'antd';
import {createRestaurant} from "../../services/AdminServices";
import * as toastr from "toastr";
const FormItem = Form.Item;
const { TextArea } = Input;


class MastermindCreate extends Component{

  state = {
    restaurant: {}
  };

  handleSubmit = (e) => {
    e.preventDefault();
    createRestaurant(this.state.restaurant)
      .then(r => {
        toastr.success('Restaurante creado');
        this.props.history.push('/mastermind');
        console.log(r);
      })
      .catch(e => console.log(e));
  };

  handleChange = (e) => {
    const {restaurant} = this.state;
    const field = e.target.name;
    restaurant[field] = e.target.value;
    this.setState({restaurant});
  };

  render(){
    return(
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h2>Crear Restaurante</h2>
          <FormItem>
            <Input placeholder="Nombre" onChange={this.handleChange} name="name" />
          </FormItem>
          <FormItem>
            <Input placeholder="Price" onChange={this.handleChange} name="price"/>
          </FormItem>
          <FormItem>
            <TextArea rows={4} onChange={this.handleChange} name="desc" />
          </FormItem>
          <Button type="primary" className="login-form-button" htmlType={"submit"}> Crear Restaurante </Button>
        </Form>
      </div>
    );
  }
}

export default MastermindCreate;