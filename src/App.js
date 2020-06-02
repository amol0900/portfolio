import React, { Component } from 'react';
import './App.css';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './components/pageTransitions/slideTransition.scss';
import styled from 'styled-components';

const Weather = styled.div`
background-color: #ABCCFB;

display:flex;
justify-content:center;
margin-bottom:0;



& p {
  /* color:white; */
  font-family:Avenir Next;
  font-size:0.9em;
  font-style:italic;
  margin-right:30px;
}
`;

const API = "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&appid=01f5742eb40a0caffb5215ae2e2db920&units=metric"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location),
      data: {
        weather: [{
          id: 300,
          main: "drizzle",
          description: "light intensity drizzle",
          icon: "09d"
        }]
      }
    };
  }

  componentDidMount() {
    console.log("CDM ran")
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ weather: (Math.round(data.main.temp)), icon: data.weather[0].icon }));


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
    const { weather, icon } = this.state;
    const renderWeatherIcon = this.state.data.weather.map(item => {
      return <img src={`http://openweathermap.org/img/w/${item.icon}.png`} />;
    });
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };


    return (
      <TransitionGroup>
        <Weather><p>The temperature right now is {weather}°C <img src={`http://openweathermap.org/img/w/${icon}.png`} /></p></Weather>
        <CSSTransition key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}>
          <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? "left" : "right"}>
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
