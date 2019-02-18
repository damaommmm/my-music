import React, { Component } from 'react';
import './BottomBar.css';
import Audio from '../Audio/Audio'

class BottomBar extends Component {
    render() {
        return (
            <div className="BottomBar">
                <Audio />
            </div>
        );
    }
}

export default BottomBar;
