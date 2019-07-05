import React, { Component } from 'react';
import './Modal.scss'

class Modal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            opened: false
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='modal'>
                <div className='modal-header'>Header</div>
                Modal
                </div>
            </div>
        )
    }
}

export default Modal;
