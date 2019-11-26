import React from 'react';

import styled from 'styled-components';

import Main from './layouts/Main';

const Root = styled.div`
  width: 1920px;
  height: 1080px;
  background: #fafafa;
`

function App() {
  return (
    <Root>
      <Main/>
    </Root>
  );
}

export default App;
