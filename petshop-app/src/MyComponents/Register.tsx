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
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Avatar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const theme = createTheme();

export default function Register() {

//   const data = {
//    "userEmail": "" ,
//   "lastName": "",
//   "email": "",
//   "password": "",
// }

const [userFirstName, setUserFirstName] = useState('');
const [userLastName, setUserLastName] = useState('');
const [userEmail, setUserEmail] = useState('');
const [userPassword, setUserPassword] = useState('')
const [userConfirmPassword, setUserConfirmPassword] = useState('');
const UserRole = "CUSTOMER"

const data = {
  userFirstName: userFirstName,
  userLastName: userLastName,
  userEmail: userEmail,
  userPassword: userPassword,
  userConfirmPassword: userConfirmPassword,
  UserRole: UserRole

}

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
    axios.post("http://localhost:8080/user/addUser", data).then((res: { data: any }) => {
    // if(res.data.userFirstName!="" && res.data.get('lastName')!="" && res.data.get('email')!="" && res.data.get('password')!=""){
    if(userFirstName!="" && userLastName!="" && userEmail!="" && userPassword!=""){
    alert("Registered Successfully")
      window.location.replace("http://localhost:3000/login");
      console.log({
      email: res.data.get('email'),
      password: res.data.get('password'),
    });
  }else{
    alert("Fields cannot be empty")
  }
})
  };

  return (
    <Box padding={10}>
      <Outlet/>
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
          <Avatar  sx={{ bgcolor: '#9575cd' }} variant="rounded">
          <HowToRegIcon/>
         </Avatar>
         
          <Typography component="h1" variant="h5">
            Register 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="userFirstName"
                  required
                  fullWidth
                  id="userFirstName"
                  label="First Name"
                  value={userFirstName}
                onChange={(e) => setUserFirstName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="userLastName"
                  label="Last Name"
                  name="userLastName"
                  value={userLastName}
                onChange={(e) => setUserLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userEmail"
                  label="Email Address"
                  name="userEmail"
                  value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="userPassword"
                  label="Password"
                  type="password"
                  id="userPassword"
                  value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="userConfirmPassword"
                  label="ConfirmPassword"
                  type="password"
                  id="userConfirmPassword"
                  value={userConfirmPassword}
                onChange={(e) => setUserConfirmPassword(e.target.value)}
                  autoComplete="Confirm-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login"
                 variant="body2"
                 sx={{ my: 2, color: "red", display: "block" }}>
                  Already have an account? Sign in
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
