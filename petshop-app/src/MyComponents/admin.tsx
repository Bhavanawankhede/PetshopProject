import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


type Props = {}

export default function Admin({ }: Props) {

  const navigate = useNavigate();
 


  useEffect(() => {
    const token = localStorage.getItem('userEmail');

    var loggedin = false;
    if (token == null) {
      loggedin = true;
    }
    if (loggedin == true) {
      navigate('/home');
    }

})

  const formWidth ={
   width: 400
  }

 
  return (
    <div className="mainContainer" style={formWidth} >
      <table>
        <tr>
          <td>
          <Button variant="contained" size="large" fullWidth href='/allusers'>All Users</Button>
          </td>
        </tr>
        <tr>
          <td>
          <Button variant="contained" size="large" fullWidth href='/allpets'>Pets</Button>
          </td>
        </tr>
        <tr>
          <td>
          <Button variant="contained" size="large" fullWidth href='/allpetfood'>Pet Food</Button>
          </td>
        </tr>
        <tr>
          <td>
          <Button variant="contained" size="large" fullWidth>Pet Categeory</Button>
          </td>
        </tr>
      </table>
     
    
     
     
    </div>

  )
}