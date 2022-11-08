import { Box, Button } from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate } from 'react-router-dom';

type Props = {}

const navigate = useNavigate();

export default function Logout({}: Props) {

    const handleLogout = () =>{
    sessionStorage.removeItem('userEmail');
    navigate("/home")
        }
  return (
    <Box onSubmit={handleLogout}>
        <Button type="submit"><LogoutIcon/></Button>
    </Box>
  )
}

