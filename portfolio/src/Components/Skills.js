import React, {useEffect} from 'react';
import styled from 'styled-components'
import { FaPython,  FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript,DiMongodb, DiMysql, DiDjango } from "react-icons/di";
import Aos from 'aos';
import "aos/dist/aos.css";


const Division = styled.div`
  text-align:center;
  padding-top:7%;
`;
const Header = styled.h1`
  color:white;
  margin-right:2%;
`;
const Icon = styled.div`
  color:white;
  text-align:center;
  padding-top:2%;
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
  display:flex;
  color:white;
  // border : 4px solid white;
  // border-radius:20%;
  &:hover{
    color:Red;
  }
  margin-right:7%;
`;

function Skills (){
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    return(
        <Division>
            <Header data-aos="fade"> SKILLS-SET   </Header>

            <Icon data-aos="fade">
                <Icons><FaPython hover='block' /> Python</Icons>
                <Icons><DiJavascript />JavaScript</Icons>
                <Icons><FaHtml5 /> HTML</Icons>
                <Icons><FaCss3/> CSS</Icons>
                <Icons><DiMongodb /> MongoDb</Icons>
              </Icon>
              <Icon data-aos="fade" mergin ='27%'>
                <Icons><DiMysql /> MySQL</Icons>
                <Icons><FaReact /> React.js</Icons>
                <Icons><FaNodeJs /> Node.js</Icons>
                <Icons><DiDjango /> Django</Icons>
            </Icon>
        </Division>
    )
}

export default Skills;