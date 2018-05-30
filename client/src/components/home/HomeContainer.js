import React, {Component} from 'react';
import HomeNavbar from "./HomeNavbar";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

class HomeContainer extends Component{
  render(){
    return (
      <div>
        <HomeNavbar history={this.props.history} />
        <FirstPage  history={this.props.history} />
        <SecondPage />
        <ThirdPage history={this.props.history} />
      </div>
    );
  }
}

export default HomeContainer;