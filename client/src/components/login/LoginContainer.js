import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import photo from '../../assets/Sweets_Ice_cream_Raspberry_Chocolate_Food_dessert_5616x3737.jpg';

class LoginContainer extends Component{

  componentWillMount() {
    if (localStorage.getItem('user'))
      return this.props.history.push('/profile');
  }

  render(){
    return(
      <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', height: '100vh' }}>
        <div style={{width: '55%', backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
        </div>
        <div style={{ width: '35%', alignSelf: 'center',  marginLeft: '50px'}}>
          <LoginForm history={this.props.history}/>
        </div>
      </div>
    );
  }
}

export default LoginContainer;