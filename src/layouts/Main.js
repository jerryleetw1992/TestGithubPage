import React from 'react';
import styled from 'styled-components';

import Proof from './proof/Proof';
import Certificate from './certificate/Certificate';

function Main(props) {
  const ProofBody = styled.div`
    padding: 50px 0px 100px 0px;
  `
  const CertificateBody = styled.div`
    padding: 0px 0px 0px 0px;
  `

  if (Number(props.index) === 0) {
    return (
      <CertificateBody>
        <Certificate content={props.data} />
      </CertificateBody>
    )
  } else if (Number(props.index) === 1) {
    return (
      <ProofBody>
        <Proof />
      </ProofBody>
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