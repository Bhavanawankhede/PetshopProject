import { Box, CssBaseline, Typography, Grid, TextField, TextareaAutosize, createTheme, Container, Button, FormControlLabel, Radio, RadioGroup, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FormLabel, ThemeProvider } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import FormControl from '@mui/material/FormControl';


type Props = {

}


const theme = createTheme();



export default function AddPet1({ }: Props) {

    // const initialValues = {
    //     petId: '',
    //     petName: '',
    //     gender: '',
    //     petPrice: '',
    //     petDescription: '',
    //     petImage: '',
    //     categoryId: ''
    // }

    // const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({
    //     petName: '',
    //     gender: '',
    //     petPrice: '',
    //     petDescription: '',
    //     petImage: '',
    // });
    const [isSubmit, setIsSubmit] = useState(false);

    const petId = localStorage.getItem('petId');


    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues);
    //     }

    // }, [formErrors]);
    // const validate = (values: any) => {
    //     const errors: any = {};
    //     if (!values.petName) {
    //         errors.petName = "Pet Name is required!";
    //     }
    //     if (!values.gender) {
    //         errors.gender = "Gender is required!";
    //     }
    //     if (!values.petPrice) {
    //         errors.petPrice = "Pet Price is required!";
    //     }
    //     if (!values.petDescription) {
    //         errors.petDescription = "Description is required";
    //     }
    //     if (!values.petImage) {
    //         errors.petImage = "Confirm Password is required";
    //     }
    //     return errors;
    // };


    const [checkpetName, setpetName] = useState('');
    const [checkgender, setgender] = useState('');
    const [checkpetPrice, setpetPrice] = useState('');
    const [checkpetImage, setpetImage] = useState();
    const [checkcategoryId, setcategoryId] = useState(0);
    const [checkpetDescription, setpetDescription] = useState('');

    const handlepetNameChange = (e: any) => {
        setpetName(e.target.value);
    }
    const handlegenderChange = (e: any) => {
        setgender(e.target.value);
    }
    const handlepetPriceChange = (e: any) => {
        setpetPrice(e.target.value)
    }

    const handlecategoryIdChange = (e: any) => {
        setcategoryId(e.target.value);
    }
    const handlepetImageChange = (e: any) => {
        setpetImage(e.target.files);
    }
    const imgFilehandler = (e: any) => {
        if (e.target.files.length !== 0) {
            // let string = URL.createObjectURL(e.target.files[0]);
            // this.setState({ petImage: e.target.files[0] });

            console.log(e.target.files);
            setpetImage(e.target.files);
        };
    }

    const handlepetDescriptionChange = (e: any) => {
        setpetDescription(e.target.value);
    }

    // const handleChange = (e: any) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value });
    //     formValues.gender = e.target.value;
    // };



    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     console.log(formValues);
    //     setFormErrors(validate(formValues));
    //     setIsSubmit(true);
    //     axios.post("http://localhost:8080/pet/addPet", formValues).then((res: { data: any }) => {
    //         console.log("Response" + res.data);
    //         alert("Added Successfully")
    //         window.location.replace("http://localhost:3000/admin");
    //     });
    // };

    const handleSubmit = () => {
        // debugger
        // // e.preventDefault();

        const formData = new FormData();


        formData.append(
            "myFile",
            checkpetName,
            checkpetImage

        );

        // formData.append('file', checkpetImage);
        // formData.append('fileName', checkpetImage.name);

        let data = {
            petName: checkpetName,
            gender: checkgender,
            petPrice: checkpetPrice,
            petImage: checkpetImage,
            categoryId: checkcategoryId,
            petDescription: checkpetDescription,
        }
        setIsSubmit(true);
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };
        axios.post("http://localhost:8080/pet/addPet", data,config).then((res: { data: any }) => {
            console.log("Response" + res.data);
            alert("Added Successfully")
            window.location.replace("http://localhost:3000/admin");
        });
    }
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
                            Add Pet
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                            <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Pet category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={checkcategoryId}
                                            label="category"
                                            onChange={handlecategoryIdChange}
                                        >
                                            <MenuItem value={0}>Select Pet</MenuItem>
                                            <MenuItem value={1}>Dog</MenuItem>
                                            <MenuItem value={2}>Cat</MenuItem>
                                            <MenuItem value={3}>Bird</MenuItem>
                                            <MenuItem value={4}>Fish</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <p className="ErrorClass">{formErrors.petPrice}</p> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="petName"
                                        label="Pet Name"
                                        name="petName"
                                        value={checkpetName}
                                        onChange={handlepetNameChange}
                                        autoComplete="family-name"
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petName}</p> */}
                                </Grid>
                                <Grid container item sx={{ mt: 0 }}>
                                    <FormLabel id="radio-label" sx={{ mt: 2 }}>Gender  </FormLabel>
                                    <FormControl sx={{ ml: 5 }} >
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="radio-buttons-group"
                                            value={checkgender}
                                        >

                                            <FormControlLabel sx={{ mt: 1, mb: 0 }} value="FEMALE" control={<Radio />} onChange={handlegenderChange} label="Female" />
                                            <FormControlLabel sx={{ mt: 1, mb: 0 }} value="MALE" control={<Radio />} onChange={handlegenderChange} label="Male" />

                                        </RadioGroup>
                                    </FormControl>

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="petPrice"
                                        label="Price"
                                        name="petPrice"
                                        value={checkpetPrice}
                                        onChange={handlepetPriceChange}
                                        autoComplete="email"
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petPrice}</p> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextareaAutosize
                                        minRows={3}
                                        style={{ width: 500 }}
                                        name="petDescription"
                                        placeholder="Pet Description"
                                        id="petDescription"
                                        value={checkpetDescription}
                                        onChange={handlepetDescriptionChange}
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petDescription}</p>*/}
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        component="label"

                                    >
                                        <input
                                            type="file"
                                            // value={checkpetImage}
                                            onChange={handlepetImageChange}
                                            // hidden
                                        />

                                        Upload File
                                    </Button>

                                    
                                    {/* <button type="submit">
                            
                                        Upload
                                        <input type="file" onChange={handlepetImageChange} /></button> */}

                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Add
                            </Button>

                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </Box>
    )
}