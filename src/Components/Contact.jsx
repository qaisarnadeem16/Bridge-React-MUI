import { Box, Button, Grid,  TextField, Typography } from '@mui/material'
import { LocationOn, MailOutline, StayCurrentPortrait } from "@mui/icons-material";
import React from 'react'
import Heading from './Heading';
const styles = {
  root: {
    border: '2px solid',
    borderImageSource:'linear-gradient(180deg, #E1022B 0%, #EE3A00 10.94%, #F4B449 34.9%, #E3598F 58.85%, #22AD9A 79.69%, #589D65 100%',
    borderImageSlice: 1,
  },
};
const Contact = () => {
  return (
   <>
      <Box>
           <Heading
           title="Contact us"
           text="Most calendars are designed for teams"/>

            <Box>
                <Grid container display='flex' justifyContent='center'>
                    
                    <Grid  style={styles.root} Item xs={10} md={3} sx={{ background:'#1A1A1A' , padding:'.5rem 2rem' , borderRadius:'1rem' }}>
                         
                            <Typography marginTop={2} textAlign='center' >Contact Us</Typography>
                         
                            <TextField id="standard-basic" sx={{ marginTop: "1rem", width:'100%', borderBottom:'2px solid white' }} label="Name" variant="standard" InputLabelProps={{
                                style: {
                                    color: 'White',
                                },
                            }} />
                            <TextField id="standard-basic" sx={{ marginTop: "1rem" , width:'100%', borderBottom:'2px solid white'}} label="Email" variant="standard"   InputLabelProps={{
                                style: {
                                    color: 'White',
                                },
                            }} />
                            <TextField id="standard-basic" sx={{ marginTop: ".8rem" , width:'100%', borderBottom:'2px solid white' }} label="Your Message" variant="standard" InputLabelProps={{
                                style: {
                                    color: 'White',
                                },
                            }}/>
                            <Button alignItems="start" justifyContent="start" sx={{ bgcolor: "#EF2779", color: "white", borderRadius: "2rem", padding:'.3rem 1.5rem', marginTop: "2rem", marginRight: "9rem" }}>Send</Button>
                       
                    </Grid>

                    <Grid Item xs={12} md={3} sx={{
                        display: '',
                        '& > :not(style)': {
                            marginLeft: {
                                xs:"1rem",
                                md:"3rem"
                            },
                            borderColor: '#E1022B',
                            textAlign: "center",
                            alignItems: "center",
                            justifyItems: "center",
                            background: 'black'


                        },
                    }}>
                        <Box display="flex" mt={12}>
                            <LocationOn sx={{ color: "#EF2779", fontSize:'2rem' }} />
                            <Typography sx={{ color: "white", marginLeft: ".8rem" }}>6386 Spring St undefined ,<br />
                                Georgia 12473 United States</Typography>
                        </Box>
                        <Box display="flex" mt={3}>
                            <StayCurrentPortrait sx={{ color: "#EF2779" }} />
                            <Typography sx={{ color: "white", marginLeft: "1rem" }}>(843) 555-0130</Typography>
                        </Box>

                        <Box display="flex" mt={3}>
                            <MailOutline sx={{ color: "#EF2779" }} />
                            <Typography sx={{ color: "white", marginLeft: "1rem" }}>willie.jennings@example.com</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
   </>
  )
}

export default Contact
