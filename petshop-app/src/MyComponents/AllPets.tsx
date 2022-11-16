import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import '../App.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, Route, useNavigate } from 'react-router-dom';

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
        axios.get('http://localhost:8080/pet/getAllPets').then((response) => {
            console.log("response")
            setUsers(response.data);
            console.log(users);
        });
    }, []);

    const navigate = useNavigate();


    const deletePet = (petId: number) => {
        axios.delete(`http://localhost:8080/pet/deletePet/${petId}`).then((response) => {
            console.log("pet deleted")
            console.log(users);
            // navigate('/allpets');
            window.location.reload();
        });
    }

    const editPet = (petId: any) => {
        localStorage.setItem("petId",petId);
        navigate('/editpet');




    }




    const styleTable = {
        width: 1200
    }

    return (
        <div className='tableContainer'>
            <h1>All Users</h1>
            <TableContainer style={styleTable} >
                <Table aria-label="customized table" className='userTable'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Image</StyledTableCell>
                            <StyledTableCell>Pet Name</StyledTableCell>
                            <StyledTableCell>Gender</StyledTableCell>
                            <StyledTableCell>Price</StyledTableCell>
                            <StyledTableCell>Description</StyledTableCell>
                            <StyledTableCell>Edit</StyledTableCell>
                            <StyledTableCell>Delete</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <StyledTableRow key={user.petName}>
                                <StyledTableCell><img src={user.petImage} /></StyledTableCell>
                                <StyledTableCell component="th" scope="row">{user.petName}</StyledTableCell>
                                <StyledTableCell>{user.gender}</StyledTableCell>
                                <StyledTableCell>{user.petPrice}</StyledTableCell>
                                <StyledTableCell>{user.petDescription}</StyledTableCell>
                                <StyledTableCell><Button variant='text' color='success' onClick={() => editPet(user.petId)}><EditIcon /></Button></StyledTableCell>
                                <StyledTableCell><Button variant='text' color='error' onClick={() => deletePet(user.petId)}><DeleteIcon /></Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table><br />
                <Button href="/admin" variant="contained" color="success">Back</Button>
                <Button href="#" variant="contained" color="success" style={{ 'float': 'right' }}>Add Pet</Button>
            </TableContainer>
            
        </div>
    );
}
