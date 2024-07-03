import React from "react";
import Sidenav from "../Compo/Components/Sidenav";
import AccordionDash from "../Compo/AccordionDash"
import { Box, Typography } from "@mui/material";
import NavBar from "../Compo/Components/NavBar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../dash.css";

import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
export default function Home() {
  return (
    <>
    <div className="bgcolor">
    <NavBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                  <CardContent>
                  <div className="iconstyleone">
                    <CreditCardIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                      $500.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                      Total Earning
                    </Typography>
                   
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient1">
                  <CardContent>
                  <div className="iconstyleone">
                    <ShoppingBagIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                      $900.00
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                      Total Order
                    </Typography>
                   
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ minWidth: 345 }} className="gradient1">
               
                    <Stack direction="row">
                      <div className="iconstyleone">
                        <StorefrontIcon />
                      </div>

                      <div className="paddingall">
                        <span className="pricetitle">$23k</span>
                        <br />

                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                
                </Card>
                <Card sx={{ minWidth: 345 }}>
                 
                    <Stack direction="row">
                      <div className="iconstyleblack">
                        <StorefrontIcon />
                      </div>

                      <div className="paddingall">
                        <span className="pricetitle">$29k</span>
                        <br />

                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                 
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                    
                <div className="paddingall">
                        <span className="pricetitle">Popular Products</span>
                </div>

                    <AccordionDash/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </div>
         </>
  );
}
