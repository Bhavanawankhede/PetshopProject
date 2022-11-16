import { Box, CssBaseline, Avatar, Typography, Grid, TextField, createTheme, Container, Button, FormControlLabel, Radio, RadioGroup, TextareaAutosize } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Link from '@mui/material/Link';

type Props = {
    petId: number
}


const theme = createTheme();

export default function AddPet({ petId}: Props) {

    const initialValues = {
        petName: '',
        gender: '',
        petPrice: '',
        petDescription: '',
        petImage: '',
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({
        petName: '',
        gender: '',
        petPrice: '',
        petDescription: '',
        petImage: '',
    });
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }

        axios.get('http://localhost:8080/findByPetId/{petId}').then((response) => {
            console.log("response")
            setFormValues(response.data);
            // console.log(users);
        });
    }, [formErrors]);
    const validate = (values: any) => {
        const errors: any = {};
        if (!values.petName) {
            errors.petName = "Pet Name is required!";
        }
        if (!values.gender) {
            errors.gender = "Gender is required!";
        }
        if (!values.petPrice) {
            errors.petPrice = "Pet Price is required!";
        }
        if (!values.petDescription) {
            errors.petDescription = "Description is required";
        }
        if (!values.petImage) {
            errors.petImage = "Confirm Password is required";
        }
        return errors;
    };


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };



    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formValues);
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        axios.post("http://localhost:8080/user/addUser", formValues).then((res: { data: any }) => {
            console.log("Response" + res.data);
            alert("Registered Successfully")
            window.location.replace("http://localhost:3000/login");
        });
    };

    return (
        <Box padding={10}>
            <Outlet />
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

                        <Typography component="h1" variant="h5">
                            Edit Pet
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="petName"
                                        label="Pet Name"
                                        name="petName"
                                        value={formValues.petName}
                                        onChange={handleChange}
                                        autoComplete="family-name"
                                    />
                                    <p className="ErrorClass">{formErrors.petName}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="gender"
                                        label="Gender"
                                        name="gender"
                                        value={formValues.gender}
                                        onChange={handleChange}
                                        autoComplete="family-name"
                                    />
                                    {/* <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value={formValues.gender}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup> */}
                                    <p className="ErrorClass">{formErrors.gender}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="petPrice"
                                        label="Price"
                                        name="petPrice"
                                        value={formValues.petPrice}
                                        onChange={handleChange}
                                        autoComplete="email"
                                    />
                                    <p className="ErrorClass">{formErrors.petPrice}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextareaAutosize
                                        minRows={3}
                                        style={{ width: 500 }}
                                        name="petDescription"
                                        placeholder="Pet Description"
                                        id="petDescription"
                                        value={formValues.petDescription}
                                        onChange={handleChange}
                                    />
                                    <p className="ErrorClass">{formErrors.petDescription}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="petImage"
                                        label="petImage"
                                        id="userConfirmPassword"
                                        value={formValues.petImage}
                                        onChange={handleChange}
                                        autoComplete="petImage"
                                    />
                                    <p className="ErrorClass">{formErrors.petImage}</p>
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Save
                            </Button>

                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </Box>
    )
}