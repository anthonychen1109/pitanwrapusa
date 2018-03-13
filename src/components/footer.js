import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
   zIndex            : 9999,
   position          : 'fixed',
   top               : 0,
   left              : 0,
   right             : 0,
   bottom            : 0,
   backgroundColor   : 'rgba(255, 255, 255, 0.75)',
 },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '300px',
    width                 : '100%'
  }
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      hoursModalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openHoursModal = this.openHoursModal.bind(this);
    this.closeHoursModal = this.closeHoursModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openHoursModal() {
    this.setState({hoursModalIsOpen: true})
  }

  closeHoursModal() {
    this.setState({hoursModalIsOpen: false});
  }

  render() {
    return (
      <nav>
        <ul className="footer">
          <li>511 E Genesee Street Fayetteville NY, 13066</li>
            <li className="footer-hours" onClick={this.openHoursModal}>
              <span>Hours</span>
            </li>
            <li>
              <Modal
                  isOpen={this.state.hoursModalIsOpen}
                  onRequestClose={this.closeHoursModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                <p className="text-center"><strong>Hours</strong></p>
                  <ul className="modal-hours">
                    <li>Monday: 11:00am-8:30pm</li>
                    <li>Tuesday: 11:00am-8:30pm</li>
                    <li>Wednesday: 11:00am-8:30pm</li>
                    <li>Thursday: 11:00am-8:30pm</li>
                    <li>Friday: 11:00am-9:00pm</li>
                    <li>Saturday: 11:00am-9:00pm</li>
                    <li>Sunday: Closed</li>
                  </ul>
              </Modal>
            </li>
            <li>mon-thur: 11:00am-8:30pm</li>
            <li>fri-sat: 11:00am-9:00pm</li>
            <li>sun: Closed</li>
            <li className="footer-pin">
              <span role="img" aria-label="Pin" onClick={this.openModal}>&#x1f4cc; map</span>
            </li>
            <li>
              <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                <p className="text-center"><strong>Pita & Wrap</strong></p>
                <Iframe
                  title="pita & wrap"
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.514749304824!2d-76.00789726707848!3d43.03059997914765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d98c24c43bdf5d%3A0x920570503451e705!2s511+E+Genesee+St%2C+Fayetteville%2C+NY+13066!5e0!3m2!1sen!2sus!4v1517846541481"
                  width="90%"
                  height="auto"
                  frameBorder="0"
                  allowFullScreen>
                </Iframe>
              </Modal>
            </li>
          <li className="footer-tel"><span role="img" aria-label="tel-1">&#128222; 315-637-3197/3198</span></li>
          <li id="footer-tel"><span role="img" aria-label="tel-2">&#128222; 315-637-3197</span></li>
          <li id="footer-tel"><span role="img" aria-label="tel-3">&#128222; 315-637-3198</span></li>
        </ul>
      </nav>
    )
  }
}

export default Footer;
