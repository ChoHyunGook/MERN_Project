import background from "../../../../../images/bg_yellow_flower_field.jpg";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";
import FindPwSelectService from "../../service/FindPw/findPwSelectService";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";


export default function FindPwSelectComponent(props){

    const {Email, setEmail, Phone, setPhone}= props



    return(
        <>
            <div style={{backgroundImage: `url(${background})`, paddingBottom:280}}>
                <div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                <Desktop>
                    <>
                        <Box style={{
                            marginTop:70,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '500px',
                            width: '600px',
                            borderRadius:'1rem'
                        }}>
                                <img alt="No Images" src="images/img_logo_main.png"
                                     style={{
                                         marginTop: 20,
                                         display:'flex',
                                         alignItems: "center",
                                         width:"250px"
                                     }}/>
                                <Typography component="h3" variant="h7"
                                            style={{
                                                marginTop:20}}>
                                    비밀번호 인증유형
                                </Typography>
                                <Container maxWidth="sm">
                                    <Grid container spacing={2}>
                                        <FindPwSelectService Email={Email} setEmail={setEmail} Phone={Phone} setPhone={setPhone}/>
                                    </Grid>
                                </Container>
                        </Box>
                    </>
                </Desktop>
                <Tablet>
                        <Box style={{
                            marginTop:70,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '500px',
                            width: '600px',
                            borderRadius:'1rem'
                        }}>
                                <img alt="No Images" src="images/img_logo_main.png"
                                     style={{
                                         marginTop: 20,
                                         display:'flex',
                                         alignItems: "center",
                                         width:"250px"
                                     }}/>
                                <Typography component="h3" variant="h7"
                                            style={{
                                                marginTop:20}}>
                                    비밀번호 인증유형
                                </Typography>
                            <FindPwSelectService Email={Email} setEmail={setEmail} Phone={Phone} setPhone={setPhone}/>

                        </Box>
                </Tablet>
                <Mobile>
                        <Box style={{
                            marginTop:100,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '500px',
                            width: '350px',
                            borderRadius:'1rem'
                        }}>
                                <img alt="No Images" src="images/img_logo_main.png"
                                     style={{
                                         marginTop: 20,
                                         display:'flex',
                                         alignItems: "center",
                                         width:"250px"
                                     }}/>
                                <Typography component="h3" variant="h7"
                                            style={{
                                                marginTop:20}}>
                                    비밀번호 인증유형
                                </Typography>
                            <>
                            <FindPwSelectService Email={Email} setEmail={setEmail} Phone={Phone} setPhone={setPhone}/>
                            </>
                        </Box>
                </Mobile>
                </div>
            </div>
        </>
    )
}