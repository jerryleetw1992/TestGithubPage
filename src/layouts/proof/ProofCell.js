import React from 'react';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  body: {
    fontSize: 14,
    border: 0,
  },
}))(TableCell);
  
const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const PapaerS = styled(Paper)`
  width: 90%;
  position: relative;
  left: 50%;
  transform:translateX(-50%);
  border-radius: 0px;
`
const Img = styled.img`
  width: 25px;
  height: 25px;
  padding: 0px 10px 0px 5px;
`
const Body = styled.div`
  padding: 5px 20px 20px 20px;
`

function Main(props) {
    return (
    <PapaerS>
      <Body>
        <h2>
          <Img src={props.icon}/>
          {props.title}
        </h2>
        <Table>
          <TableBody>
            {props.rows.map(row => (
              <StyledTableRow key={row.title}>
                <StyledTableCell> {row.title} </StyledTableCell>
                <StyledTableCell> {row.contnet} </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Body>
    </PapaerS>
    );
}

export default Main;