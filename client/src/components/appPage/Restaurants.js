import React, {Component} from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
import {getRestaurants} from "../../services/AdminServices";
const { Footer, Sider, Content } = Layout;


class Restaurants extends Component{

  state = {
    restaurants: []
  };

  componentWillMount(){
    getRestaurants()
      .then(restaurants => this.setState({restaurants}))
      .catch(e => console.log(e))
  }

  render(){
    return(
      <div>
        <h1 style={{paddingTop: '10px'}}>Restaurants</h1>
        {this.state.restaurants.map(restaurant => {
          return (
            <div style={{ padding: '30px' }}>
              <Layout>
                <Sider> <img alt={restaurant.name} src={restaurant.photo} style={{width: '300px', height: '200px'}} /> </Sider>
                <Layout>
                  <Content> <h2 style={{ paddingTop: '10px', textAlign: 'left', marginLeft: '120px' }}> {restaurant.name} </h2> <br/> <p style={{ textAlign: 'left', marginLeft: '120px' }}> {restaurant.desc} </p> </Content>
                  <Footer style={{ textAlign: 'left', marginLeft: '70px' }}>
                    <Button type="primary">09:00</Button> <Button type="primary">10:00</Button> <Button type="primary">11:00</Button> <Button type="primary">12:00</Button> <Button type="primary">13:00</Button> <Button type="primary">14:00</Button> <Button type="primary">15:00</Button> <Button type="primary">16:00</Button> <Button type="primary">17:00</Button> <Button type="primary">18:00</Button> <Button type="primary">19:00</Button> <Button type="primary">20:00</Button> <Button type="primary">21:00</Button>
                  </Footer>
                </Layout>
              </Layout>
            </div>
          )
        })}
       <Link to='/'> <Button> Inicio </Button> </Link>
      </div>
    );
  }
}

export default Restaurants;