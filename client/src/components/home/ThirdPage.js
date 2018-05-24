import React, {Component} from 'react';
import {Button} from 'antd';
import Foto from '../../assets/casadetoño.jpg';

class ThirdPage extends Component{

  render(){
    return(
      <div>
        <h2 className="rec">Recomendación Semanal</h2>
      <div className="container" style={{backgroundImage: `url(${Foto})`}}>
        <div className="description">
          <div>
            <h2>Casa de Toño</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Button type={"primary"}> Reservar </Button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ThirdPage;