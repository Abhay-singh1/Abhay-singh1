import styled, { css, keyframes} from 'styled-components';

import Skills from './Skills'
import Project from './Projects';
import Experience from './Exp';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import img1 from '../Pics/mine.jpg'

const Division = styled.div`
  text-align:center;
  background-color:#03071e;
  color:#e85d04;
`;

const HeaderDivision = styled.div`
  text-align:left;
  display:flex;
  margin-left:12%;
  margin-right:12%;
  padding-top:10%;
  @media (max-width:375px){
    align-items:center;
    flex-wrap:wrap;
    display:block;
    margin-left:5%;
    margin-right:5%;
  }
`;

const typing = keyframes`
from { width: 0ch }
  to { width: 12ch }
`;

const blink = keyframes`

 from,to { border-color: transparent }
50% { border-color: white; }
`;

// const animation = props =>
//   css`
//     ${typing} 2s steps(12,end) , ${blink} 0.75s step-end infinite;
//   `;

const Name = styled.h1`
  width:12ch; 
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  white-space: nowrap;
  border-right: 4px solid;
  font-size: 1.5em;
  animation: ${typing} 2s steps(12), ${blink} 0.55s step-end infinite ;
  @media(max-width:375px){
    font-size: 1.3em;
  }
   
`;



const Header = styled.h1`
  color:white;
  margin-right:2%;
  
`;
const Img = styled.img`
  border-radius:3%;
  width:300px;
  height:300px;
  -webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
  transform: rotateX(70deg) rotateZ(-60deg) translate3d(-120px, 0px, 70px);
  box-shadow: -80px 60px 15px 5px rgba(0,0,0,0.4);
  transition: all .4s;
  transform-style: preserve-3d;
  &:hover{
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    transform: rotateX(0deg) rotateZ(0deg) translate3d(0px, 0px, 0px);
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.0);
  }
  @media (max-width:375px){
    width:200px;
    height:200px;
    justify-content:center;
    
  }

`;
const Title = styled.h3`
  margin-top:0%;
  margin-left:5%;
  margin-right:83%;
  font-family: 'Fugaz One', cursive;
  font-family: 'Roboto', sans-serif;
  color:white;
  text-align:left;
  &:after {
		color: #f0f;
		z-index: -2;
	} ;
  &:before {
		color: #0ff;
		z-index: -1;
	}
	&:hover {
		&::before {
			animation: glitch .3s cubic-bezier(.25, .46, .45, .94) both 5;
		}
		&:after {
			animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both 5;
		}
	}
  @media(max-width:375px){
    margin-right:7%
  }
`;

const Btn  = styled.button`
  height:3.2em;
  margin-right:68%;
 
  @media(max-width:375px){
    margin-right:5%;
    margin-top:8%;
  }  
  &:hover{
    background-color:black;
    color:white;
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
  }
`;


function Landing() {

  return (
    <Division>
      <Title>
        <Link style={{textDecoration:'none'}} to ='/'>MY_PORTFOLIO</Link>
      </Title>
      <HeaderDivision>
        <Header>
                Hi! I am <Name>ABHAY SINGH,</Name> a final year Undergraduate student from India. I am currently pursuing Computer Science 
                and hope to develop in the fields of Web development and computer vison.
        </Header>
          <Img src={img1}  alt="Car"  />
      
      </HeaderDivision>
       <Link style={{textDecoration:'none'}}  to ='/aboutme'> <Btn>Know More --{`>`}</Btn></Link>
      <Skills />
      <Project />
      <Experience />
      
    
    </Division>
  );
}

export default Landing;
