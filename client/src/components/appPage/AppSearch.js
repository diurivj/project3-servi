import React, {Component} from 'react';
import {Form, Button, Cascader, TimePicker, DatePicker, Row, Col, Card} from 'antd';
import moment from 'moment';
import {getRestaurants} from "../../services/AdminServices";
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

function onChange(date, dateString) {
  console.log(date, dateString);
}

class AppSearch extends Component{

  state = {
    restaurant: {},
    restaurants: [],
    cascade: []
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
        console.log(this.state.restaurants);
      })
      .catch(e => console.log(e))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    /*createRestaurant(this.state.restaurant)
      .then(r => {
        toastr.success('Restaurante creado');
        this.props.history.push('/mastermind');
        console.log(r);
      })
      .catch(e => console.log(e));*/
  };

  render(){
    return(
      <div>
        <Row>
          <Col span={17} offset={4}>
            <div style={{width: '90%'}}>
              <Card style={{marginTop: 'calc(55% - 193px)'}}>
                <h1>Reserve en restaurantes de la manera más fácil</h1>
                <Form onSubmit={this.handleSubmit} className="login-form" layout="inline" style={{paddingTop: '50px'}}>
                  <FormItem>
                    <Cascader options={options} placeholder="5 personas" name="people" />
                  </FormItem>
                  <FormItem>
                    <DatePicker onChange={onChange} name="date" />
                  </FormItem>
                  <FormItem>
                    <TimePicker defaultValue={moment('09:00', format)} format={format} name="time" />
                  </FormItem>
                  <FormItem>
                    <Cascader options={this.state.cascade} placeholder="Restaurante" name="restaurant" />
                  </FormItem>
                  <FormItem>
                    <Button type="primary" className="login-form-button" htmlType={"submit"}> Buscar mesa </Button>
                  </FormItem>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppSearch;