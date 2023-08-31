import React from "react";
import { Card, CardContent } from "@mui/material";

 export const Dept=()=>{
    return(
       <Card>
        <CardContent>
            <h4>Departments</h4>
            <ol>
                <li>Mechnical</li>
                <li>Civil</li>
                <li>Electrical</li>
                <li>CS</li>
                <li>IT</li>
            </ol>
        </CardContent>
       </Card> 
    )
}
