import React, { Component } from 'react';
import './App.css';
import Home from './components/home.jsx';
import Contact from './components/contact.jsx';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './components/pageTransitions/slideTransition.scss';
import styled from 'styled-components';

const Weather = styled.div`
/* background-color: #ABCCFB; */

display:flex;
flex-direction:row;
justify-content:center;
margin-bottom:0;


& p {
  /* color:white; */
  font-family:Avenir Next;
  font-size:1.5em;
  font-weight:600;
  font-style:italic;
  margin-right:30px;
  line-height:-100px;
}
`;

const API = "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&appid=01f5742eb40a0caffb5215ae2e2db920&units=metric"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location),

    };
  }


  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
  }

  render() {
    const { location } = this.props;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };


    return (
      <TransitionGroup>
        <CSSTransition key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}>
          <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? "left" : "right"}>
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
