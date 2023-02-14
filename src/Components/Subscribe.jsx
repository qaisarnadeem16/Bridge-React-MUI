import { Button,  TextField, Typography } from "@mui/material";
import mail from "../assets/mail.png"
import { Box } from "@mui/system";
import React from "react";


const styles = {
    root: {
        color: 'black',
        fontSize: '10px',
        backgroundColor: 'white',
        borderRadius: '2rem',
        border: 'none',
        '&:hover': {
          backgroundColor: 'none',}
    },
};

const Subscribe = () => {
    return (
        <Box>
            <Typography sx={{ color: "White", fontSize: { xs: "1rem", md: "1.5rem" }, textAlign: "center", marginTop: "3rem" }}>
                At your fingertips
            </Typography>
            <Typography component='p' sx={{ color: "White", fontSize: { xs: ".85rem", md: "2rem" }, textAlign: "center", marginTop: "1rem", fontWeight: '200' }}>
                Access or upload anything in an instant of time
            </Typography>
            <Typography sx={{ color: "White", fontSize: { xs: "1rem", md: "1.5rem" }, textAlign: "center", marginTop: "3rem", }}>
                Subscribe to our Website
            </Typography>

            <Typography sx={{ color: "White", fontSize: { xs: "1rem", md: "1rem" }, textAlign: "center", marginTop: " .5rem", }}>
                Available exclusivery
            </Typography>

            <Box sx={{ position: 'absolute', right: { md: '15rem', xs: '' }, display: { md: 'block', xs: 'none' } }}><img src={mail} alt="mail" height={130} /></Box>

            <Box display='flex' justifyContent='center' marginTop='2rem'>
                {/* <TextField style={styles.root} placeholder='Your Email' /> */}
                <TextField style={styles.root} id="filled-basic" label="Your Email" variant="filled"  size="small" />

            </Box>
            
            <Typography align="center" ><Button sx={{ background: "#EF2779", color: "White", textalign: "center", marginTop: "1.5rem", borderRadius: "2rem", padding: '.8rem 4.5rem' }}>Suscribe</Button></Typography>


        </Box>

    )
}

export default Subscribe