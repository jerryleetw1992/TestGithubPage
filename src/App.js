import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import queryString from 'query-string';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import CertificateIcon from '@material-ui/icons/CollectionsBookmark';
import ProofsIcon from '@material-ui/icons/ImportContacts';
import DownloadIcon from '@material-ui/icons/GetApp';

import Main from './layouts/Main';

const value = queryString.parse(window.location.search);
const email = value.email;
const ipfs = value.ipfs;

const Root = styled.div`
  background: rgb(244, 244, 244);
`
const Nav = styled.footer`
  position: fixed;
  left: 50%;
  transform:translateX(-50%);
  bottom: 0%;
  width: 100%;
  height: 60px;
  background: white;
`
const BNA = styled(BottomNavigationAction)`
  width: 500px;
`

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Main/>
  );
}

export default App;
