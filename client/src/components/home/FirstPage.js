import React, {Component} from 'react';
import {Card} from 'antd';
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
        <FormSignup/>
        </Card>
      </div>
    );
  }
}

export default FirstPage;