import React, { Component } from 'react';

// Images
import Img5 from '../static/images/5.jpg';
import Img6 from '../static/images/6.jpg';

// Components
import Salad from './salad';
import NoodleSoup from './noodlesoup';
import KidsMeal from './kidsmeal';
import Customize from './customize';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 'customize'
    };
    this.setItem = this.setItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  setItem = (item) => {
    this.setState({currentItem: item});
  }

  renderItem(item) {
    switch(item) {
      case 'salad':
        return <Salad />
      case 'noodlesoup':
        return <NoodleSoup />
      case 'kidsmeal':
        return <KidsMeal />
      case 'customize':
        return <Customize />
      default:
        return <Salad />
    }
  }

  render() {
    return (
      <div id="menu" className="menu-section container">
        <div className="menu-banner">
          <img src={Img5} alt="left-banner"/>
        </div>
        <div className="menu">
          <div className="menu-display">
            {this.renderItem(this.state.currentItem)}
          </div>
        </div>
        <div className="menu-banner">
          <img src={Img6} alt="right-banner" />
        </div>
      </div>
    )
  }
}

export default Menu;
