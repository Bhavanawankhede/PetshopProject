import { Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import { isConstructorDeclaration } from 'typescript';

type Props = {}




export default function Logout({}: Props) {

  useEffect(() => {
    localStorage.removeItem("userEmail");
 });
  

  const navigate = useNavigate();
  return (
    <Box >
      <br/><br/><br/>
    <h1>You have been logged out</h1>
    <h3>Login Again....</h3>
    <Button href="/home" color='secondary'>Home</Button>
    </Box>
  )
}

