import React, { Component } from 'react'
import styled from 'styled-components';


const Weather = styled.div`
background-color: rgba(255,255,255, 0.3);
border:1px solid transparent;
border-radius:50px;
display:flex;
align-items:center;
width:100px;
height:50px;
padding-left:15px;
margin-top:10px;


& p {
  /* color:white; */
  font-family:Avenir Next;
  font-size:1.2em;
  font-weight:300;
  font-style:italic;
  /* line-height:-100px; */
}
`;

const API = "https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&appid=01f5742eb40a0caffb5215ae2e2db920&units=metric"

export class weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ weather: (Math.round(data.main.temp)), icon: data.weather[0].icon }));
    }



    render() {
        const { weather, icon } = this.state;

        return (
            <div>
                <Weather><p>{weather}°C</p><img src={`http://openweathermap.org/img/w/${icon}.png`} style={{ width: '60px', height: '60px', margin: '0' }} /></Weather>
            </div>
        )
    }
}

export default weather
