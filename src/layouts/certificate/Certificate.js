import React from 'react';
import styled from 'styled-components';
import topLeft from '../../static/certificate/certificateTopLeft.svg';
import bottomRight from '../../static/certificate/certificateBottomRight.svg';
import topRight from '../../static/certificate/certificateTopRight.svg';
import textCenter from '../../static/certificate/certificateRightCenter.svg';


const Root = styled.div`
  height: 100%;
  width: 100%;
  background: white;
`
const Top = styled.div`
  position: absolute;
  height: 80%;
  width: 100%;
  background: black;
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
  top: 0px;
  width: 800px;
  height: 100%;
  @media (max-width: 1270px) {  
    position: absolute;
    right: 0px;
    top: 0px;
    width: 600px;
    height: 100%;
  }
`
const TopRightTop = styled.div`
  height: 20%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const TopRightBottom = styled.div`
  height: 80%;
  text-align: center;
  background: black;
`
const TitleImage = styled.img`
  height: 90%;
  position: realive;
  top: 50%;
  left: 50%;
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  color: white;
  bottom: 200px;
`
const Text = styled.p`
  font-size: 25px;
`
const Bottom = styled.div`
  position: absolute;
  background: white;
  height: 20%;
  width: 100%;
  bottom: 0px;
  left: 0px;
`
const Nav = styled.div`
  position: absolute;
  background: purple;
  height: 80px;
  width: 100%;
  bottom: 0px;
  left: 0px;
`
const LogoDiv = styled.div`
  position: absolute;
  background: white;
  height: 100px;
  width: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Logo = styled.img`
  position: absolute;
  width: 300px;
`

function Main(props){
  return (
    <Root>
      <Top>
        <TopRight>
          <TopRightTop>
            <TitleImage src={topRight} alt="Top Right"/>
          </TopRightTop>
          <TopRightBottom>
            <Info>
              <Text> {props.content.email} </Text>
              <Text> {props.content.uid} </Text>
              <img src={textCenter} alt="Center"/>
            </Info>
          </TopRightBottom>
        </TopRight>
        <GridImage src={topLeft} alt="Logo"/>
      </Top>
      <Bottom>
        <LogoDiv>
          <Logo src={bottomRight} />
        </LogoDiv>
      </Bottom>
    </Root>    
  )
}

export default Main