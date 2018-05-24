import React, {Component} from 'react';
import LoginForm from "./LoginForm";

class LoginContainer extends Component{
  render(){
    return(
      <div>
        <LoginForm history={this.props.history}/>
      </div>
    );
  }
}

export default LoginContainer;