import React ,{useEffect} from 'react';
import styled from 'styled-components';
import img from '../Pics/Darkcode.jpg'
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

const Repository = styled.div`
  display : flex; 
  padding-top:2%;
  @media(max-width:375px){
      display:block;
  }
`;
const Desc = styled.h5`
  color :white;
  display:none;
  
`;

const Img = styled.img`
  width:200px;
  height:200px;
  border-radius: 15px;
`;

const Card = styled.div`
  
  margin-left:auto;
  margin-right:auto;
  border:1px solid rgba(255,255,255,0.6);
  box-shadow:2px 2px 5px rgba(255,255,255,0.6);
  background: rgba(255,255,255,0.4);
  backdrop-filter:blur(5px);
  border-radius: 15px;
  width:200px;
  height:200px;
  padding-top:0%;
 
`;



function Experience(){
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
    return(
        <Division>
            <Header data-aos = 'fade-in'>Experience</Header>
            <Repository>
                <Card data-aos='flip-left'>
                    <Img src={img} alt = "img" />
                   
                </Card>
            </Repository>
        </Division>
    )

}

export default Experience