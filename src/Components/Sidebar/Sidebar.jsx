import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../Contexts/ProductsContext';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, createTheme, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, ThemeProvider, Typography } from '@mui/material';

const customTheme = createTheme({
    palette: {
      secondary: {
        main: "#1e2328",
        contrastText: "#ffff"
      },
      warning: {
        main: "#f5b301",
        contrastText: "#3b3f46"

      }
    }
  });

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const Sidebar = () => {
    const search = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const { getProducts } = useContext(productContext)
    const [category, setCategory] = useState(search.get('category') || '')
    const [price, setPrice] = useState(search.get('price_lte') || '')

    const filterProducts = (key, value) => {
        search.set(key, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setCategory(search.get('category') || '')
        setPrice(search.get('price_lte' || ''))
        getProducts()
    }

    const handleChangeType = (e, value) => {
        if(value === 'all'){
            search.delete('category')
            let newPath = `${window.location.pathname}?${search.toString()}`
            navigate(newPath) 
            setCategory(value)
            getProducts()
            return
        }
        search.set(e, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath) 
        setCategory(search.get('category') || '')
        getProducts()
    }

    const resetFilter = () => {
        navigate('/products')
        setCategory('')
        setPrice('')
        getProducts()
    }


    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{ flexGrow: 1}}>
                <Grid >
                    <Grid>
                        <Paper  sx={{height: '42em', px: 4, py: 8}}>
                            <FormControl component='fieldset'>
                                <FormLabel>
                                    <Typography variant='h6' sx={{color: "#1e2328"}}>Sort by category:</Typography></FormLabel>
                                    <RadioGroup aria-label='gender' name='gender1' value={category} onChange={(e) => handleChangeType('category', e.target.value)}>
                                    <FormControlLabel value='Family Bucket Meals' control={<Radio/>} label='Family Bucket Meals'/>
                                    <FormControlLabel value='Spaghetti and Fiesta' control={<Radio/>} label='Spaghetti and Fiesta'/>
                                    <FormControlLabel value='Burgers' control={<Radio/>} label='Burgers'/>
                                    <FormControlLabel value='Chicken Sandwiches' control={<Radio/>} label='Chicken Sandwiches'/>
                                    <FormControlLabel value='Sides and Kids Meals' control={<Radio/>} label='Sides and Kids Meals'/>
                                    <FormControlLabel value='Drinks and Desserts' control={<Radio/>} label='Drinks and Desserts'/>
                                    <FormControlLabel value='all' control={<Radio/>} label='all'/>
                                </RadioGroup>
                            </FormControl>
                            <Grid sx={{my: 4}}>
                                <Typography variant='h6' sx={{color: "#1e2328"}}>Sort by price:</Typography>
                                <Slider 
                                    onChange={(e) => filterProducts('price_lte', e.target.value)}
                                    valueLabelDisplay='auto'
                                    max={5000}
                                    step={50}
                                    sx={{color: "#1e2328"}}
                                />
                            </Grid>
                            <Button onClick={resetFilter} variant='contained' color='warning'>
                                Сбросить
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default Sidebar;