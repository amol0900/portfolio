import React from 'react';
import { Link } from 'react-router-dom';
import About from './about';
import Avatar from './images/cc.png';


export default class Home extends React.Component {
    render() {
        return (
            <div className="page-container page">
                {/* <img src={Fig} alt="fig" className="fig" /> */}
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            {/* <li><Link to="/about">About</Link></li> */}
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </header>

                <div id="wrapper">
                    <div className="landing">
                        <img src={Avatar} alt="portrait" className="avatar" />
                        {/* <img src={Curly} alt="bracket" className="bracket" /> */}

                        <div className="quote"><h1>Hello there.</h1>
                            <p class="name">My name is <span className="bottom">Amanda.</span></p>
                            <p class="title">I'm a Front-end Developer.</p>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}




