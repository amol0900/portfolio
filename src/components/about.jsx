import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Avatar from './images/avatar.png';
import { ReactComponent as MySvgComponent } from './images/github-brands.svg';

var spanStyle = {
    fontStyle: 'italic',
    fontWeight: 500
};

export default class about extends React.Component {
    render() {
        return (
            <div className="page-container page">
                    {/* <img src={Fig} alt="fig" className="fig" /> */}
                    <header>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </nav>
                    </header>
                <div id="wrapper2">
                    <section class="about">
                        <img src={Avatar} alt="portrait" className="avatar2" />
                        <div class="my"><h2>Amanda Olsson</h2>
                            <p class="title2">Front-end developer<br></br>& <span style={spanStyle}>designer.</span></p>
                            </div>
                        <p class="paragraph">I'm a Front-end developer with a passion for design, based in Stockholm, Sweden. Languages I speak are HTML, CSS & JavaScript.</p>
                    </section>
                </div>
                
                {/* <section id="ContactSection">
                <a href="mailto: amanda.olsson@student.kyh.se" className="link"><img src={Mail} alt="contact" className="contact" /></a>
                    <p class="contactMe">Say hello.</p>
                    </section> */}

{/*                     <section id="GitSection">
                        <MySvgComponent className="git" />
                    <p class="contactMe">Check out my Github</p></section> */}
                

            </div>
        )
    }
}
