import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import queryString from 'query-string';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import CertificateIcon from '@material-ui/icons/CollectionsBookmark';
import ProofsIcon from '@material-ui/icons/ImportContacts';
import DownloadIcon from '@material-ui/icons/GetApp';

import Main from './layouts/Main';

const value= queryString.parse(window.location.search);
const email=value.email;


const Root = styled.div`
  background: rgb(244, 244, 244);
`
const Nav = styled.footer`
  position: fixed;
  left: 50%;
  transform:translateX(-50%);
  bottom: 0%;
  width: 100%;
`
const BNA = styled(BottomNavigationAction)`
  width: 500px;
`

function App() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState({});

  async function fetchMyAPI() {
    await fetch(`http://localhost:5000/api/view/users?displayName=&email=${email}&isIssuer=`)
      .then(res => res.json())
      .then((returnData) => { 
        setData(returnData.content[0]) 
        console.log(returnData);
      })
      .catch(console.log)
  }

  useEffect(() => {
    fetchMyAPI();
  },[]);

  return (
    <Root>
      <Main index={value} data={data}/>
        <Nav>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
          <BNA label="CERTIFICATE" icon={<CertificateIcon />} />
          <BNA label="PROOFS" icon={<ProofsIcon />} />
          <BNA label="DOWNLOAD" icon={<DownloadIcon />} />
        </BottomNavigation>
      </Nav>
    </Root>
  );
}

export default App;
