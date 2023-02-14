import background from "../../../images/bg_index.png";
import {ThemeProvider} from "@mui/material/styles";
import {Typography} from "@mui/material";
import LgHelloService from "../../services/lgHelloService";
import LgUService from "../../services/lgUService";
import S1Service from "../../services/s1Service";
import RaemianService from "../../services/raemianService";
import CowayService from "../../services/cowayService";
import React from "react";



export default function BeforeLoginPhone(props){

    const {theme} =props

    return(
        <>
            <div style={{backgroundImage:`url(${background})`,
                width:'100%',height:'100%'}}>
                <div style={{display: 'flex',
                    alignItems: "center",paddingLeft:50,flexDirection:"column"}}>
                    <div className="jumbotron">
                        <div className="font-background">
                            <img alt="No images" src="images/texst_slogan.png" style={{
                                marginTop:40,
                                display: 'flex',
                                alignItems:"center",
                                width:'400px',
                                height:'80px',
                                paddingBottom:'10px'
                            }} />
                            <div style={{display: 'flex',
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <ThemeProvider theme={theme}>
                                    <Typography  color='white' component="h7" variant="h8" sx={{marginTop:5}}>
                                        고객사 전용 회원가입 서비스입니다.
                                    </Typography>
                                    <div style={{alignItems: "center", display: "flex", marginTop:5}}>
                                        <LgHelloService/>
                                        <div style={{width: 15}}></div>
                                        <LgUService/>
                                        <div style={{width: 15}}></div>
                                    </div>

                                    <div style={{alignItems: "center", display: "flex", marginTop:5}}>
                                        <S1Service/>
                                        <div style={{width: 15}}></div>
                                        <RaemianService/>
                                        <div style={{width: 15}}></div>
                                    </div>
                                    <div style={{alignItems: "center", display: "flex", marginTop:5}}>
                                        <CowayService/>
                                        <div style={{width: 15}}></div>
                                    </div>

                                    <div style={{height:100}}></div>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}