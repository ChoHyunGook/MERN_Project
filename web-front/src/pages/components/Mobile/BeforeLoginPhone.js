import background from "../../../images/bg_index.png";
import {ThemeProvider} from "@mui/material/styles";
import {Typography} from "@mui/material";
import React from "react";
import PhoneLgHelloService from "../../services/Phone/PhoneLgHelloService";
import PhoneLgUService from "../../services/Phone/PhoneLgUService";
import PhoneS1Service from "../../services/Phone/PhoneS1Service";
import PhoneRaemianService from "../../services/Phone/PhoneRaemianService";
import PhoneCowayService from "../../services/Phone/PhoneCowayService";



export default function BeforeLoginPhone(props){

    const {theme} =props

    return(
        <>
            <div style={{backgroundImage:`url(${background})`,
                width:'100%',height:'100%'}}>
                <div style={{display: 'flex',
                    alignItems: "center",flexDirection:"column"}}>

                            <img alt="No images" src="images/text_slogan.png" style={{
                                marginTop:40,
                                display: 'flex',
                                alignItems:"center",
                                width:'350px',
                                height:'70px',
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
                                        <PhoneLgHelloService/>
                                        <div style={{width: 15}}></div>
                                        <PhoneLgUService/>
                                        <div style={{width: 15}}></div>
                                    </div>

                                    <div style={{alignItems: "center", display: "flex", marginTop:5}}>
                                        <PhoneS1Service/>
                                        <div style={{width: 15}}></div>
                                        <PhoneRaemianService/>
                                        <div style={{width: 15}}></div>
                                    </div>
                                    <div style={{alignItems: "center", display: "flex", marginTop:5}}>
                                        <PhoneCowayService/>
                                        <div style={{width: 15}}></div>
                                    </div>

                                    <div style={{height:100}}></div>
                                </ThemeProvider>
                            </div>

                    </div>

            </div>
        </>
    )
}