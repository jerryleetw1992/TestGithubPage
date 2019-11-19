import React from 'react';
import Cell from './ProofCell';
import styled from 'styled-components';

import issuer from '../../static/issuer.svg';
import user from '../../static/user.svg';
import blockchain from '../../static/blockchain.svg';
import checkbox from '../../static/check-square.svg';


function createData(title, contnet) {
    return { title, contnet };
}
  
const issuerRows = [
    createData('Name:', 'ESCP Europe'),
    createData('Legal references:', "ESCP Europe - Etablissement d'Enseignement Supérieur Consulaire (EESC) à but non lucratif au capital de 8.694.000 € - 824 644 587 RCS Paris - 3, rue Armand Moisant 75015 Paris, France"),
    createData('Declaration of intent:', "We, ESCP Europe, intend to certify on a public blockchain our contributions through BCDiploma services."),
    createData('Available at:', "https://certificate.bcdiploma.com/check/"),
    createData('Blockchain Address:', "0xa4ed466ac0a65c68b0c48a0d2ed2c79efe271dd9"),
];

const issuerVerifiedRows = [
    createData('Validator:', 'BCdiploma'),
    createData('Legal references:', "Blockchain Certified Data SAS - 104 avenue Albert 1er, 92500 Rueil-Malmaison FRANCE - contactus@bcdiploma.com - 833138951 RCS Nanterre"),
    createData('Website:', " https://www.BCdiploma.com"),
    createData('Blockchain Address:', "0x7332ea1229c11c627c10eb24c1a6f77bced1d5c1"),
];

const dataRows = [
    createData('Certified on:', '2019-06-13T11:13:18Z'),
    createData('Certified data:', "N°2018618 Specialised Master (MS) Accredited by the Conférence des Grandes Écoles International Project Management This certificate is issued to Vincent LE GAL born on 1994-09-02 in Tarbes (65), France Awarded by the Board of Examiners of 2019-02-19 Paris, 2019-06-13 Gérard NAULLEAU Scientific Director ESCP Europe Frank BOURNOIS Executive President & Dean ESCP Europe A school of CCI PARIS ILE-DE-FRANCE"),
    createData('Template:', "Mastère Spécialisé"),
    createData('Template ID:', "7/0x01"),
];
  
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
    return (
        <div>
            <Title>
                <Img src={checkbox}/>
                CERTIFICATE VERIFICATION SUCCEED
            </Title>
            <br />
            <div>
                <Cell title={'Issuer'} rows={issuerRows} icon={issuer}/>
            </div>
            <br/>
            <div>
                <Cell title={'Holder'} rows={issuerVerifiedRows} icon={user} />
            </div>
            <br/>
            <div>
                <Cell title={'IPFS'} rows={dataRows} icon={blockchain} />
            </div>
        </div>

    );
}

export default Main;