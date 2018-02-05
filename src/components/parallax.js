import React, { Component } from 'react';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let divStyle = {
      backgroundAttachment: 'fixed',
      backgroundImage: 'url(' + this.props.img + ')',
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '50vh',
      position: 'relative',
      width: '100%'
    };
    return (
      <div
        className="parallax"
        style={divStyle}
      >
      </div>
    )
  }
}

export default Parallax;
