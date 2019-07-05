import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './Modal.scss'

class Modal extends Component {
    render() {
        return (
                <div className={classnames('modal', { opened: this.props.opened}, this.props.animation)}>
                <div className='modal-header'>Header</div>
                </div>
        )
    }
}

Modal.propTypes = {
    opened: PropTypes.bool,
    animation: PropTypes.string
}

export default Modal;
