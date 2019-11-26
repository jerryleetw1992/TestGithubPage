import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import queryString from 'query-string';
import topLeft from '../../static/certificate/certificateTopLeft.svg';
import bottomRight from '../../static/certificate/certificateBottomRight.svg';
import topRight from '../../static/certificate/certificateTopRight.svg';
import textCenter from '../../static/certificate/certificateRightCenter.svg';
import Iframe from 'react-iframe'

const value = queryString.parse(window.location.search);
const ipfs = value.ipfs;

function Main(props){
  const [IPFS, setIPFS] = useState("");
  
  useEffect(() => {
    async function fetchCertsAPI() {
      await fetch(`http://localhost:5000/api/view/certs?ipfs=${ipfs}`)
        .then(res => res.json())
        .then((returnData) => {
          setIPFS(returnData.content.ipfs);
          console.log(returnData);
        })
        .catch(console.log)
    };
    fetchCertsAPI();
  }, []);

  if (IPFS !== "") {
    return (
      <div width="100%" height="600px">
      <Iframe url={"https://ipfs.io/ipfs/"+IPFS}
        width="100%"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>  

      </div>  
    )
  } else {
    return (
      <div />
    )
  }
}

export default Main