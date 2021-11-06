import React ,{useEffect} from 'react';
import styled from 'styled-components'

import Aos from 'aos';
import "aos/dist/aos.css";
import img2 from '../Pics/Sudoku.jpg'
import img3 from '../Pics/Menu.jpg'
import img4 from '../Pics/face1.JPG'
import img5 from '../Pics/e-commerce.jpg'

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
  @media (max-width:375px){
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

const Title = styled.h4`
  color:Black;
`;

const Card = styled.div`
  display:block;
  margin-left:auto;
  margin-right:auto;
  border:1px solid rgba(100,255,255,0.5);
  box-shadow:2px 2px 5px rgba(255,255,255,0.5);
  background: rgba(255,255,255,0.4);
  backdrop-filter:blur(5px);
  border-radius: 15px;
  width:200px;
  height:200px;
  padding-top:0%;
  &:hover ${Desc}{
    display:block;
    height:200px;
    background-color:white;
    // clip-path: circle(75%);
    border-radius:20px;
    transform: translate(0%, -100%);
    transition: 0.5s;
    z-index: 1;
    box-shadow: 0px 3px 9px rgba(0,0,0,0.12),
                0px 3px 18px rgba(0,0,0,0.08);
  
    
   outline:none;
    color:black;
  }

  &:hover ${Img}{
    // height:0em;
    opacity: 0.1;
    transform: translate(0%, -100%);
    transition: 0.5s;
  }
`;





function Project(){
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return(
  <Division>
    <Header data-aos='fade'>
      Projects developed by me!
    </Header>

      
    <Repository>
      <Card data-aos='flip-left'>
        <Img src={img2} alt = "img" />
        <Desc>
        <Title>Sudoku</Title>
            This is a rudimentary description of a repository genreated ny me!
        </Desc>
      </Card>
      
      
      <Card data-aos='flip-left'>
        <Img src={img3} alt = "img" />
        <Desc>
        <Title>Menu-card</Title>
          A vanilla javascript project that lets you order food from the menu
        </Desc>
      </Card>
      
      <Card data-aos='flip-right'>
        <Img src={img4} alt = "img" />
        <Desc>
        <Title>Mask-detection</Title>
          A Opencv-Python machine  learning project that a detect mask with the help of model
        </Desc>
      </Card>
      <Card data-aos='flip-right'>
        <Img src={img5} alt = "img" />
        <Desc>
        <Title>E-commerce</Title>
            This is a e-com backend developed in Node.js
        </Desc>
      </Card>
    </Repository>
      


  </Division>

  )
}

export default Project;