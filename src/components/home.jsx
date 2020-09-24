import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './images/portrait.svg';
import Weather from './weather';


export default class Home extends React.Component {
    render() {
        return (
            <div className="page-container page">
                <noscript>You need to enable JavaScript to run this app.</noscript>
                {/* <img src={Fig} alt="fig" className="fig" /> */}
                <div className="headwrap" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <header>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <Weather />
                    </header>
                </div>
                <div id="wrapper">
                    <div className="landing">
                        <img src={Avatar} alt="portrait" className="avatar" />
    
                        <div className="quote"><h1>Hello there.</h1>
                            <p className="name">My name is <span className="bottom">Amanda.</span></p>
                            <p className="title">I'm a Front-end Developer.</p>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}




