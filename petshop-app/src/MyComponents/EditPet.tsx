import { Box, CssBaseline, Avatar, Typography, Grid, TextField, createTheme, Container, Button, FormControlLabel, Radio, RadioGroup, TextareaAutosize,FormControl, FormLabel, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  ThemeProvider } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Link from '@mui/material/Link';

type Props = {
   
}


const theme = createTheme();

export default function AddPet({ }: Props) {

    // const categoryId = localStorage.getItem('categoryId');

    const initialValues = {
        petId: '',
        petName: '',
        gender: '',
        petPrice: '',
        petDescription: '',
        petImage: '',
        categoryId: ''
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

    const petId = localStorage.getItem('petId');
   

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }

        axios.get(`http://localhost:8080/pet/findByPetId/${petId}`).then((response) => {
            console.log("response");
            console.log(response.data);
            setFormValues(response.data);
            formValues.categoryId = "1";
            console.log(formValues);
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
        axios.put(`http://localhost:8080/pet/updatePet/${petId}`, formValues).then((res: { data: any }) => {
            console.log("Response" + res.data);
            
            alert("Updated Successfully")
            window.location.replace("http://localhost:3000/admin");
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
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Pet category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={initialValues.categoryId}
                                            label="category"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={0}>Select Pet</MenuItem>
                                            <MenuItem value={1}>Dog</MenuItem>
                                            <MenuItem value={2}>Cat</MenuItem>
                                            <MenuItem value={3}>Bird</MenuItem>
                                            <MenuItem value={4}>Fish</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
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
                                     <FormLabel id="radio-label" sx={{ mt: 2 }}>Gender  </FormLabel>
                                    <FormControl sx={{ ml: 5 }} >
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="radio-buttons-group"
                                            value={formValues.gender}
                                        >

                                            <FormControlLabel sx={{ mt: 1, mb: 0 }} value="FEMALE" control={<Radio />} onChange={handleChange} label="Female" />
                                            <FormControlLabel sx={{ mt: 1, mb: 0 }} value="MALE" control={<Radio />} onChange={handleChange} label="Male" />

                                        </RadioGroup>
                                    </FormControl>
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
                                Update
                            </Button>

                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </Box>
    )
}