import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const allergyOptions = [
    "Peanuts", "Tree Nuts", "Milk", "Eggs", "Wheat",
    "Soy", "Fish", "Shellfish", "Sesame", "Mustard",
    "Celery", "Lupin", "Mollusks", "Sulphites", "Gluten"
];

export default function SignupForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        gender: "",
        weight: "",
        height: "",
        dietaryPreferences: "",
        allergies: [],
        healthGoals: "",
        password: "",
        age: "",
        activityLevel: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setFormData((prevData) => {
                const newAllergies = checked
                    ? [...prevData.allergies, value]
                    : prevData.allergies.filter((allergy) => allergy !== value);
                return {
                    ...prevData,
                    allergies: newAllergies
                }
            });
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
        console.log(formData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        await Axios.post("http://localhost:3000/api/auth/register", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        localStorage.setItem('userid',email);

        // console.log("REsponse :::: ",response);
        setFormData({
            username: "",
            email: "",
            gender: "",
            weight: "",
            height: "",
            dietaryPreferences: "",
            allergies: [],
            healthGoals: "",
            password: "",
            age: "",
            activityLevel: "",


        });
        navigate("/")
    };

    // const handleInputChange = (e) => {
    //     // console.log(e);
    //     let name = e.target.name;
    //     let value = e.target.value;

    //     setFormData({
    //       ...user,
    //       [name]: value,
    //     });
    //   };

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // console.log(user);

    //     try {
    //       const response = await fetch("http://localhost:3000/api/auth/register", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(user),
    //       });

    //       // console.log(response);
    //       const res_data = await response.json();

    //       if (response.ok) {
    //         setUser({
    //           username: "",
    //           email: "",
    //           phone: "",
    //           password: "",
    //         });
    //         storeTokenInLS(res_data.token);
    //         toast.success("Registration Completed...");
    //         navigate("/");
    //       } else {
    //         toast.error(
    //           res_data.extraDetails ? res_data.extraDetails : res_data.message
    //         );
    //       }
    //     } catch (error) {
    //       console.log(Regitration Error : ${error});
    //     }
    //   };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="contact">
                <form onSubmit={handleSubmit}>
                    <Box
                        component="form"
                        sx={{
                            maxWidth: '51.8ch',
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                            '@media(max-width:600px)': { '& .MuiTextField-root': { m: 1, width: '35ch' } }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            label="username"
                            variant="outlined"
                            className='textfield'
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        /><br />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <FormControl fullWidth sx={{ m: 1, width: '50ch', '@media(max-width:600px)': { width: '35ch' }, flex: '1 1 30%' }}>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.gender}
                                    label="Gender"
                                    name='gender'
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth sx={{ m: 1, width: '50ch', '@media(max-width:600px)': { width: '35ch' }, flex: '1 1 30%' }}>
                                <InputLabel id="goal">Health Goal</InputLabel>
                                <Select
                                    labelId="goal"
                                    id="health"
                                    value={formData.goal}
                                    label="Health Goal"
                                    name='healthGoals'
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={"loss"}>Weight Loss</MenuItem>
                                    <MenuItem value={"gain"}>Weight Gain</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>





                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <TextField
                                id="outlined-number4"
                                label="Weight(Kg)"
                                type="number"
                                name='weight'
                                value={formData.weight}
                                onChange={handleInputChange}
                                sx={{ m: 1, flex: '1 1 30%' }}
                            />
                            <TextField
                                id="outlined-number3"
                                label="Height(Ft)"
                                type="number"
                                name='height'
                                value={formData.height}
                                onChange={handleInputChange}
                                sx={{ m: 1, flex: '1 1 30%' }}
                            />

                        </Box>

                        <FormControl fullWidth sx={{ m: 1, width: '50ch', '@media(max-width:600px)': { width: '35ch' } }}>
                            <InputLabel id="dietaryPreferences">Dietary Preference</InputLabel>
                            <Select
                                labelId="dietaryPreferences"
                                id="dietaryPreferences"
                                value={formData.dietaryPreferences}
                                label="Dietary Preference"
                                name='dietaryPreferences'
                                onChange={handleInputChange}
                            >
                                <MenuItem value={"vegan"}>Vegan</MenuItem>
                                <MenuItem value={"non-vegan"}>Non-Vegan</MenuItem>
                            </Select>
                        </FormControl><br />


                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <TextField
                                id="outlined-number2    "
                                label="Age"
                                type="number"
                                name='age'
                                value={formData.age}
                                onChange={handleInputChange}
                                sx={{ m: 1, flex: '1 1 30%' }}
                            />
                            <FormControl fullWidth sx={{ m: 1, width: '50ch', '@media(max-width:600px)': { width: '35ch' }, flex: '1 1 30%' }}>
                                <InputLabel id="activityLevel">activityLevel Lvl</InputLabel>
                                <Select
                                    labelId="activityLevel"
                                    id="activitid"
                                    value={formData.activityLevel}
                                    label="activityLevel Level"
                                    name='activityLevel'
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={"sedentary"}>Sedentary</MenuItem>
                                    <MenuItem value={"light"}>Light</MenuItem>
                                    <MenuItem value={"moderate"}>Moderate</MenuItem>
                                    <MenuItem value={"active"}>Active</MenuItem>
                                    <MenuItem value={"veryactive"}>very active</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>


                        <TextField

                            label="Email"
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            sx={{ m: 1, width: '50ch', '@media(max-width:600px)': { width: '35ch' } }}
                        /><br />

                        <TextField

                            label="Passsword"
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleInputChange}
                            sx={{ m: 1, width: '50ch', '@media(max-width:600px)': { width: '35ch' } }}
                        /><br />

                        <Accordion sx={{ backgroundColor: 'transparent', border: '1px solid white', m: 1, width: '50ch', '@media(max-width:600px)': { width: '35ch' } }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                aria-controls="allergies-content"
                                id="allergies-header"
                                sx={{ color: 'white' }}
                            >
                                <InputLabel sx={{ color: 'white' }}>Allergies</InputLabel>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'transparent', color: 'white' }}>
                                <FormGroup>
                                    {allergyOptions.map((allergy) => (
                                        <FormControlLabel
                                            key={allergy}
                                            control={
                                                <Checkbox
                                                    checked={formData.allergies.includes(allergy)}
                                                    onChange={handleInputChange}
                                                    name="allergies"
                                                    value={allergy}
                                                    sx={{ color: 'white' }}
                                                />
                                            }
                                            label={allergy}
                                        />
                                    ))}
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <div className="contact-submit">
                        <button className='submit-contact'>
                            <span className="button_top"> Submit </span>
                        </button>
                    </div>
                </form>
            </div>
        </ThemeProvider>
    );
}
