import background from "../../../images/bg_yellow_flower_field.jpg";
import {ThemeProvider} from "@mui/material/styles";
import React from "react";


export default function AfterLoginTablet(props){

    const {theme} =props

    return(
        <>
            <div style={{backgroundImage:`url(${background})`,padding:300 }}>
                <ThemeProvider theme={theme}>
                    <div style={{ marginTop:-80,alignItems:"center",display:'flex',flexDirection:"column"}}>
                        <img alt="No Images" src="images/img_splash_title.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"auto",
                                 height:'300px'
                             }}/>
                    </div>
                </ThemeProvider>
            </div>
        </>
    )
}