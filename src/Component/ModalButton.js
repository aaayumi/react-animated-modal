import React, { Component } from 'react';
import PropTypes from "prop-types";
import Modal from './Modal.js'
import './ModalButton.scss'

class ModalButton extends Component {
    constructor (props) {
        super(props)
        this.state = {
            opened: false
        }
    }

     handleClick ()  {
        this.setState(prevState => ({
            opened: !prevState.opened
            }))
     }

    render() {
        return (
            <div className='modal-button'>
                <button
              onClick={() => this.handleClick()}>
                    {this.props.animation}
              </button>
                <Modal
                opened={this.state.opened}
                animation={this.props.animation}
                />
            </div>
        )
    }
}


ModalButton.propTypes = {
    animation: PropTypes.string
}


export default ModalButton;
