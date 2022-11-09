import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { Avatar } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios, { Axios } from 'axios';
import { convertTypeAcquisitionFromJson } from 'typescript';


const theme = createTheme();



function SignIn() {

  const validEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
  const validPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('')
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false)
  const data = {
    userEmail: userEmail,
    userPassword: userPassword
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
   
    axios.post("http://localhost:8080/user/userLogin", data).then((res: { data: any }) => {
      let role = res.data.userRole;
      if ( role == "ADMIN") {
        alert("Welcome Admin")
      window.location.replace("http://localhost:3000/home");

      } else
       if ( role == "CUSTOMER") {
        alert("Login successful");
        sessionStorage.setItem('userEmail', res.data.userEmail);
      window.location.replace("http://localhost:3000/home");
      } else {
        alert("Wrong credentials");
      }

    });

  }

  return (
    <Box padding={10}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Avatar sx={{ bgcolor: '#9575cd' }} variant="rounded">
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="userEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
              {emailErr && <p style={{ color: 'red' }}>Your email is invalid</p>}

              <TextField
                margin="normal"
                required
                fullWidth
                name="userPassword"
                label="Password"
                type="password"
                id="userPassword"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                autoComplete="current-password"
              />
              {passwordErr && <p style={{ color: 'red' }}>Your password is invalid</p>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#"
                    variant="body2"
                    sx={{ my: 2, color: "blue", display: "block" }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register"
                    variant="body2"
                    sx={{ my: 2, color: "red", display: "block" }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </Box>
  );

}

export default SignIn