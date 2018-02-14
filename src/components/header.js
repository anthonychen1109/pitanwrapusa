import React from 'react';

// Images
import Logo from '../static/images/logo.png';

const Header = () =>
  <div className="header">
    <div className="header-logo">
      <img src={Logo} alt="logo"/>
      <div className="order-btn">
        <p className="glf-button" data-glf-cuid="5aac8e66-7ca3-4cde-903b-c1cc04f35b48" data-glf-ruid="95a517d9-d1ef-4165-a74e-cfcd76b2bd07"> See MENU & Order</p>
      </div>
    </div>
  </div>

export default Header;
