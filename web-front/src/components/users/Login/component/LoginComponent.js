import background from "../../../../images/bg_yellow_flower_field.jpg";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LoginService from "../service/LoginService";
import FooterFindRegister from "../service/FooterFindRegister";
import * as React from "react";
import {Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function LoginComponent(props){

    const { userid, setUserid, password, setPassword, EmailMessage,
        setEmailMessage, PwMessage, setPwMessage, setIsEmail, setIsPw, setRes  } = props



    return(
        <>
            <div style={{backgroundImage:`url(${background})`,paddingTop:10,paddingBottom:250}}>
                <div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                    <Desktop>
                        <Box
                            sx={{
                                marginTop: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '620px',
                                width: '500px',
                                borderRadius:'0.5rem',
                                border:1,
                                borderColor:'grey.500'

                            }}
                        ><br/><br/>
                            <img alt="No Images" src="images/img_logo_main.png"
                                 style={{
                                     display:'flex',
                                     alignItems: "center",
                                     width:"auto",
                                     height:'50px'
                                 }}/>
                            <br/><br/>
                            <Typography component="h1" variant="h5">
                                로그인
                            </Typography><br/>
                            <Divider color="#696969" sx={{height: 2, width: '400px'}}></Divider><br/>
                            <Box component="form"  noValidate sx={{ mt: 1 }} >
                                <Container fixed maxWidth="xs">

                                    <LoginService userid={userid} setUserid={setUserid} password={password} setPassword={setPassword}
                                                  EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                                                  setPwMessage={setPwMessage} setIsEmail={setIsEmail} setIsPw={setIsPw} setRes={setRes}/>

                                    <FooterFindRegister />

                                </Container>
                            </Box>
                        </Box>
                    </Desktop>

                    <Tablet>
                        <Box
                            component='form'
                            sx={{
                                marginTop: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '520px',
                                width: '400px',
                                borderRadius:'0.5rem',
                                border:1,
                                borderColor:'grey.500'

                            }}
                        ><br/>
                            <img alt="No Images" src="images/img_logo_main.png"
                                 style={{
                                     display:'flex',
                                     alignItems: "center",
                                     width:"260px",
                                     height:'50px'
                                 }}/>
                            <br/>
                            <Typography component="h3" variant="h7">
                                로그인
                            </Typography><br/>
                            <Divider color="#696969" sx={{height: 2, width: '300px'}}></Divider><br/>

                                    <LoginService userid={userid} setUserid={setUserid} password={password} setPassword={setPassword}
                                                  EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                                                  setPwMessage={setPwMessage} setIsEmail={setIsEmail} setIsPw={setIsPw} setRes={setRes}/>

                                    <FooterFindRegister />
                        </Box>

                    </Tablet>

                    <Mobile>
                        <Box
                            component='form'
                            sx={{
                                marginTop: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '500px',
                                width: '350px',
                                borderRadius:'0.5rem',
                                border:1,
                                borderColor:'grey.500'

                            }}
                        ><br/>
                            <img alt="No Images" src="images/img_logo_main.png"
                                 style={{
                                     display:'flex',
                                     alignItems: "center",
                                     width:"220px",
                                     height:'40px'
                                 }}/>
                            <br/>
                            <Typography component="h3" variant="h7">
                                로그인
                            </Typography><br/>
                            <Divider color="#696969" sx={{height: 2, width: '300px'}}></Divider><br/>

                            <LoginService userid={userid} setUserid={setUserid} password={password} setPassword={setPassword}
                                          EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                                          setPwMessage={setPwMessage} setIsEmail={setIsEmail} setIsPw={setIsPw} setRes={setRes}/>

                            <FooterFindRegister />

                        </Box>
                    </Mobile>
                </div>
            </div>
        </>
    )
}