import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaAlignJustify, FaCentercode } from 'react-icons/fa';
import { Button, TextareaAutosize, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  productName: string,
  price: number,
  quantity: number,
  
) {
  return { productName, price, quantity };
}

const rows = [
  createData("dog 1",2000,3),
  createData("dog 2",3000,3),
  createData("Cat",2000,2),
  createData("Cat 1",3000,8),
  createData("Fish 1",4000,100),
];

export default function CustomizedTables() {
  return (
    <div>
        <br/><br/><br/>
    <TableContainer >
      <Table className="orderTable" sx={{ minWidth: 700 , maxWidth: 1100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.productName}>
              <StyledTableCell component="th" scope="row">
                {row.productName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
       <Typography>
        Order Total : 1400 Rs.
       </Typography>
       <br/><br/>
    <TextareaAutosize
  aria-label="minimum height"
  minRows={5}
  placeholder="Enter Address"
  style={{ width: 200 }}
/> 
    <br/><br/>
    <Button variant="contained" color="success" href="/orderNext">
  Order Now
</Button>
    </div>
  );
}
