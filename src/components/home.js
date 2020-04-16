import React, { Component } from 'react'
import Curly from './images/curly.png';
import Avatar from './images/avatar.png';
import Fig from './images/fig.png';
/* import { Link } from 'react-router-dom' */
import { HashLink as Link } from 'react-router-hash-link';
import About from './about';


export class Home extends Component {
    render() {
        return (
            <div id="main">
                {/* <img src={Fig} alt="fig" className="fig" /> */}
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            {/* <li><Link to="/projects">Projects</Link></li> */}
                        </ul>
                    </nav>
                </header>

                <div id="wrapper">
                <div className="landing">
                    {/* <img src={Avatar} alt="portrait" className="avatar" /> */}
                    <img src={Curly} alt="bracket" className="bracket" />

                    <div className="quote"><h1>Hello there.</h1>
                        <p class="name">My name is Amanda.</p>
                        <p class="title">I'm a Front-end Developer.</p>
                    </div>
                </div>
                </div>
    
            </div>
    
        
        )
    }
}


export default Home;


