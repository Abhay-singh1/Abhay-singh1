import styled from 'styled-components';
import { SiGmail, SiGithub, SiLinkedin, SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from '../App'
import EmailForm from './Form';
const Division = styled.div`
  text-align:center;
  background-color:#03071e;
  color:#e85d04;
`;

const HeaderDivision = styled.div`
  text-align:center;
  display:block;
  padding-top:0.1%;
  padding-bottom:0%;
  @media (max-width:375px){
    align-items:center;
    flex-wrap:wrap;
    display:block;
    margin-left:5%;
    margin-right:5%;
  }
`;

const Header = styled.h1`
  color:white;
  text-align:center;
  
`;
// const Heade = styled.h3`
  
 
  
//   font-family: 'Fugaz One', cursive;
//   font-family: 'Roboto', sans-serif;
//   background-color:black;
//   color:grey;
//   text-align:left;
  
// `;

const Title = styled.h3`
  
  font-family: 'Fugaz One', cursive;
  font-family: 'Roboto', sans-serif;
  padding-left:20%;
  padding-right:20%;
  padding-bottom:10%;
  color:white;
  text-align:center;
  // &:hover{
  //   color:red;
  // }
  @media(max-width:375px){
    text-align:left;
    padding-left:10%;
  }
`;

const Icon = styled.div`
  color:white;
  text-align:center;
  padding-top:2%;
  padding-bottom:3%;
  padding-left:${props =>props.mergin || '23%'};
  display:flex;
  @media (max-width:375px){ 
    align-items:center;
    display:block;
    flex-wrap:wrap;
    align-content:center;
    padding-left:20%;
    padding-right:20%;
  }
  
`;

const Icons = styled.h3`
  text-align:center;
  background-color:white;
  
  border : 2px solid white;
  border-radius:20%;
  &:hover{
    
    border-radius:80%;
  }
  margin-right:12%;
`;


function Abt(){
    return(
        <Division>
            <HeaderDivision>
                <Title>                 
                   <Link style={{textDecoration:'none'}} to='/'> MY_PORTFOLIO</Link>
                </Title>
                <Header> ABOUT ME & CONTACT</Header>
            </HeaderDivision>

            <Title>
                I'm in final year of my Degree course. I'm a MERN stack Web developer
                and a Computer Science Enthusiast. I have worked on many front-end and backend 
                projects as a hobby and as an intern. I have developed a face-mask detection App
                for my final year college project. I'm also pro-efficent in Django-React stack Framework
                and Python is my base programming language. I consider myself quite skillful in python. 
            </Title>
            
            <Icon >
                <Icons> <a href='https://github.com/Abhay-singh1'><SiGmail size={50} color ='#cc0000' /> </a> </Icons>
                <Icons> <a href='https://github.com/Abhay-singh1'><SiGithub size={50} color ='#303030' /> </a></Icons>
                <Icons> <a href='https://www.linkedin.com/in/abhay-singh-9372911b0/'><SiLinkedin size={50} color ='#0099ff' /> </a> </Icons>
                <Icons> <a href='https://www.instagram.com/just_abhaysingh/'><SiInstagram size={50} style ={{backgroundImage: 'linear-gradient(0deg,yellow, orange, red, purple)'}} /> </a></Icons>
                <Icons> <a href='https://www.facebook.com/profile.php?id=100003728890368'><SiFacebook size={50} color ='Blue' /> </a> </Icons>
                <Icons> <a href='https://twitter.com/Abhaysingh10_7'><SiTwitter size={50} color ='#0099ff' /> </a> </Icons>
              </Icon>

              <EmailForm />

              <Router>
                <Switch>
                  <Route exact path ='/'>
                    <App />
                  </Route>
                </Switch>
              </Router>
        </Division>
    )
}

export default Abt;
