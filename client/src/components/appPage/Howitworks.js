import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'antd';
import {Link} from 'react-router-dom';

const how = {
  paddingTop: '50px',
  paddingBottom: '100px',
  backgroundColor: 'white',
  width: '100',
  height: '500px'
};

const flex = {
  display: 'flex',
  width: '80%',
  margin: '0 auto',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center'
};

const div = {
  width: '350px',
  flexGrow: '1',
  margin: '20px'
};

const span = {
  color: 'darkgray',
  fontSize: '200px',
  marginBottom: '20px'
};

class Howitworks extends Component{
  render(){
    return(
      <div style={how}>
        <div>
          <h1> ¿Como funciona? </h1>
        </div>
        <div>
          <p>Usa Réservi y come en tus restaurantes favoritos sin hacer largas filas.
            Al momento de llegar al restaurante tus alimentos empiezan a prepararse</p>
        </div>
        <div style={flex}>
          <div style={div}>
            <FontAwesome name="twitch" style={span}/>
            <p>Obtén descuentos en grupos de + 10 personas</p>
          </div>
          <div style={div}>
            <FontAwesome name="twitch" style={span}/>
            <p>Divide la cuenta de forma más efectiva</p>
          </div>
          <div style={div}>
            <FontAwesome name="twitch" style={span}/>
            <p>Obtén todos los datos de tu cuenta en un simple código</p>
          </div>
          <div style={div}>
            <FontAwesome name="twitch" style={span}/>
            <p>Llega, check-in y disfruta tus alimentos</p>
          </div>
        </div>
        <Link to='/'> <Button> Inicio </Button> </Link>
      </div>
    );
  }
}

export default Howitworks;