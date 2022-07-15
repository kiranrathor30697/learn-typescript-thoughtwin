import React, { Component } from "react";
import {Modal1} from './Modal1.js';
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this); 
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
        <Modal1 show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal1>
      </main>
    );
  }
}

export default Dashboard