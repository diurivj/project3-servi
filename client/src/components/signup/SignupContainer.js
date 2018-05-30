import React, {Component} from 'react';
import FormSignup from "../home/FormSignup";
import photo from '../../assets/food_spices_2560x1600.jpg';

class SignupContainer extends Component{
  render(){
    return(
      <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', height: '100vh' }}>
        <div style={{width: '55%', backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }} > </div>
        <div style={{ width: '35%', alignSelf: 'center',  marginLeft: '50px'}}>
          <FormSignup history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default SignupContainer;