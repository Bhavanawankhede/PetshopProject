import { Box, CssBaseline, Avatar, Typography, TextField, Grid, Container, Button, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemeProvider,   } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import LockResetIcon from '@mui/icons-material/LockReset';
import axios from 'axios';

const theme = createTheme();

export default function ChangePassword() {

    // const [userPassword,setUserPassword] = useState();
    const [userEmail, setUserEmail] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userRole, setUserRole] = useState("");
    // const [confirmPassword,setconfirmPassword] = useState();
  const navigate = useNavigate();
  const userphone= localStorage.getItem("userphone");

  const initialValues = {
    password: "",
    confirmPassword  : ""
  }

  const [formValues,setFormValues] = useState(initialValues);
  
  const [formErrors,setFormErrors] = useState({
    password : "",
    confirmPassword : ""
  })
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(formErrors);
    }
  
    axios
      .get(
        `http://localhost:8080/user/findByUserPhone/${userphone}`
      )
      .then((res) => {
        //setItems(response.data);
        console.log(res.data);
        setUserEmail(res.data?.userEmail);
        setUserFirstName(res.data?.userFirstName);
        setUserLastName(res.data?.userLastName);
        setUserPhone(res.data?.userPhone);
        setUserRole(res.data?.userRole);
       // setUserPassword(res.data?.userPassword);
        
      });
  },[formErrors]);

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed more than 20 characters";
    }
    else if (values.confirmPassword !== formValues.password) {
      errors.confirmPassword = " Password and confirm password should match";
    }

    return errors;
  };


  // const handlePassword = (e: any) => {
  //   setUserPassword(e.target.value);
  // };
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

    const handleSubmit = (e: any) =>{
      e.preventDefault();
      let user={
        userEmail: userEmail,
        userFirstName: userFirstName,
        userLastName: userLastName,
        userPhone: userPhone,
        userRole: userRole,
        userPassword:formValues.password
       
      }
      console.log("user data........");
      console.log(user)


      setFormErrors(validate(formValues));
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0){
      axios
      .put(`http://localhost:8080/user/editPassword/${userphone}`, user)
      .then((res: { data: any }) => {
        alert("Edited Successfully");
        navigate('/login')
      
      });
    }
    }


   
  return (
    <Box padding={10}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "#9575cd" }} variant="rounded">
            <LockResetIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              required
              fullWidth
              id="userEmail"
              label="Enter Password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              autoComplete="email"
            />
            <p className="ErrorClass">{formErrors.password}</p>
            <TextField
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="userPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
              <p className="ErrorClass">{formErrors.confirmPassword}</p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  </Box>
  )
}
