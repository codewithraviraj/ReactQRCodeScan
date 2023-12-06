import { Typography, Grid,Button } from '@material-ui/core';
import Icon from '@mdi/react'
import {  mdiQrcodeScan } from '@mdi/js';
import { Link } from "react-router-dom";
const Home =()=> {
return(
        <div>
            <Typography style={{margin:30,marginLeft:"31rem", color:"#483D8B"}} variant="h2">
             QR Code for Demo
            </Typography>
             <h3 style={{marginLeft:"39rem"}}>Tap below to Scan</h3>

            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <Link to="/qr_scanner">
                    <Button variant="contained"  style={{marginLeft:"38rem"}} size="large" color="primary">
                        <Icon 
                        style={{padding:10}}
                        path={mdiQrcodeScan}
                        title="QR Scanner"
                        size={10}
                        color="white"
                        />
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;