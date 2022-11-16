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
import { Button } from '@mui/material';
import '../App.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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

export default function AllPets() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/petFood/getAllFood').then((response) => {
            console.log("response")
            setUsers(response.data);
            console.log(users);
        });
    }, []);

    const navigate = useNavigate();


    const deletePet = () => {
        axios.delete('http://localhost:8080/pet/deletePet/${petId}').then((response) => {
            console.log("pet deleted")
            console.log(users);
            navigate('/allpets');
        });
    }

    



    const styleTable = {
        width: 900
    }

    return (
        <div className='tableContainer'>
            <h1>All Users</h1>
            <TableContainer component={Paper} style={styleTable} >
                <Table aria-label="customized table" className='userTable'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Image</StyledTableCell>
                            <StyledTableCell>Food Name</StyledTableCell>
                            <StyledTableCell>Categeory</StyledTableCell>
                            <StyledTableCell>Price</StyledTableCell>
                            <StyledTableCell>Quantity</StyledTableCell>
                            <StyledTableCell>Edit</StyledTableCell>
                            <StyledTableCell>Delete</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <StyledTableRow key={user.foodName}>
                                <StyledTableCell><img src={user.foodImage} /></StyledTableCell>
                                <StyledTableCell component="th" scope="row">{user.foodName}</StyledTableCell>
                                <StyledTableCell>{user.foodCategory}</StyledTableCell>
                                <StyledTableCell>{user.foodPrice}</StyledTableCell>
                                <StyledTableCell>{user.foodQuantity}</StyledTableCell>
                                <StyledTableCell><Button variant='text' color='success'><EditIcon /></Button></StyledTableCell>
                                <StyledTableCell><Button variant='text' color='error' onClick={deletePet}><DeleteIcon /></Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <br />
            <div>
                <Button href="/admin" variant="contained" color="success">Back</Button>
            </div>
        </div>
    );
}
