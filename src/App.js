import React from 'react';
import styled from 'styled-components';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import CertificateIcon from '@material-ui/icons/CollectionsBookmark';
import ProofsIcon from '@material-ui/icons/ImportContacts';
import DownloadIcon from '@material-ui/icons/GetApp';

import Main from './layouts/Main';


function App() {
  const [value, setValue] = React.useState(0);

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
  return (
    <Root>
      <Main index={value}/>
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
