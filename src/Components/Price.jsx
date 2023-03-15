
import { Box, Button, Checkbox, Grid, Typography } from "@mui/material";

import React from "react";
import Heading from "./Heading";
const styles = {
  root: {
  
    background:'linear-gradient(180deg, #E1022B 0%, #EE3A00 10.94%, #F4B449 34.9%, #E3598F 58.85%, #22AD9A 79.69%, #589D65 100%',
  
    borderRadius: '2rem',
    padding: '.1rem 0',
  },
};
const Price = () => {
  return (
    <>
      <Heading
        title="Pricing"
        text="Most calendars are designed for teams"
        text1="Slate is designed for freelancer"
      />

      <Grid conatiner display="flex"  justifyContent='center' sx={{ flexDirection:{md:'row', xs:'column'}}}>
        <Grid item xs={10} md={4} >
          <Box style={styles.root} sx={{ margin:{md:'0rem' , xs:'0 1rem'}}}>
          <Box  sx={{ borderRadius:'2rem', padding:'2rem' , margin:{md:'.1rem' , xs:'0 .1rem'}, background:'black'}}>
            <Typography   sx={{ textAlign: "center", fontSize: "2rem", margin: "1rem 0" }} >
            <span> Plan X</span> 
            <Box sx={{borderBottom:'1px solid white', width:'10%', marginLeft:'45%', marginTop:'-.3rem'}}></Box>
            </Typography>

            <Box display="flex" >
              <Box>
                <Checkbox defaultChecked style={{color:'white' }} size="large" />
              </Box>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, abcd <br /> consectetur adipiscing
                  elit.
                </Typography>
              </Box>
            </Box>
            <Box display="flex" >
              <Box>
              <Checkbox defaultChecked style={{color:'white' }} size="large" />
              </Box>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, abcd <br /> consectetur adipiscing
                  elit.
                </Typography>
              </Box>
            </Box>
            <Box display="flex" >
              <Box>
              <Checkbox defaultChecked style={{color:'white' }} size="large" />
              </Box>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, abcd <br /> consectetur adipiscing
                  elit.
                </Typography>
              </Box>
            </Box>
            <Box display="flex" >
              <Box>
              <Checkbox defaultChecked style={{color:'white' }} size="large" />
              </Box>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, abcd <br /> consectetur adipiscing
                  elit.
                </Typography>
              </Box>
            </Box>
            <Button  sx={{background:"gray",color:"white", margin:"1.5rem 0 0 1rem", borderRadius:"2rem", padding:".4rem 5rem"}}>Lorem Ilsum</Button>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={10} md={4} sx={{marginLeft:{md:'5rem' , xs:'0'}, marginTop:{md:'0rem' , xs:'2rem'}}}>
        <Box style={styles.root} sx={{ margin:{md:'0rem' , xs:'0 1rem'}}}>
          <Box  sx={{ borderRadius:'2rem', padding:'2rem' , margin:{md:'.1rem' , xs:'0 .1rem'}, background:'black'}}>
            <Typography   sx={{ textAlign: "center", fontSize: "2rem", margin: "1rem 0",  }} >
            <span > Plan Y</span> 
            <Box sx={{borderBottom:'1px solid white', width:'10%', marginLeft:'45%', marginTop:'-.3rem'}}></Box>
            </Typography>

            <Box display="flex" >
              <Box>
                <Checkbox defaultChecked style={{color:'white' }} size="large" />
              </Box>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, abcd <br /> consectetur adipiscing
                  elit.
                </Typography>
              </Box>
            </Box>
            <Box display="flex" >
              <Box>
              <Checkbox defaultChecked style={{color:'white' }} size="large" />
              </Box>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, abcd <br /> consectetur adipiscing
                  elit.
                </Typography>
              </Box>
            </Box>
            <Box display="flex" >
              <Box>
              <Checkbox defaultChecked style={{color:'white' }} size="large" />
              </Box>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, abcd <br /> consectetur adipiscing
                  elit.
                </Typography>
              </Box>
            </Box>
            <Box display="flex" >
              <Box>
              <Checkbox defaultChecked style={{color:'white' }} size="large" />
              </Box>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, abcd <br /> consectetur adipiscing
                  elit.
                </Typography>
              </Box>
            </Box>
            <Button  sx={{background:"gray",color:"white", margin:"1.5rem 0 0 1rem", borderRadius:"2rem", padding:".4rem 5rem"}}>Lorem Ilsum</Button>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Price;
