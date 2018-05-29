import React, {Component} from 'react';
import {getMenu} from "../../services/AdminServices";
import {List, Form, Button, Cascader} from 'antd';
const FormItem = Form.Item;

class RestaurantMenu extends Component{

  state = {
    restaurant: {},
    order: [],
    cascade: [],
    orderList: []
  };

  getCascade = (restaurant) => {
    const cascade = restaurant.map(res => {
      let obj = {
        value: res.name + ' ' + res.price,
        label: res.name
      };
      return obj;
    });
    this.setState({cascade});
  };

  componentWillMount(){
    getMenu(this.props.match.params.menu)
      .then(restaurant => {
        this.setState({restaurant});
        this.getCascade(restaurant.menu);
      })
      .catch(e => console.log(e))
  }

  onChange = (value) => {
    const {order} = this.state;
    order.menu = value[0];
    console.log('order:', this.state.order);
  };

  addFood = () => {
    const {order, orderList} = this.state;
    const joined = this.state.order.concat(order);
    this.setState({ order: joined });
    orderList.push(order);
    this.setState(orderList);
    console.log('orderList:', this.state.orderList)
  };

 render(){
    return(
      <div>
        <div>
          <h2>Escoge tus alimentos</h2>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <div style={{width: '40%', textAlign: 'left', marginLeft: '30px'}}>
          <Form className="login-form" layout="inline" >
            <FormItem>
              <Cascader options={this.state.cascade} onChange={this.onChange} />
            </FormItem>
            <FormItem>
              <Button type="primary" className="login-form-button" onClick={this.addFood}> Añadir </Button>
            </FormItem>
          </Form>
        </div>
        <div style={{width: '40%', textAlign: 'left', marginLeft: '30px'}}>
          <List size="small" bordered dataSource={this.state.orderList} renderItem={food => (
            <List.Item actions={[<Button onClick={this.deleteFood}> Borrar </Button>]}>
              <List.Item.Meta title={food.menu}  />
            </List.Item>
          )}/>
        </div>
        </div>
      </div>
    );
  }
}

export default RestaurantMenu;