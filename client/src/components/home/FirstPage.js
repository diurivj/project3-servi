import React, {Component} from 'react';
import {Card, Button} from 'antd';
import {Link} from 'react-router-dom';
import './Home.css';
import FormSignup from "./FormSignup";

class FirstPage extends Component{
  render(){
    return(
      <div style={{ background: '#ffffff', paddingTop: '1x', height: '100vh'}}>
        <div className="texto">
          <h1>RÉSERVI</h1>
          <p>No pierdas más tiempo decidiendo que comer</p>
        </div>
        <Card className="home" bordered={false}>
        <FormSignup history={this.props.history}/>
        </Card>
        <Link to='/'> <Button> Ir al App </Button> </Link>
      </div>
    );
  }
}

export default FirstPage;