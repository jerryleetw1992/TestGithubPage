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
const Div = styled.div`
border: 1px solid #000;
background-image: url(${background});
width: 2000px;
height: 2000px;
`

const Img = styled.img`
  width: 1000px;
  height: 500px;
  padding: 0px 10px 0px 10px;
  alt:background
`

  return (
    <Div>      
      123
      {/* <div>
          <div>
            <Img src={background}></Img>
            <Box p="1rem" color="grey">{props.content.email}</Box>      
          </div>
        </div>      */}
    </Div>
  )
}

export default Main