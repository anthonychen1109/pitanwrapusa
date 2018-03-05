import React, { Component } from 'react';
import $ from 'jquery';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.dropdownMenu = this.dropdownMenu.bind(this);
  }

  dropdownMenu() {
    let x = document.getElementById('dropdownClick');
    if (x.className === 'topnav') {
      x.className = 'responsive animated slideInDown';
    } else {
      x.className = 'topnav';
    }
  }

  goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'fast');
  }

  render() {
    return (
      <nav>
        <ul className="topnav" id="dropdownClick">
          <li className="logo"><a href="/">Pita & Wrap</a></li>
          <li><span onClick={() => this.goToByScroll('about')}>About</span></li>
          <li><span onClick={() => this.goToByScroll('menu')}>Menu</span></li>
          <li><span data-glf-cuid="5aac8e66-7ca3-4cde-903b-c1cc04f35b48" data-glf-ruid="95a517d9-d1ef-4165-a74e-cfcd76b2bd07">Order Online</span></li>
          <li><span onClick={() => this.goToByScroll('contact')}>Contact</span></li>
          <li id="test" className="dropdownIcon">
            <a href="javascript:void(0);"
              onClick={this.dropdownMenu}
              >
              &#9776;
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
