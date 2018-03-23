import React from 'react';
import { Component } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';


class InputModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  } 

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}
export default InputModal;