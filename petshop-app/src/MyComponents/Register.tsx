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

const theme = createTheme();

export default function Register() {

  const state = {
   "firstName": "" ,
  "lastName": "",
  "email": "",
  "password": "",
}


//const [firstName,setFirstname] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('firstName')!="" && data.get('lastName')!="" && data.get('email')!="" && data.get('password')!=""){
      sessionStorage.setItem("firstName",event.currentTarget.firstName);
      sessionStorage.setItem("lastName",event.currentTarget.lastName);
      sessionStorage.setItem("username",event.currentTarget.email);
      sessionStorage.setItem("password",event.currentTarget.password);
      window.location.replace("http://localhost:3000/home");
      console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }else{
    alert("Fields cannot be empty")
  }
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
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpassword"
                  label="ConfirmPassword"
                  type="password"
                  id="cpassword"
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
