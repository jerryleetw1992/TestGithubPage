import React from 'react';
import styled from 'styled-components';
import background from '../../static/certificate.jpg';
import { spacing, palette } from '@material-ui/system';

function Main(props){

const Box = styled.div`
  position:absolute; 
  ${spacing}${palette}
  font-size:50px;
  font-weight:bold
  left:300;
  top:500;
  right:500;
`

const Img = styled.img`
  width: 1000px;
  height: 500px;
  padding: 0px 10px 0px 10px;
  alt:background
`

  return (
    <div>      
      <div>
          <div>
            <Img src={background}></Img>
            <Box p="1rem" color="grey">{props.content.email}</Box>      
          </div>
        </div>     
    </div>
  )
}

export default Main