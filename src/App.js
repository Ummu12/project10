import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { Dept } from "./component/Dept";
import { Lab } from "./component/Lab";
import { Agri } from "./component/Agri";
import { Lib } from "./component/Lib";

function App() {
  return (
    <Card sx={{
      bgcolor:"coral"
    }}>
      <CardContent>
        <Grid container spacing={3}>
           <Grid item xs={3}>
            <Dept/>
            </Grid>   
      
      
           <Grid item xs={3}>
          <Lab/>
        </Grid>

     
      <Grid item xs={3}>
        <Agri />
      </Grid>

             <Grid item xs={4}>
              <Lib/>

             </Grid>
        
      </Grid>
 
      


      </CardContent>
    </Card>
  );
}

export default App;