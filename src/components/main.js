import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Projects from './projects';

const Main = () => (
    <Switch location={location}>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
    </Switch>
)

export default Main;
