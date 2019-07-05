import React, { Component } from 'react';
import ModalButton from '../Component/ModalButton'
import './App.scss'

class App extends Component {
    render() {
        return (
            <div className='page'>
            <ModalButton animation='expand'/>
            <ModalButton animation='bottom-down'/>
            </div>
        )
    }
}

export default App;
