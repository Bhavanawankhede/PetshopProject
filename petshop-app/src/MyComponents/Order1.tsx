import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import '../App.css';
import Textarea from '@mui/joy/Textarea';
import { Navigate, useNavigate } from 'react-router-dom';


const StyledTableCell: any = styled(TableCell)(({ theme }) => ({
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

}));

export default function Order1() {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const userEmail = localStorage.getItem("userEmail");
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/cartList/getCartList/${userEmail}`).then((response) => {
            console.log("response")
            setCartItems(response.data);
            console.log("CartItems are....")
            console.log(cartItems);
        });
    });

    // const orderDetails = {
    //     cartItems:cartItems,

    // }



    const styleTable = {
        width: 900
    }

    const calculatePrice = () => {
        let total: number = 0;
        cartItems.map((item) => {

            total = total + item.itemPrice;

        })
        return total;
    }

    const [selectValue, setSelectValue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value as string);
    };

    const handleSubmit = () => {
        // axios
        //     .post("http://localhost:8080/user/addUser", cartItems)
        //     .then((res: { data: any }) => {
        //        console.log(res.data)
        //     });

        // axios
        //     .delete(
        //         `http://localhost:8080/itemCategory/deleteItemCategory/${itemCategoryId}`
        //     )
        //     .then((response) => {
        //         navigate('/orderNext');
        //     });
        navigate('/orderNext');

    }

    return (
        <div className='tableContainerOrder'>
            <h1>Order Details</h1>
            <TableContainer component={Paper} style={styleTable} >
                <Table aria-label="customized table" className='userTable'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Item Type</StyledTableCell>
                            <StyledTableCell>Item Name</StyledTableCell>
                            <StyledTableCell>Item Price</StyledTableCell>
                            <StyledTableCell>Quantity</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((item) => (
                            <StyledTableRow>
                                <StyledTableCell>{item.categoryName}</StyledTableCell>
                                <StyledTableCell>{item.itemName}</StyledTableCell>
                                <StyledTableCell>{item.itemPrice}</StyledTableCell>
                                <StyledTableCell>1</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h3>Total: ${calculatePrice()} </h3>
            <h2>Address:    </h2>
            <Textarea minRows={5} className="textareaClass" variant="outlined" />
            <br />

            <h2>Payment Method</h2>
            <FormControl className="paymentSelect" >
                <Select
                    onChange={handleChange}
                    defaultValue="selectmethod"
                >
                    <MenuItem value="selectmethod">-Select Method-</MenuItem>
                    <MenuItem value="pod">Pay on Delivery</MenuItem>
                    <MenuItem value="paytm">Paytm</MenuItem>
                    <MenuItem value="gpay" >Gpay</MenuItem>
                    <MenuItem value="phonepay" >PhonePay</MenuItem>
                    <MenuItem value="other" >Other UPI</MenuItem>
                </Select>
            </FormControl><br /><br />
            <div>
                <Button onClick={handleSubmit} variant="contained" color="warning">Place Order</Button><br /><br />
                <Button href="/cart" variant="contained" color="success" className="backButton">Back</Button>
            </div>
        </div>
    );
}
