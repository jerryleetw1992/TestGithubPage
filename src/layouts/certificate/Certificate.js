import React from 'react';
import styled from 'styled-components';
import background from '../../static/certificate.jpg';
import { spacing, palette } from '@material-ui/system';


function Certificats(props){

  const Title = styled.div`
  position: relative;
  width: 90%;
  left: 50%;
  transform:translateX(-50%);
  padding: 15px 0px 15px 0px;
  background: rgb(0, 94, 122);
  color: white;
  font-size: 30px;
`
const Body = styled.div`
padding: 50px 0px 10px 0px;
background-image: url("../../static/certificate.jpg");
background-color: #cccccc;
`
const Text = styled.style`
position:absolute; 
left:400; 
top:200; 
color:#FF0000; 
font-size:100px;
font-weight:bold
`
const Box = styled.div`
position:absolute; 
${spacing}${palette}
font-size:50px;
font-weight:bold
left:300;
top:500;
right:500;
`;

//            <Img src={background}></Img>
const Img = styled.img`
width: 1000px;
height: 500px;
padding: 0px 10px 0px 10px;
alt:background
`

  return (
    <div>            
      {props.content.map((content) => (
        <div class="card">
          <div class="card-body">
          <Img src={background}></Img>
            <Box p="1rem" color="grey">{content.email}</Box>      
          </div>
        </div>
      ))}
    </div>
  )
}
export default Certificats