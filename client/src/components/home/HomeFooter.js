import React, {Component} from 'react';
import {Input, Icon} from 'antd';
import {Link} from 'react-router-dom';

class HomeFooter extends Component{
  render(){
    return(
      <div className="footerContainer">
        <div className="footer">
          <div>
            <p>Copyrigth DiuriVj ft mrlordlol</p>
          </div>
          <div>
            <p>Suscríbete a nuestro newslatter</p>
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" name="email" />
          </div>
          <div>
            <Link to="#" > Facebook </Link><br/>
            <Link to="#" > Twitter </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFooter;