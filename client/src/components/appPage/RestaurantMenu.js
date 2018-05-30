import React, {Component} from 'react';
import {finishReservation, getMenu} from "../../services/AdminServices";
import {List, Form, Button, Cascader, Modal} from 'antd';
const FormItem = Form.Item;

class RestaurantMenu extends Component{

  state = {
    restaurant: {},
    order: [],
    cascade: [],
    menu: []
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
    const {order, menu} = this.state;
    const joined = this.state.order.concat(order);
    this.setState({ order: joined });
    menu.push(order);
    this.setState(menu);
    console.log('menu:', this.state.menu)
  };

  finishReservation = () => {
    const {menu} = this.state;
    finishReservation(this.props.match.params.menu, menu)
      .then(reservation => {
        this.success();
        console.log('reservation',reservation);
      })
      .catch(e => console.log(e))
  };

  success = () => {
    const modal = Modal.success({
      title: 'Reservación finalizada',
      content: 'Acuda al restaurante reservado en hora establecida y con una identificación oficial',
    });
    setTimeout(() => {
      modal.destroy();
      this.props.history.push('/profile')
    }, 2000);
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
          <List size="small" bordered dataSource={this.state.menu} renderItem={food => (
            <List.Item actions={[<Button onClick={this.deleteFood}> Borrar </Button>]}>
              <List.Item.Meta title={food.menu}  />
            </List.Item>
          )}/>
          <div style={{paddingTop: '10px'}}>
            <Button type="primary" onClick={this.finishReservation}> Finalizar pedido </Button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default RestaurantMenu;