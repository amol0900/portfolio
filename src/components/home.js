import React, { Component } from 'react'
import Curly from './images/curly.png';
import Avatar from './images/avatar.png';

export class Home extends Component {
    render() {
        return (
            <div id="main">
                <div className="landing">
                    <img src={Avatar} alt="portrait" className="avatar" />
                    <img src={Curly} alt="bracket" className="bracket" />

                    <div className="quote"><h1>Hello there.</h1>
                        <p>My name is Amanda.</p>
                        <p>I'm a Front-end Developer.</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home;

