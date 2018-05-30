import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Icon} from 'antd'

class SecondPage extends React.Component{
  render() {
    return (
      <div className="how">
        <div className="flex">
          <div>
            <FontAwesome name="search"/>
            <h2>Busca</h2>
            <p>Encuentra el restaurante perfecto</p>
          </div>
          <div>
            <FontAwesome name="bookmark"/>
            <h2>Reserva</h2>
            <p>Revisa la disponibilidad y ¡escoge tu comida!</p>
          </div>
          <div>
            <Icon type="smile-o" style={{ fontSize: 150, color: '#1890ff' }} />
            <h2>Disfruta</h2>
            <p>Llega al lugar y tus alimentos ya estarán cocinandose</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;