import React, {Component} from 'react';
import {Form, Button, Cascader, TimePicker, DatePicker, Row, Col, Card, Modal} from 'antd';
import moment from 'moment';
import * as toastr from "toastr";
import {createReservation, getRestaurants} from "../../services/AdminServices";
const FormItem = Form.Item;
const format = 'HH:mm';

const options = [
  {
    value: 5,
    label: '5 personas'
  },
  {
    value: 6,
    label: '6 personas'
  },
  {
    value: 7,
    label: '7 personas'
  },
  {
    value: 8,
    label: '8 personas'
  },
  {
    value: 9,
    label: '9 personas'
  },
  {
    value: 10,
    label: '10 personas'
  },
  {
    value: 11,
    label: '11 personas'
  },
  {
    value: 12,
    label: '12 personas'
  },
  {
    value: 13,
    label: '13 personas'
  },
  {
    value: 14,
    label: '14 personas'
  },
  {
    value: 15,
    label: '+ 15 personas'
  }
];

class AppSearch extends Component{

  state = {
    restaurant: {},
    restaurants: [],
    cascade: [],
    reservation: {},
    ModalText: '¿Estás seguro de reservar?',
    visible: false,
    confirmLoading: false,
  };

  getCascade = (restaurants) => {
    const cascade = restaurants.map(res=>{
      let obj = {
        value: res._id,
        label: res.name
      };
      return obj;
    });
    this.setState({cascade});
  };

  componentWillMount(){
    getRestaurants()
      .then(restaurants => {
        this.setState({restaurants});
        this.getCascade(restaurants);
        this.toUser();
      })
      .catch(e => console.log(e))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    createReservation(this.state.reservation)
      .then(r => {
        this.showModal();
      })
      .catch(e => console.log(e));
  };

  toUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const {reservation} = this.state;
    reservation['user'] = user._id;
    this.setState({reservation});
    console.log(this.state.reservation);
  };

  onChange = (value, selected) => {
    const {reservation} = this.state;
    reservation.people = value[0];
    this.setState({reservation});
  };

  onChange1 = (time, dateString) => {
    const {reservation} = this.state;
    reservation.date = dateString;
    this.setState({reservation});
  };

  onChange2 = (time, dateString) => {
    const {reservation} = this.state;
    reservation.time = dateString;
    this.setState({reservation});
  };

  onChange3 = (value) => {
    const {reservation} = this.state;
    reservation.restaurant = value[0];
    this.setState({reservation});
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({
      ModalText: 'Buscando disponibilidad',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
      toastr.success('¡Reservación creada exitosamente!');
      this.props.history.push(`/app/menu/${this.state.reservation.restaurant}`);
    }, 2000);
  };
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render(){
    const { visible, confirmLoading, ModalText } = this.state;
    return(
      <div>
        <Row>
          <Col span={17} offset={4}>
            <div style={{width: '90%'}}>
              <Card style={{marginTop: 'calc(55% - 193px)'}}>
                <h1>Reserve en restaurantes de la manera más fácil</h1>
                <Form onSubmit={this.handleSubmit} className="login-form" layout="inline" style={{paddingTop: '50px'}}>
                  <FormItem>
                    <Cascader options={options} placeholder="5 personas" name="people" onChange={this.onChange}/>
                  </FormItem>
                  <FormItem>
                    <DatePicker onChange={this.onChange1} name="date" />
                  </FormItem>
                  <FormItem>
                    <TimePicker defaultValue={moment('09:00', format)} format={format} name="time" onChange={this.onChange2} />
                  </FormItem>
                  <FormItem>
                    <Cascader options={this.state.cascade} placeholder="Restaurante" name="restaurant" onChange={this.onChange3}/>
                  </FormItem>
                  <FormItem>
                    <Button type="primary" className="login-form-button" htmlType={"submit"} > Buscar mesa </Button>
                  </FormItem>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
        <Modal title="Reservación" visible={visible} onOk={this.handleOk} confirmLoading={confirmLoading} onCancel={this.handleCancel} >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default AppSearch;