import React, {Component} from 'react';
import {Button} from 'antd';
import Foto from '../../assets/casadetoño.jpg';

class ThirdPage extends Component{

  goTo = () => {
    this.props.history.push('/app');
  };

  render(){
    return(
      <div>
        <h2 className="rec">Recomendación Semanal</h2>
      <div className="container" style={{backgroundImage: `url(${Foto})`}}>
        <div className="description" style={{borderRadius: '5%'}}>
          <div>
            <h2>Casa de Toño</h2>
            <p>Somos un restaurante de comida mexicana casera de gran tradición. Contamos con 43 sucursales en la Ciudad de México y Área Metropolitana, ofrecemos mucho sabor en todos nuestros platillos, incluyendo el ya famoso pozole, todo esto con un gran servicio.</p>
            <Button type={"primary"} onClick={this.goTo}> Reservar </Button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ThirdPage;