import React from 'react';
import styled from 'styled-components';

import './Proof.css'
import certicheckDoneIcon from '../../static/icon-certicheck.svg';
import hideIcon from '../../static/icon-hide.svg';

const Root = styled.div`
  width: 480px;
  height: 100%;
  background: white;
  display: inline-block;
`
const TitleBox = styled.div`
  position: relative;
  width: 480px;
  height: 100px;
  background: #a80100;
  text-align: center;
`
const Title = styled.div`
  width: 261px;
  height: 100px;
  color: white;
  font-family: SFCompactText;
  font-size: 36px;
  font-weight: bold;
  line-height:100px;
  padding: 0px 0px 0px 60px;
`
const Hide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 23px 24px;
  font-family: PingFangSC;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #bdbdbd;
`
const Status = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  height: 72px;
  background-color: #f7f7f7;
`
const Rectangle = styled.div`
  float: left;
  width: 8px;
  height: 72px;
  background-color: #0035ad;
  margin-right: 54px;
`
const VSA = styled.span`
  font-family: SFCompactDisplay;
  font-size: 16px;
  font-weight: 500;
  color: #0035ad;
  margin-right: 55px;
`
const More = styled.span`
  font-family: SFProText;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`
const Info = styled.div`
  width: 360px;
  margin: 0px 60px;
`
const InfoH1 = styled.div`
  font-family: SFProText;
  font-size: 24px;
  font-weight: 600;
  color: #a80100;
  padding: 20px 0px;
  border-bottom: 1px solid #bdbdbd;
`
const InfoH2 = styled.div`
  font-family: SFProText;
  font-size: 18px;
  font-weight: 500;
  color: #9e9e9e;
  padding: 12px 0px;
`
const InfoContent = styled.div`
  font-family: SFProText;
  font-size: 18px;
  color: #424242;
  padding: 0px 0px 24px 0px;
  word-break:break-all;
`

function Main(props) {
  return (
    <Root>
      <TitleBox><Title>CERTIFICATION</Title></TitleBox>
      <Hide>
        <span>收起</span>
        <img src={hideIcon}/>
      </Hide>
      <Status>
        <Rectangle />
        <img src={certicheckDoneIcon}/>
        <VSA>Verified Source Authenticity</VSA>
        <More>More</More>
      </Status>
      <Info>
        <InfoH1>ISSUER</InfoH1>
        <InfoH2>Date</InfoH2>
        <InfoContent>{props.date}</InfoContent>
        <InfoH2>Name</InfoH2>
        <InfoContent>{props.issuerName}</InfoContent>
        <InfoH2>Type</InfoH2>
        <InfoContent>{props.type}</InfoContent>
        <InfoH1>HOLDER</InfoH1>
        <InfoH2>Name</InfoH2>
        <InfoContent>{props.holderName}</InfoContent>
        <InfoH2>E-mail</InfoH2>
        <InfoContent>{props.holderEmail}</InfoContent>
        <InfoH1>IPFS</InfoH1>
        <InfoH2>IPFS</InfoH2>
        <InfoContent>{props.ipfs}</InfoContent>
      </Info>
    </Root>
  );
}

export default Main;