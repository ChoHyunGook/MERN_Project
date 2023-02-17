import background from "../../../images/bg_index.png";
import {ThemeProvider} from "@mui/material/styles";
import {Typography} from "@mui/material";
import LgHelloService from "../../services/Desktop&Tablet/lgHelloService";
import LgUService from "../../services/Desktop&Tablet/lgUService";
import S1Service from "../../services/Desktop&Tablet/s1Service";
import RaemianService from "../../services/Desktop&Tablet/raemianService";
import CowayService from "../../services/Desktop&Tablet/cowayService";
import React from "react";


export default function BeforeLoginTablet(props){

    const {theme} = props

    return(
        <>
            <div style={{backgroundImage:`url(${background})`, paddingBottom:250 }}>
                <div style={{display: 'flex',
                    alignItems: "center",paddingLeft:50,flexDirection:"column"}}>
                    <div className="jumbotron">
                        <div className="font-background">
                            <img alt="No images" src="images/text_slogan.png" style={{
                                marginTop:120,
                                display: 'flex',
                                alignItems:"center",
                                width:'620px',
                                height:'130px',
                                paddingBottom:'10px'
                            }} />
                            <div style={{display: 'flex',
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <ThemeProvider theme={theme}>
                                    <Typography  color='white' component="h3" variant="h7" sx={{marginTop:5}}>
                                        고객사 전용 회원가입 서비스입니다.
                                    </Typography>
                                    <div style={{alignItems: "center", display: "flex", marginTop:5}}>

                                        <LgHelloService/>
                                        <div style={{width: 15}}></div>
                                        <LgUService/>
                                        <div style={{width: 15}}></div>
                                        <S1Service/>

                                    </div>
                                    <div style={{alignItems: "center", display: "flex", marginTop:5}}>
                                        <RaemianService/>
                                        <div style={{width: 15}}></div>
                                        <CowayService/>
                                        <div style={{width: 15}}></div>
                                    </div>
                                    <div style={{height:180}}></div>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}