import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import queryString from 'query-string';

import Cell from './ProofCell';

import issuerIcon from '../../static/issuer.svg';
import userIcon from '../../static/user.svg';
import blockchainIcon from '../../static/blockchain.svg';
import checkboxIcon from '../../static/check-square.svg';


const value = queryString.parse(window.location.search);
const email = value.email;
const ipfs = value.ipfs;

function createData(title, contnet) {
  return { title, contnet };
}

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
const Img = styled.img`
  width: 30px;
  height: 30px;
  padding: 0px 10px 0px 10px;
`

function Main() {
	const [holderRows, setHolderRows] = React.useState([]);
	const [issuerRows, setIssuerRows] = React.useState([]);
	const [ipfsRows, setIpfsRows] = React.useState([]);

	async function fetchUsersAPI() {
    await fetch(`http://localhost:5000/api/view/users?email=${email}`)
      .then(res => res.json())
      .then((returnData) => { 
				const name = returnData.content[0].displayName
				const email = returnData.content[0].email
        setHolderRows([...holderRows, createData('Name:', name), createData('Email:', email)]); 
      })
      .catch(console.log)
	}

	async function fetchCertsAPI() {
    await fetch(`http://localhost:5000/api/view/certs?ipfs=${ipfs}`)
      .then(res => res.json())
      .then((returnData) => {
				setIssuerRows([...issuerRows,
											createData('Time:', timeConverter(returnData.content.timestamp)),
											createData('Issuer Hash:', returnData.content.issuer),
											createData('Issuer Name:', returnData.content.issuerName),
											createData('Type:', returnData.content.type)]); 
				setIpfsRows([...ipfsRows, createData('IPFS:', returnData.content.ipfs)]);
      })
      .catch(console.log)
	}
	
	useEffect(() => {
		fetchUsersAPI();
		fetchCertsAPI();
	},[]);
	
  return (
    <div>
        <Title>
            <Img src={checkboxIcon}/>
            CERTIFICATE VERIFICATION SUCCEED
        </Title>
        <br />
        <div>
            <Cell title={'Issuer'} rows={issuerRows} icon={issuerIcon}/>
        </div>
        <br/>
        <div>
            <Cell title={'Holder'} rows={holderRows} icon={userIcon} />
        </div>
        <br/>
        <div>
    	      <Cell title={'IPFS'} rows={ipfsRows} icon={blockchainIcon} />
        </div>
    </div>
  );
}

export default Main;