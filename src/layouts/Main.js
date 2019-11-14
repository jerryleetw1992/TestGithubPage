import React from 'react';
import styled from 'styled-components';

import Proof from './proof/Proof';
import Certificate from './certificate/Certificate';
import queryString from 'query-string'


const value= queryString.parse(window.location.search);
const email=value.email;

function Main(props) {
    const Body = styled.div`
    padding: 50px 0px 100px 0px;
  `

  const [state, setState] = React.useState([]);

  fetch(`http://localhost:5000/api/view/users?displayName=&email=${email}&isIssuer=`)
  .then(res => res.json())
  .then((returnData) => {
    console.log('123');
    setState(returnData.content)
    console.log(`${returnData.content}`);
  })
  .catch(console.log);

  if (props.index == 0) {
    return (
      <h1>
          <Certificate content={state} />
      </h1>
    )
  } else if (props.index == 1) {
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