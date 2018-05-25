import React, {Component} from 'react';
import {Form, Input, Button, Cascader, Icon, Upload, TimePicker, InputNumber} from 'antd';
import {createRestaurant} from "../../services/AdminServices";
import * as toastr from "toastr";
import moment from 'moment';
const FormItem = Form.Item;
const { TextArea } = Input;

const format = 'HH:mm';
const options = [
  {
    value: 1,
    label: 'Muy barato'
  },
  {
    value: 2,
    label: 'Barato'
  },
  {
    value: 3,
    label: 'Regular'
  },
  {
    value: 4,
    label: 'Costoso'
  },
  {
    value: 5,
    label: 'Muy costoso'
  }
];

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
            <label>Place's name</label>
            <Input placeholder="Nombre" onChange={this.handleChange} name="name" />
          </FormItem>
          <FormItem>
            <label>Price</label>
            <Cascader options={options} placeholder="Price" name="price" />
          </FormItem>
          <FormItem>
            <label>Open Hour</label> <br/>
            <TimePicker defaultValue={moment('00:00', format)} format={format} name="openTime" />
          </FormItem>
          <FormItem>
            <label>Close Hour</label> <br/>
            <TimePicker defaultValue={moment('12:00', format)} format={format} name="closeTime" />
          </FormItem>
          <FormItem>
            <label>Capacity</label> <br/>
            <InputNumber min={1} max={200} defaultValue={50} name="available" />
          </FormItem>
          <FormItem>
            <label>Description</label>
            <TextArea rows={4} onChange={this.handleChange} name="desc" />
          </FormItem>
          <FormItem>
            <Upload  action="/upload.do" listType="picture" name="photo">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          </FormItem>
          <Button type="primary" className="login-form-button" htmlType={"submit"}> Crear Restaurante </Button>
        </Form>
      </div>
    );
  }
}

export default MastermindCreate;