import React from 'react';

import styled from 'styled-components';
import PDFViewer from 'mgr-pdf-viewer-react';

import './Certificate.css';
import logoIcon from '../../static/icons/logo-product-normal.svg';
import shareIcon from '../../static/icons/icon-share-grey.svg';

const Root = styled.div`
  display: inline-block;
  vertical-align: top;
`
const TitleBar = styled.div`
  display:flex;
  align-items:center;
  width: 1440px;
  height: 100px;
`
const TitleInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #bdbdbd;
`
const Logo = styled.img`
  padding-right: 16px;
`
const Title = styled.div`
  font-family: SFProText;
  font-size: 20px;
  font-weight: 500;
  color: #a80100;
  padding-right: 1047px;
`
const PDF = styled.div`
  padding-top: 60px;
`
function Main(props){
  return(
    <Root>
      <TitleBar>
        <TitleInfo>
          <Logo src={logoIcon}/>
          <Title>TURING CERTS</Title>
          <a href={'https://ipfs.io/ipfs/' + props.ipfs} target="_blank" rel="noopener noreferrer">
            <img src={shareIcon} alt=""/>
          </a>
        </TitleInfo>
      </TitleBar>
      { PDFF(props) } 
    </Root>
  );
}

function PDFF(props){
  if (props.ipfs !== "-") {
    return(
      <PDF>
        <PDFViewer document={{
          url: 'https://ipfs.io/ipfs/' + props.ipfs
        }} 
        hideNavbar
        scale={0.9}
      />
    </PDF>
    );
  } else {
    return(
      <div></div>
    );
  }
}

export default Main