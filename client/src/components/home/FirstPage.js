import React, {Component} from 'react';
import {Card, Button} from 'antd';
import './Home.css';
import FormSignup from "./FormSignup";

class FirstPage extends Component{

  goTo = () => {
    this.props.history.push('/app');
  };

  render(){
    return(
      <div style={{ background: '#ffffff', paddingTop: '1x', height: '100vh'}}>
        <div className="texto">
          <h1>RÉSERVI</h1>
          <p>No pierdas más tiempo decidiendo que comer</p>
        </div>
        <Card className="home" bordered={false}>
        <FormSignup history={this.props.history} />
        </Card>
        <div className='float' >
          <Button onClick={this.goTo} size={'large'} type={'primary'}> Ir al App </Button>
        </div>
      </div>
    );
  }
}

export default FirstPage;