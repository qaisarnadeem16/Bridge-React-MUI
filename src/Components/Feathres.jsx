import { Box } from '@mui/system'
import React from 'react'
import Heading from './Heading'
import clock from '../assets/clock1.png';
import analytics from '../assets/analytics.png';
import profile from '../assets/profile.png';
import social from '../assets/social.png';
import { Grid, Typography } from '@mui/material';

const Feathres = () => {
    return (
        <>
            <Heading
                title='Feature'
                text='Most calendars are designed for teams.'
                text1='Slate is designed for freelancers' />

            <Box>
                <Grid container display='flex' alignItems='center' justifyContent='space-evenly'>

                    <Grid item xs={12} md={2} display='flex' flexDirection='column' alignItems='center' sx={{marginTop:{md:'0rem' , xs:'2rem'}}}>
                        <img src={clock} alt="clock" />
                        <Typography marginTop={1} >Lorem ipsum dolor sit amet,  <br /> adipisicing elit. Magnam, fuga.</Typography>
                    </Grid>

                    <Grid item xs={12} md={2} display='flex' flexDirection='column' alignItems='center' sx={{marginTop:{md:'0rem' , xs:'2rem'}}} >
                        <img src={analytics} alt="clock" />
                        <Typography marginTop={1} >Lorem ipsum dolor sit amet,  <br /> adipisicing elit. Magnam, fuga.</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} display='flex' flexDirection='column' alignItems='center' sx={{marginTop:{md:'0rem' , xs:'2rem'}}}>
                        <img src={profile} alt="clock" />
                        <Typography marginTop={1} >Lorem ipsum dolor sit amet,  <br /> adipisicing elit. Magnam, fuga.</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} display='flex' flexDirection='column' alignItems='center' sx={{marginTop:{md:'0rem' , xs:'2rem'}}}>
                        <img src={social} alt="clock" />
                        <Typography marginTop={1} >Lorem ipsum dolor sit amet,  <br /> adipisicing elit. Magnam, fuga.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Feathres
