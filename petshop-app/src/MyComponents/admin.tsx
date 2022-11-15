import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

export default function Admin({}: Props) {

     const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('userEmail');

        var loggedin = true;
        if(token == null){
            loggedin = false;
        }
        if(loggedin ==false){
                navigate('/home');
        }
    })
  return (
    <div>admin</div>

  )
}