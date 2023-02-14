import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Navbar = () => {
  return (
    <>
       <Box sx={{ paddingTop: "1rem"  }}  >

   <Grid container display="flex"  justifyContent='space-between' alignItems='center' md={6} sm={12} sx={{borderBottom:'2px solid white', marginLeft:{ md: "1rem", xs: "0rem"}}} >
    <Grid Item >
    <Button sx={{ color: 'white' }}>  <Typography sx={{ fontSize: { md: "2rem", xs: "1.2rem" } , fontWeight:'500' }}>BRIDGE</Typography> </Button>
        
    <Button sx={{ color: 'white' }}>  <Typography sx={{ fontSize: {  xs: ".75rem" } }}>plan</Typography>  </Button>
    <Button sx={{ color: 'white' }}>  <Typography sx={{ fontSize: {  xs: ".75rem" } }}>Guide</Typography>  </Button>
    </Grid>
    <Grid Item >
    <Button sx={{ color: 'white' }}>  <Typography sx={{ fontSize: {  xs: ".75rem" } }}>Login</Typography>  </Button>
    <Button sx={{ color: 'white' }}>  <Typography sx={{ fontSize: {  xs: ".75rem" } }}>Sign Up</Typography>  </Button>
    
    </Grid>
    
</Grid>

</Box>
    </>
  )
}

export default Navbar
