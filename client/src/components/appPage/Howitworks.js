import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import { Button, Icon } from 'antd';
import {Link} from 'react-router-dom';

const how = {
  paddingTop: '50px',
  paddingBottom: '150px',
  backgroundColor: '#ECECEC',
  width: '100',
  height: '100%'
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

class Howitworks extends Component{
  render(){
    return(
      <div style={how}>
        <div>
          <h1> ¿Como funciona? </h1>
        </div>
        <div style={{  paddingBottom: '20px'}}>
          <h3 style={{ fontSize: 20 }}>Usa Réservi y come en tus restaurantes favoritos sin hacer largas filas.<br/>
            Al momento de llegar, tus alimentos empiezan a prepararse.
          </h3>
        </div>
        <div style={flex}>
          <div style={div}>
            <Icon type="gift" style={{ fontSize: 150, color: 'red' }} />
            <p style={{ fontSize: 20 }}>Obtén descuentos en grupos de + 10 personas</p>
          </div>
          <div style={div}>
            <Icon type="pie-chart" style={{ fontSize: 150, color: '#08c' }} />
            <p style={{ fontSize: 20 }}>Divide la cuenta de forma más efectiva</p>
          </div>
          <div style={div}>
            <Icon type="qrcode" style={{ fontSize: 150, color: 'black' }} />
            <p style={{ fontSize: 20 }}>Obtén todos los datos de tu cuenta en un simple código</p>
          </div>
          <div style={div}>
            <Icon type="check" style={{ fontSize: 150, color: 'green' }} />
            <p style={{ fontSize: 20 }}>Llega, haz check-in y disfruta tus alimentos</p>
          </div>
        </div>
        <Link to='/'> <Button> Inicio </Button> </Link>
      </div>
    );
  }
}

export default Howitworks;