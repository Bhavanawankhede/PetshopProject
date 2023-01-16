import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";


function ForgetPassword() {
 
  
    const [userphone, setUserphone] = useState("");
    const [otpvalue,setOtpValue] = useState("");
    const [tempOtpValue, setTempOtpValue] = useState();
    const values = {
      userphone: "",
      otpvalue: ""
    }
    const [formValues,setFormValues] = useState(values);
    
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();
    
   
      const getOtp = (e: any) => {
        e.preventDefault();

        axios
        .get(
          `http://localhost:8080/api/client/auth/requestOtp/${formValues.userphone}`
        )
        .then((response) => {
          setTempOtpValue(response.data.otp);
          console.log(response.data.otp)
          // setOtpValue(response.data.otp)
        });
        
        
       
        setIsSubmit(true);
    
      };


      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
     
      const handleSubmit =(e:any)=> {
        e.preventDefault();
        localStorage.setItem("userphone",formValues.userphone)
   
        if(tempOtpValue == formValues.otpvalue){
        axios
        .post("http://localhost:8080/api/client/auth/verifyOtp/",formValues)
        .then((res: { data: any }) => {
          console.log("Response" + res.data);
          // alert("Otp Submit Successfully");
         
        });
        console.log("Formvalues are: ")
        console.log(formValues)
      }
      else{
        alert("Otp is either expired or incorrect")
      }
      navigate("/changePassword")
      }
  
  

  return (
    <Box padding={10}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            // onSubmit={handleSubmit}
          >
            <Avatar sx={{ bgcolor: "#9575cd" }} variant="rounded">
            </Avatar>
            <Typography component="h1" variant="h5">
              Enter Your Mobile Number: 
            </Typography>
            <Box
               component="form"
               noValidate
               
               sx={{ mt: 3 }}
            >
              <TextField
                required
                fullWidth
                id="userPhone"
                label="Enter Mobile Number"
                // value={userphone}
                // onChange={(e) => setUserphone(e.target.value)}
                name="userphone"
                value={formValues.userphone}
                onChange={handleChange}
                
              />
            <br/><br/>
              <Button
              variant="contained"
              onClick={getOtp}
             >
                Send OTP
              </Button>
              <br/><br/>
              <TextField
                required
                fullWidth
                id="userPhone"
                label="Enter Your OTP"
                // value={otpvalue}
                // onChange={(e) => setOtpValue(e.target.value)}
                name="otpvalue"
                value={formValues.otpvalue}
                onChange={handleChange}
                
              />
              <br/><br/>
               {isSubmit &&  <Button
               variant="contained"
               color="success"
               onClick={handleSubmit}
             >
                Submit OTP
              </Button>}
            </Box>
          </Box>
    </Box>
  )
}

export default ForgetPassword;


