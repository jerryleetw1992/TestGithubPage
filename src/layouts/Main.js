import React from 'react';

import styled from 'styled-components';

import Side from './proof/Proof';
import Certificate from './certificate/Certificate';

const Root = styled.div`
  width: 1920px;
  height: 1080px;
  background: $fafafa;
`

function Main() {
  return (
    <Root>
      <Side />
      <Certificate />
    </Root>
  );
}

export default Main;