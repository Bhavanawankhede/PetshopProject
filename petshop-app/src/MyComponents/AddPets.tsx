import * as React from 'react';
import { useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { nullable } from 'zod';
const theme = createTheme();

export default function AddPet() {

    const [isSubmit, setIsSubmit] = useState(false);

    const [checkpetName, setpetName] = useState('');
    const [checkgender, setgender] = useState('');
    const [checkpetPrice, setpetPrice] = useState('');
    const [checkpetImage, setpetImage] = useState('');
    const [checkcategoryId, setcategoryId] = useState('');
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

    const handleSubmit = () => {
        // debugger
       // e.preventDefault();

        const formData = new FormData();
     
        
        formData.append(
          "myFile",
          checkpetName,
          checkpetImage
          
        );

        let data = {
            petName: checkpetName,
            gender: checkgender,
            petPrice: checkpetPrice,
            // petImage: checkpetImage,
            // categoryId: checkcategoryId,
            petDescription: checkpetDescription,
        }
        setIsSubmit(true);
        axios.post("http://localhost:8080/pet/addPet", data).then((res: { data: any }) => {
            console.log("Response" + res.data);
            alert("Added Successfully")
            window.location.replace("http://localhost:3000/login");
        });
    }

    // const onFileChangeHandler = (e:any) => {
    //     e.preventDefault();
    //     setState({
    //         selectedFile: e.target.files[0]
    //     });
    //     formData.append('file', state.selectedFile);
    // };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5">
                            Add
                        </Typography>

                        {/* <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Pet category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={checkcategoryId}
                                label="category"
                                onChange={handlecategoryIdChange}
                            >
                                <MenuItem value={1}>Dog</MenuItem>
                                <MenuItem value={2}>Cat</MenuItem>
                                <MenuItem value={3}>Bird</MenuItem>
                                <MenuItem value={4}>Fish</MenuItem>
                            </Select>
                        </FormControl> */}

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="petName"
                                label="petName"
                                name="petName"
                                type="text"
                                value={checkpetName}
                                onChange={handlepetNameChange}
                                autoComplete="petName"
                                autoFocus
                            />

                            <Grid container item sx={{ mt: 0 }}>
                                <FormLabel id="radio-label" sx={{ mt: 2 }}>Gender  </FormLabel>
                                <FormControl sx={{ ml: 5 }} >
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                    >

                                        <FormControlLabel sx={{ mt: 1, mb: 0 }} value="FEMALE" control={<Radio />} onChange={handlegenderChange} label="Female" />
                                        <FormControlLabel sx={{ mt: 1, mb: 0 }} value="MALE" control={<Radio />} onChange={handlegenderChange} label="Male" />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>



                            {/* <Button
                                variant="contained"
                                component="label"
                            >
                                Upload File
                                <input
                                    type="file"
                                    //value={checkpetImage}
                                    onChange={imgFilehandler}
                                    hidden
                                />
                            </Button> */}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="petDescription"
                                label="petDescription"
                                name="petDescription"
                                type="text"
                                value={checkpetDescription}
                                onChange={handlepetDescriptionChange}
                                autoComplete="petDescription"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="petPrice"
                                label="petPrice"
                                type="number"
                                id="petPrice"
                                value={checkpetPrice}
                                onChange={handlepetPriceChange}
                                autoComplete="petPrice"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Add data
                            </Button>
                            <Grid container>

                            </Grid>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

