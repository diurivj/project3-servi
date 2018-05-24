import React, {Component} from 'react';
import HomeNavbar from "./HomeNavbar";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import HomeFooter from "./HomeFooter";

class HomeContainer extends Component{
  render(){
    return (
      <div>
        <HomeNavbar/>
        <FirstPage/>
        <SecondPage/>
        <ThirdPage/>
        <HomeFooter/>
      </div>
    );
  }
}

export default HomeContainer;