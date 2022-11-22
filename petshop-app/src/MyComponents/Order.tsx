import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { FaAlignJustify, FaCentercode } from 'react-icons/fa';
import { Button, CardContent, TextareaAutosize, Typography } from '@mui/material';
import { useEffect, useState } from "react"
import { Card, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"

import axios from "axios"
import { useNavigate } from "react-router-dom"
import '../App.css';

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
  petName: string,
  petPrice: number,
  quantity: number,

) {
  return { petName, petPrice, quantity };
}
type CartItemProps = {
  petId: number
  quantity: number
}
type ShoppingCartProps = {
  isOpen: boolean
}


export default function CustomizedTables({ isOpen }: ShoppingCartProps) {

  const { closeCart, cartItems } = useShoppingCart()
  const [pets, setPets] = useState<any[]>([]);
  const navigate = useNavigate();

  const checkout: any = () => {
    navigate("/order")
  }



  useEffect(() => {
    axios.get('http://localhost:8080/pet/getAllPets').then((response) => {
      console.log(response)
      setPets(response.data);
      console.log(pets);
    });
  }, []);
  // const item = pets.find(i => i.petId === petId)
  // if (item == null) return null


  return (
    <div>
      <Card className="mainContainer">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cart
          </Typography>

          <Stack >
            {cartItems.map(item => (
              <CartItem {...item} />
            ))}
            <div className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}>
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = pets.find(i => i.petId === cartItem.petId)
                  return total + (item?.petPrice || 0) * cartItem.quantity
                }, 0)
              )}
              <div>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="Enter Address"
                  style={{ width: 200 }}
                /></div>
              <br /><br />
              <Button variant="contained" color="success" href="/orderNext">
                Order Now
              </Button>
            </div>

          </Stack>

        </CardContent>
      </Card>



    </div>
  );
}







