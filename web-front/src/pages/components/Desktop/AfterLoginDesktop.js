import React from "react";
import background from "../../../images/bg_yellow_flower_field.jpg";
import {createTheme,ThemeProvider} from "@mui/material/styles";


export default function AfterLoginDesktop(){
    const theme = createTheme();

    return(<>
            <div style={{backgroundImage:`url(${background})`,padding:250}}>
                <ThemeProvider theme={theme}>
                <div style={{ marginTop:-80,alignItems:"center",display:'flex',flexDirection:"column"}}>
                <img alt="No Images" src="images/img_splash_title.png"
                     style={{
                         display:'flex',
                         alignItems: "center",
                         width:"auto",
                         height:'450px'
                     }}/>
                </div>
                </ThemeProvider>
            </div>
        </>
    )
}