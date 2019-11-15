import React from 'react';
import styled from 'styled-components';
import topLeft from '../../static/certificate/certificateTopLeft.svg';
import bottomRight from '../../static/certificate/certificateBottomRight.svg';
import topRight from '../../static/certificate/certificateTopRight.svg';
import textCenter from '../../static/certificate/certificateRightCenter.svg';

function Main(props){

const Root = styled.div`
  height: 100vh;
  width: 100vw;
`

const Top = styled.div`
  background: rgb(0, 0, 0);
  height: 80%;
  width: 100vw;
`

const TopLeft = styled.div`
  position: absolute;
  left: 0px;
  width: 40%;
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
  position: relative;
  background: rgb(255, 255, 255);
  height: 10vh;
  width: 100vw;
`

const BottomRight = styled.img`
  position: absolute;
  height: 80%;
  right: 10px;
  bottom: 0px;
`

  return (
    <Root>
      <Top>
        <TopRight>
          <img src={topRight}/>
          <Center>
            <h3>
              {props.content.email}
            </h3>
            <h3>
              {props.content.uid}
            </h3>
            <img src={textCenter}/>
          </Center>
        </TopRight>
        <TopLeft>
          <img src={topLeft}/>
        </TopLeft>
      </Top>
      <Bottom>
      <BottomRight src={bottomRight}/>
      </Bottom>
    </Root>    
  )
}

export default Main