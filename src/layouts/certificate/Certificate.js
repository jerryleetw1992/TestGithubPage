import React from 'react';

import styled from 'styled-components';
import Iframe from 'react-iframe'
import PDFViewer from 'mgr-pdf-viewer-react';

import logoIcon from '../../static/logo-product-normal.svg';
import sources from './Sources';

const Root = styled.div`
  display: inline-block;
  vertical-align: top;
`
const TitleBar = styled.div`
  display:flex;
  align-items:center;
  width: 1440px;
  height: 100px;
  font-family: SFProText;
  font-size: 20px;
  font-weight: 500;
  color: #a80100;
`
const Logo = styled.img`
  padding-left: 60px;
  padding-right: 16px;
`
const PDF = styled.div`
  padding-top: 60px;
`
function Main(props){
  return(
    <Root>
      <TitleBar>
        <Logo src={logoIcon}/>
        TURING CERTS
      </TitleBar>
      { PDFF(props)} 
    </Root>
  );
}

function PDFF(props){
  if (props.ipfs !== "-") {
    return(
      <PDF>
        <PDFViewer document={{
          url: 'https://ipfs.io/ipfs/'+props.ipfs
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