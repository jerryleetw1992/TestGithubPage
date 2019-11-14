import React from 'react';
import styled from 'styled-components';

import Proof from './proof/Proof';

function Main(props) {
    const Body = styled.div`
    padding: 50px 0px 100px 0px;
  `
  if (props.index == 1) {
    return (
      <Body>
        <Proof />
      </Body>
    )
  } else {
    return (
        <h1>
            not yet finish
        </h1>
    )
  }
}

export default Main;