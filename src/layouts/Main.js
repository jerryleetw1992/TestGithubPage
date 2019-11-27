import React, { useState, useEffect } from "react";

import styled from 'styled-components';
import queryString from 'query-string';

import Side from './proof/Proof';
import Certificate from './certificate/Certificate';

const value = queryString.parse(window.location.search);
const email = value.email;
const ipfs = value.ipfs;

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

const Root = styled.div`
  width: 1920px;
  height: 1080px;
  background: $fafafa;
`

function Main() {
  const [date, setDate] = useState("-");
  const [issuerName, setIssuerName] = useState("-");
  const [type, setType] = useState("-");
  const [holderName, setHolderName] = useState("-");
  const [holderEmail, setEmail] = useState("-");
  const [IPFS, setIPFS] = useState("-");

  useEffect(() => {
    async function fetchUsersAPI() {
      await fetch(`http://localhost:5000/api/view/users?email=${email}`)
        .then(res => res.json())
        .then((returnData) => { 
          const name = returnData.content[0].displayName;
          const email = returnData.content[0].email;
          setHolderName(name);
          setEmail(email);
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
          setDate(timeConverter(returnData.content.timestamp));
          setIssuerName(returnData.content.issuerName);
          setType(returnData.content.type);
          setIPFS(returnData.content.ipfs);
        })
        .catch(console.log)
    };
    fetchCertsAPI();
  }, []);
	
  return (
    <Root>
      <Side date = {date}
            issuerName = {issuerName}
            type = {type}
            holderName = {holderName}
            holderEmail = {holderEmail}
            ipfs = {IPFS}/>
      <Certificate ipfs = {IPFS}/>
    </Root>
  );
}

export default Main;