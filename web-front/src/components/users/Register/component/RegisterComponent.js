
import RegisterService from "../service/RegisterService";
import React, {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Container, CssBaseline, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {Box} from "@mui/material/";
import RegisterLogo from "./Logo/RegisterLogo";
import {exclusiveTokenCheck, termsCheck} from "../../../../api";
import RequiredTerms from "../../RequiredService/main/RequiredTerms";
import background from "../../../../images/bg_yellow_flower_field.jpg";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function RegisterComponent(props){

    const {CheckCompany,srcAddress}=props

    const theme = createTheme();


    //약관동의 체크

    const [isTerms, setIsTerms]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            termsCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsTerms(true);
                        setUser(res.data)
                    }
                })
                .catch((err)=>{
                })

        }catch (err){
        }
    }, [user])

    //여기서 유즈이펙트로 exclusiveToken 유/무 회원전용관인지 일반회원가입인지

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

    return (
        <>

                <Desktop>
                    {isTerms ? (
                        <div style={{backgroundImage:`url(${background})`, width:'auto', height:'auto',paddingBottom:140}}>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center"
                        }}><br/>
                            <div className="signup-wrapper">
                                <ThemeProvider theme={theme}>
                                    <Container component="main" maxWidth="xl">
                                        <CssBaseline/>
                                        {isExclusive ? (
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',
                                                    height: '850px',
                                                    width: '450px',
                                                    borderRadius: '0.5rem',
                                                    border:1,
                                                    borderColor:'grey.500'
                                                }}
                                            ><br/>
                                                <RegisterLogo srcAddress={srcAddress}/>
                                                <img alt="No Images" src="images/img_logo_main.png"
                                                     style={{
                                                         display: 'flex',
                                                         alignItems: "center",
                                                         width: "220px"
                                                     }}/><br/>
                                                <Typography component="h3" variant="h7">
                                                    회원가입
                                                </Typography>
                                                <Divider color="#696969" sx={{height: 2, width: '400px',marginTop:1}}></Divider><br/>

                                                <RegisterService CheckCompany={CheckCompany} isExclusive={isExclusive}/>

                                            </Box>

                                        ):(
                                            <Box
                                                sx={{
                                                    marginTop: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',
                                                    height: '820px',
                                                    width: '450px',
                                                    borderRadius: '0.5rem',
                                                    border:1,
                                                    borderColor:'grey.500'
                                                }}
                                            ><br/><br/>
                                                <img alt="No Images" src="images/img_logo_main.png"
                                                     style={{
                                                         display: 'flex',
                                                         alignItems: "center",
                                                         width: "250px",
                                                     }}/><br/>
                                                <Typography component="h3" variant="h7">
                                                    회원가입
                                                </Typography><br/>
                                                <Divider color="#696969" sx={{height: 2, width: '400px'}}></Divider><br/>

                                                <RegisterService CheckCompany={CheckCompany} isExclusive={isExclusive}/>

                                            </Box>

                                        )}
                                    </Container>
                                </ThemeProvider>
                            </div>
                        </div>
                        </div>
                    ):(
                        <RequiredTerms />
                    )}

                </Desktop>


                <Tablet>
                    {isTerms ? (
                        <div style={{backgroundImage:`url(${background})`, width:'auto', height:'auto',paddingBottom:140}}>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center"
                        }}><br/>
                            <div className="signup-wrapper">
                                <ThemeProvider theme={theme}>
                                    <Container component="main" maxWidth="xl">
                                        <CssBaseline/>
                                        {isExclusive ? (
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',
                                                    height: '850px',
                                                    width: '400px',
                                                    borderRadius: '0.5rem',
                                                    border:1,
                                                    borderColor:'grey.500'
                                                }}
                                            ><br/>
                                                <RegisterLogo srcAddress={srcAddress}/>
                                                <img alt="No Images" src="images/img_logo_main.png"
                                                     style={{
                                                         display: 'flex',
                                                         alignItems: "center",
                                                         width: "220px"
                                                     }}/><br/>
                                                <Typography component="h3" variant="h7">
                                                    회원가입
                                                </Typography>
                                                <Divider color="#696969" sx={{height: 2, width: '420px',marginTop:1}}></Divider><br/>

                                                <RegisterService CheckCompany={CheckCompany} isExclusive={isExclusive}/>

                                            </Box>

                                        ):(
                                            <Box
                                                sx={{
                                                    marginTop: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',
                                                    height: '820px',
                                                    width: '400px',
                                                    borderRadius: '0.5rem',
                                                    border:1,
                                                    borderColor:'grey.500'
                                                }}
                                            ><br/><br/>
                                                <img alt="No Images" src="images/img_logo_main.png"
                                                     style={{
                                                         display: 'flex',
                                                         alignItems: "center",
                                                         width: "250px",
                                                     }}/><br/>
                                                <Typography component="h3" variant="h7">
                                                    회원가입
                                                </Typography><br/>
                                                <Divider color="#696969" sx={{height: 2, width: '350px'}}></Divider><br/>

                                                <RegisterService CheckCompany={CheckCompany} isExclusive={isExclusive}/>

                                            </Box>
                                        )}
                                    </Container>
                                </ThemeProvider>
                            </div>
                        </div>
                        </div>
                    ):(
                        <RequiredTerms />
                    )}
                </Tablet>
                <Mobile>
                    {isTerms ? (
                        <div style={{backgroundImage:`url(${background})`, width:'auto', height:'auto',paddingBottom:140}}>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center"
                        }}><br/>
                            <div className="signup-wrapper">
                                <ThemeProvider theme={theme}>
                                    <Container component="main" maxWidth="xl">
                                        <CssBaseline/>
                                        {isExclusive ? (
                                            <Box
                                                component= 'form'
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',
                                                    height: '800px',
                                                    width: '350px',
                                                    borderRadius: '0.5rem',
                                                    border:1,
                                                    borderColor:'grey.500'
                                                }}
                                            ><br/>
                                                <RegisterLogo srcAddress={srcAddress}/>
                                                <img alt="No Images" src="images/img_logo_main.png"
                                                     style={{
                                                         display: 'flex',
                                                         alignItems: "center",
                                                         width: "220px"
                                                     }}/><br/>
                                                <Typography component="h3" variant="h7">
                                                    회원가입
                                                </Typography>
                                                <Divider color="#696969" sx={{height: 2, width: '300px',marginTop:1}}></Divider><br/>

                                                <RegisterService CheckCompany={CheckCompany} isExclusive={isExclusive}/>

                                            </Box>

                                        ):(
                                            <Box

                                                sx={{
                                                    marginTop: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',
                                                    height: '750px',
                                                    width: '350px',
                                                    borderRadius: '0.5rem',
                                                    border:1,
                                                    borderColor:'grey.500'
                                                }}
                                            ><br/><br/>
                                                <img alt="No Images" src="images/img_logo_main.png"
                                                     style={{
                                                         display: 'flex',
                                                         alignItems: "center",
                                                         width: "250px",
                                                     }}/><br/>
                                                <Typography component="h3" variant="h7">
                                                    회원가입
                                                </Typography><br/>
                                                <Divider color="#696969" sx={{height: 2, width: '300px'}}></Divider><br/>

                                                <RegisterService CheckCompany={CheckCompany} isExclusive={isExclusive}/>

                                            </Box>
                                        )}
                                    </Container>
                                </ThemeProvider>
                            </div>
                        </div>
                        </div>
                    ):(
                        <RequiredTerms />
                    )}
                </Mobile>
        </>

    )
}