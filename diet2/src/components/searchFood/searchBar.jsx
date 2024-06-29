import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import theme from './theme'; // make sure to adjust the path accordingly
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const filterOptions = [
    "Fruits", "Vegetable", "Dairy", "Healthy Fats", "Grains", "Beverages",
    "Meat", "Nut & Seeds", "Non-Veg Salads", "Salads", "Breads"
];

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        // Implement search functionality here
        console.log('Search clicked with query:', searchQuery);
    };

    return (
        
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ padding: 2 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item  md={4}>
                        <TextField
                            fullWidth
                            id="search-bar"
                            label="Search Food"
                            variant="outlined"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                    </Grid>
                    <Grid item  md={4}>
                        <Accordion sx={{ backgroundColor: 'transparent', border: '1px solid white' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                aria-controls="filter-content"
                                id="filter-header"
                            >
                                <Typography sx={{ color: 'white' }}>Filters</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'transparent', color: 'white' }}>
                                <FormGroup>
                                    {filterOptions.map((filter) => (
                                        <FormControlLabel
                                            key={filter}
                                            control={<Checkbox />}
                                            label={filter}
                                            sx={{ color: 'white' }}
                                        />
                                    ))}
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item  md={2}>

                        <button className='submit-contact' onClick={handleSearchClick}>
                            <span className="button_top"> Search </span>
                        </button>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
