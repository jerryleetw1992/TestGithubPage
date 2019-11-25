import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import queryString from 'query-string';
import topLeft from '../../static/certificate/certificateTopLeft.svg';
import bottomRight from '../../static/certificate/certificateBottomRight.svg';
import topRight from '../../static/certificate/certificateTopRight.svg';
import textCenter from '../../static/certificate/certificateRightCenter.svg';

const value = queryString.parse(window.location.search);
const email = value.email;
const ipfs = value.ipfs;

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
  @media (max-height: 870px) {  
    height: 700px
  }
`
const GridImage = styled.img`
  position: absolute;
  left: 0px;
  width: 450px;
  
  @media (max-width: 1100px) {  
    position: absolute;
    left: 0px;
    width: 40%;
  }
  @media (max-width: 790px) {  
    display: none;
  }
  @media (max-height: 870px) {  
    height: 670px;
  }
`
const TopRight = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 800px;
  height: 100%;
  @media (max-width: 1260px) {  
    position: absolute;
    right: 0px;
    top: 50px;
    width: 600px;
    height: 100%;
  }
`
const TopRightTop = styled.div`
  height: 200px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1100px) {  
    height: 200px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  @media (max-width: 1260px) {
    height: 100px;
  }
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
  z-index: 100;
`
const CenterImage = styled.img`
  width: 100%;
  @media (max-width: 600px) {
    width: 60%;
  }
`
const Type = styled.p`
  font-size: 50px;
  color: #C7A374;
  @media (max-width: 600px) {
    font-size: 25px;
  }
`
const Name = styled.p`
  font-size: 25px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`
const Bottom = styled.div`
  position: absolute;
  background: white;
  height: 200px;
  width: 100%;
  bottom: 0px;
  left: 0px;

  @media (max-height: 870px) {
    top: 700px;
  }
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
	const [displayName, setDisplayName] = useState();
  const [type, setType] = useState();
  
  useEffect(() => {
    async function fetchUsersAPI() {
      await fetch(`http://localhost:5000/api/view/users?email=${email}`)
        .then(res => res.json())
        .then((returnData) => { 
          const name = returnData.content[0].displayName
          setDisplayName(name);
        })
        .catch(console.log)
    };
    fetchUsersAPI();
  }, []);
  
  useEffect(() => {
    async function fetchCertsAPI() {
      await fetch(`http://localhost:5000/api/view/certs?ipfs=${ipfs}`)
        .then(res => res.json())
        .then((returnData) => {
          setType(returnData.content.type);
        })
        .catch(console.log)
    };
    fetchCertsAPI();
  }, []);

  return (
    <Root>
      <Top>
        <TopRight>
          <TopRightTop>
            <TitleImage src={topRight} alt="Top Right"/>
          </TopRightTop>
          <Info>
              <Type> {type} </Type>
              <Name> {displayName} </Name>
              <CenterImage src={textCenter} alt="Center"/>
            </Info>
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