import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Avatar from './images/avatar.png';
import Curly from './images/curly.png';
import Mail from './images/mail.png';

var spanStyle = {
    fontStyle: 'italic',
    fontWeight: 500
};

export class about extends Component {
    render() {
        return (
                <div id="main">
                    {/* <img src={Fig} alt="fig" className="fig" /> */}
                    <header>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                            </ul>
                        </nav>
                    </header>
                <div id="wrapper2">
                    <section class="about">
                        <img src={Avatar} alt="portrait" className="avatar2" />
                        <div class="my"><h2>Amanda Olsson</h2>
                            <p class="title2">Front-end developer<br></br>& <span style={spanStyle}>designer.</span></p></div>
                        <p class="paragraph">I'm a Front-end developer with a passion for design, based in Stockholm, Sweden. Languages I speak are HTML, CSS & JavaScript.</p>
                    </section>
                </div>
                <a href="mailto: amanda.olsson@student.kyh.se" className="link"><img src={Mail} alt="contact" className="contact" /></a>
                <p class="contactMe">Say hello.</p>
            </div>
        )
    }
}

export default about
