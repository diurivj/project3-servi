import React, {Component} from 'react';
import FormSignup from "../home/FormSignup";

class SignupContainer extends Component{
  render(){
    return(
      <div>
        <FormSignup history={this.props.history} />
      </div>
    );
  }
}

export default SignupContainer;