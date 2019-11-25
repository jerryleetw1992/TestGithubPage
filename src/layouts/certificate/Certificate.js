import React from 'react';
import styled from 'styled-components';
import topLeft from '../../static/certificate/certificateTopLeft.svg';
import bottomRight from '../../static/certificate/certificateBottomRight.svg';
import topRight from '../../static/certificate/certificateTopRight.svg';
import textCenter from '../../static/certificate/certificateRightCenter.svg';


const Root = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
`
const Top = styled.div`
  background: rgb(0, 0, 0);
  height: 80%;
  width: 100vw;
`
const GridImage = styled.img`
  position: absolute;
  left: 0px;
  width: 450px;
  
  @media (max-width: 1000px) {  
    position: absolute;
    left: 0px;
    width: 40%;
  }
`
const TopRight = styled.div`
  position: absolute;
  right: 0px;
  top: 10px;
  width: 50%;
`
const Center = styled.div`
  color: white;
  text-align: center;
`
const Bottom = styled.div`
  position: fixed;
  background: red;
  height: 20%;
  width: 100vw;
  bottom: 0px;
  left: 0px;
`
const BottomRight = styled.img`
  position: fixed;
  height: 80px;
  right: 10px;
  bottom: 60px;
  padding: 20px 10px;
`

function Main(props){
  return (
    <Root>
      <Top>
        <TopRight>
          <img src={topRight} alt="Top Right"/>
          <Center>
            <h3>
              {props.content.email}
            </h3>
            <h3>
              {props.content.uid}
            </h3>
            <img src={textCenter}  alt="Center"/>
          </Center>
        </TopRight>
        <GridImage src={topLeft} alt="Logo"/>
      </Top>
      <Bottom>
        <BottomRight src={bottomRight}/>
      </Bottom>
    </Root>    
  )
}

export default Main