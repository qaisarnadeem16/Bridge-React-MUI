import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import heroImg from '../assets/hero1.png';
const styles = {
    root: {
      width: '100%'
    },
  };
const Header = () => {
  return (
    <>
   <Grid container display='flex' sx={{ flexDirection: {xs:'column-reverse' , md:'row'} }} justifyContent='space-between'>
   <Grid item  xs={12} md={6}  display="flex" alignItems='center' justifyContent='center' sx={{marginTop:{md:"3.5rem", xs:"2rem"} }}> 
   <Box sx={{color:'white' }}  >
                        <Typography  sx={{fontSize:{md:"4rem",xs:"2rem"}, fontWeight:{md:"600",xs:"100"}}}>Bridge the <br /> Gap</Typography>
                        <Typography sx={{fontSize:{xs:".8rem",md:"1.2rem"}}}>Lorem ipsum dolor,
                            consectetur adipiscing <br /> elit  Pellentesque aliquet
                             libero eu volutpat <br />sss hendrerit,
                             dolor dui consectetur dolor <br /> leo.</Typography> 
                        <Button  sx={{background:"#EF2779", color:"white", marginTop:"1.5rem", borderRadius:"2rem", padding:".4rem 2.1rem"}}>REGISTER</Button>
                        <Button  sx={{background:"gray",color:"white", margin:"1.5rem 0 0 2rem", borderRadius:"2rem", padding:".4rem 2.5rem"}}>REVIEW</Button>
                    </Box>
   </Grid>
   <Grid item xs={12} md={5}>
                    <Box  style={styles.root}>
                        <img src={heroImg} alt="" style={{ width: '95%', height: 'auto' }} />
                    </Box>
                </Grid>
   </Grid>
    </>
  )
}

export default Header
