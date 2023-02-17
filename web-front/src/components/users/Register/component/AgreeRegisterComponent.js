
import AgreeRegisterService from "../service/AgreeRegisterService";
import React, {useEffect, useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Container} from "@mui/material";
import {Box} from "@mui/material/";
import AgreeLogo from "./Logo/AgreeLogo";
import {exclusiveTokenCheck} from "../../../../api";
import background from "../../../../images/bg_yellow_flower_field.jpg";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


const theme = createTheme();

export default function AgreeRegisterComponent(props){

    const { checkList, setCheckList, srcAddress } =props


    const [isExclusive,setIsExclusive]=useState(false)

    useEffect(()=>{
        try{
            exclusiveTokenCheck()
                .then(res=>{
                    if(res.status === 200){
                        setIsExclusive(true)
                    }
                })
                .catch(function (err){
                })
        }catch (err){
        }
    },[])


    return(
        <>
                    <Desktop>
                        {isExclusive ? (
                            <>
                                <div style={{backgroundImage:`url(${background})`, paddingBottom:280 }}><br/>
                                    <div style={{alignItems:"center",display:"flex",flexDirection:'column'}}>
                                <Box
                                    sx={{
                                        marginTop: 8,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '500px',
                                        width: '400px',
                                        borderRadius:'0.5rem'
                                    }}
                                ><br/>
                                    <AgreeLogo srcAddress={srcAddress}/>
                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             display:'flex',
                                             alignItems: "center",
                                             width:"220px",
                                             paddingBottom:20
                                         }}/>
                                    <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                                        약관동의
                                    </Typography>
                                    <Divider color="#696969" sx={{ height: 2, width: '350px' }}></Divider>
                                    <br/>
                                    <AgreeRegisterService checkList={checkList} setCheckList={setCheckList} />
                                </Box><br/>
                                    </div>
                                </div>
                            </>

                        ):(
                            <>
                                <Box
                                    sx={{
                                        marginTop: 15,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '400px',
                                        width: '400px',
                                        borderRadius:'0.5rem'
                                    }}
                                ><br/>

                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             marginTop:8,
                                             display:'flex',
                                             alignItems: "center",
                                             width:"220px",
                                             paddingBottom:30
                                         }}/>
                                    <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                                        약관동의
                                    </Typography>
                                    <Divider color="#696969" sx={{ height: 2, width: '350px' }}></Divider>
                                    <br/>
                                    <AgreeRegisterService checkList={checkList} setCheckList={setCheckList} />
                                </Box><br/>
                            </>
                        )}
                    </Desktop>

                    <Tablet>
                        {isExclusive ? (
                            <>
                                <div style={{backgroundImage:`url(${background})`, paddingBottom:450 }}><br/>
                                    <div style={{alignItems:"center",display:"flex",flexDirection:'column'}}>
                                <Box
                                    sx={{
                                        marginTop: 8,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '500px',
                                        width: '400px',
                                        borderRadius:'0.5rem'
                                    }}
                                ><br/>
                                    <AgreeLogo srcAddress={srcAddress}/>
                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             display:'flex',
                                             alignItems: "center",
                                             width:"220px",
                                             paddingBottom:20
                                         }}/>
                                    <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                                        약관동의
                                    </Typography>
                                    <Divider color="#696969" sx={{ height: 2, width: '350px' }}></Divider>
                                    <br/>
                                    <AgreeRegisterService checkList={checkList} setCheckList={setCheckList} />
                                </Box><br/>
                                    </div></div>
                            </>

                        ):(
                            <>
                                <div style={{backgroundImage:`url(${background})`, paddingBottom:450 }}><br/>
                                    <div style={{alignItems:"center",display:"flex",flexDirection:'column'}}>
                                <Box
                                    sx={{
                                        marginTop: 15,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '400px',
                                        width: '400px',
                                        borderRadius:'0.5rem'
                                    }}
                                ><br/>

                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             marginTop:8,
                                             display:'flex',
                                             alignItems: "center",
                                             width:"220px",
                                             paddingBottom:30
                                         }}/>
                                    <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                                        약관동의
                                    </Typography>
                                    <Divider color="#696969" sx={{ height: 2, width: '350px' }}></Divider>
                                    <br/>
                                    <AgreeRegisterService checkList={checkList} setCheckList={setCheckList} />
                                </Box><br/>
                                    </div></div>
                            </>
                        )}
                    </Tablet>

                    <Mobile>
                        {isExclusive ? (
                            <>
                                <div style={{backgroundImage:`url(${background})`, paddingBottom:280 }}><br/>
                                    <div style={{alignItems:"center",display:"flex",flexDirection:'column'}}>
                                <Box
                                    sx={{
                                        marginTop: 8,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '480px',
                                        width: '350px',
                                        borderRadius:'0.5rem'
                                    }}
                                ><br/>
                                    <AgreeLogo srcAddress={srcAddress}/>
                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             display:'flex',
                                             alignItems: "center",
                                             width:"220px",
                                             paddingBottom:20
                                         }}/>
                                    <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                                        약관동의
                                    </Typography>
                                    <Divider color="#696969" sx={{ height: 2, width: '300px' }}></Divider>
                                    <br/>
                                    <AgreeRegisterService checkList={checkList} setCheckList={setCheckList} />
                                </Box><br/>
                                    </div></div>
                            </>

                        ):(
                            <>
                                <div style={{backgroundImage:`url(${background})`, paddingBottom:280 }}><br/>
                                    <div style={{alignItems:"center",display:"flex",flexDirection:'column'}}>
                                <Box
                                    sx={{
                                        marginTop: 15,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '400px',
                                        width: '350px',
                                        borderRadius:'0.5rem'
                                    }}
                                ><br/>

                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             marginTop:8,
                                             display:'flex',
                                             alignItems: "center",
                                             width:"220px",
                                             paddingBottom:30
                                         }}/>
                                    <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                                        약관동의
                                    </Typography>
                                    <Divider color="#696969" sx={{ height: 2, width: '300px' }}></Divider>
                                    <br/>
                                    <AgreeRegisterService checkList={checkList} setCheckList={setCheckList} />
                                </Box><br/>
                                    </div></div>
                            </>
                        )}
                    </Mobile>

        </>
    )
}