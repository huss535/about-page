import React from "react";
import { Box, Card, CardContent, CardMedia, Grid, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import ken from"../assets/images/gold.jpeg"

const Skills = () => {
  return (
    <>
     
     <Card>
        <CardMedia>
            <img src={ken} style={{height:500}}/>
        </CardMedia>

        <CardContent>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
        </CardContent>

     </Card>
    </>
  );
};

export default Skills;
