import React from 'react';
import FontAwesome from 'react-fontawesome';

class SecondPage extends React.Component{
  render() {
    return (
      <div className="how">
        <div className="flex">
          <div>
            <FontAwesome name="twitch"/>
            <h2>Busca</h2>
            <p>Encuentra tu restaurante favorito</p>
          </div>
          <div>
            <FontAwesome name="edit"/>
            <h2>Reserva</h2>
            <p>Escoge tu lugar y tus alimentos</p>
          </div>
          <div>
            <FontAwesome name="cutlery"/>
            <h2>Disfruta</h2>
            <p>Tus alimentos están listos!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;