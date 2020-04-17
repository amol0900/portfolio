import React from 'react';
import { Link } from 'react-router-dom';

export default class navigation extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            {/* <li><Link to="/projects">Projects</Link></li> */}
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

