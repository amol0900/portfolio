import React from 'react'
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import GitLogo from './images/github-brands.svg';
import Weather from './weather';

const pulseAnimation = keyframes`${pulse}`;

const Contact = styled.div`
  width:auto;
  cursor:pointer;
  padding:0px;
  

&:hover {
    animation: 1s ${pulseAnimation};
    border-bottom:5px solid #e87f5a;
}

& a {
  font-family: Avenir Next;
  font-weight:600;
  font-size:6em;
  color: #2F2F2F;
  margin:0;
  cursor:pointer;
  z-index:1;

  @media (max-width: 583px) {
  font-size:4em;
  }
}
`;

const Git = styled.div`
  display:flex;
  flex-direction:row-reverse;
  /* margin-left:-250px; */
  cursor:pointer;


   @media (max-width: 999px) {
  margin-left:0px;
   }
  
  &:hover {
    animation: 1s ${pulseAnimation};  
}
  
`;

const MyH3 = styled.h3`
  font-family: Avenir Next;
  font-weight:500;
  font-size:2em;
  color: #2F2F2F;

  @media (max-width: 583px) {
  font-size:1.5em;

}
 
  &:hover {
    animation: 1s ${pulseAnimation};
    border-bottom:3px solid #e87f5a;
  }
  `;

export default class contact extends React.Component {
  render() {
    return (
      <div className="page-container page">
        <div className="headwrap" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <header>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <Weather />
          </header>
        </div>
        <div id="wrapper3">
          <Contact>
            <a href="mailto: amanda.olsson@student.kyh.se">Say hello.</a>
          </Contact>
          <Git>
            <a href="https://github.com/amol0900"><MyH3>Check out my Github</MyH3></a><img src={GitLogo} alt="github logotype" className="gitlogo" />
          </Git>

        </div>
      </div >
    )
  }
}


