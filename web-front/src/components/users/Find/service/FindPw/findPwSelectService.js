import {Button, Typography} from "@mui/material";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import React from 'react'

export default function FindPwSelectService(props){

    const {setEmail,setPhone, Email, Phone} = props

    const EmailHandler = (e) => {
        setEmail(e.target.value)
        window.location.replace("/findPwEmail")

    }
    const PhoneHandler = (e) => {
        setPhone(e.target.value)
        window.location.replace("/findPwPhone")
    }

    return(
        <>
            <Desktop>
                <div style={{display:'flex',alignItems:'center'}}>
                    <Button
                        variant="outlined"
                        value={Email}
                        sx={{
                            color:'#becfd1',
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '350px',
                            width: '300px',
                            borderRadius:'1rem',
                            border:1,
                            "&.MuiButton-root:hover":{
                                color:'#008DDC',
                                backgroundColor:'white',
                                borderColor:'#008DDC'
                            }
                        }}
                        onClick={EmailHandler}
                    >
                        <Typography component="h2" variant="h7" sx={{paddingBottom:5,marginTop:-5}}>
                        이메일 인증
                    </Typography>
                        <img alt="No Images" src="images/email.png"
                             style={{
                                 marginTop:20,
                                 display:'flex',
                                 alignItems:'top center',
                                 width:'200px',
                                 height:'170px'}
                             }/>
                    </Button>

                    <div style={{width:20}}></div>

                    <Button
                        value={Phone}
                        variant="outlined"
                        sx={{
                            color:'#becfd1',
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '350px',
                            width: '300px',
                            borderRadius:'1rem',
                            border:0.5,
                            "&.MuiButton-root:hover":{
                                color:'#008DDC',
                                backgroundColor:'white',
                                borderColor:'#008DDC'
                            }
                        }}
                        onClick={PhoneHandler}
                    ><Typography component="h2" variant="h7" sx={{paddingBottom:3,marginTop:-5}}>
                        핸드폰 인증
                    </Typography>
                        <img alt="No Images" src="images/phone2.png"
                             style={{
                                 marginTop:20,
                                 display:'flex',
                                 alignItems:'top center',
                                 width:'200px',
                                 height:'190px'}
                             }/>
                    </Button>
                </div>
            </Desktop>

            <Tablet>
                <div style={{display:'flex',alignItems:'center',padding:2}}>
                <Button
                    variant="outlined"
                    value={Email}
                    sx={{
                        color:'#becfd1',
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '300px',
                        width: '270px',
                        borderRadius:'1rem',
                        border:1,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'white',
                            borderColor:'#008DDC'
                        }
                    }}
                    onClick={EmailHandler}
                > <Typography component="h2" variant="h7" sx={{paddingBottom:3}}>
                    이메일 인증
                </Typography>
                    <img alt="No Images" src="images/email.png"
                         style={{
                             marginTop:2,
                             display:'flex',
                             alignItems:'top center',
                             width:'200px',
                             height:'170px'}
                         }/>
                </Button>

                    <div style={{width:20}}></div>

                <Button
                    value={Phone}
                    variant="outlined"
                    sx={{
                        color:'#becfd1',
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '300px',
                        width: '270px',
                        borderRadius:'1rem',
                        border:0.5,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'white',
                            borderColor:'#008DDC'
                        }
                    }}
                    onClick={PhoneHandler}
                ><Typography component="h2" variant="h7" sx={{paddingBottom:3}}>
                    핸드폰 인증
                </Typography>
                    <img alt="No Images" src="images/phone2.png"
                         style={{
                             marginTop:5,
                             display:'flex',
                             alignItems:'top center',
                             width:'180px',
                             height:'170px'}
                         }/>
                </Button>
                </div>
            </Tablet>

            <Mobile>
                <Button
                    variant="outlined"
                    value={Email}
                    sx={{
                        color:'#becfd1',
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '150px',
                        width: '270px',
                        borderRadius:'1rem',
                        border:1,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'white',
                            borderColor:'#008DDC'
                        }
                    }}
                    onClick={EmailHandler}
                > <Typography component="h2" variant="h7" sx={{marginTop:-1}}>
                    이메일 인증
                </Typography>
                    <img alt="No Images" src="images/email.png"
                         style={{
                             marginTop:2,
                             display:'flex',
                             alignItems:'top center',
                             width:'100px',
                             height:'80px'}
                         }/>
                </Button>

                <Button
                    value={Phone}
                    variant="outlined"
                    sx={{
                        color:'#becfd1',
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '150px',
                        width: '270px',
                        borderRadius:'1rem',
                        border:0.5,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'white',
                            borderColor:'#008DDC'
                        }
                    }}
                    onClick={PhoneHandler}
                ><Typography component="h2" variant="h7" sx={{marginTop:-1}}>
                    핸드폰 인증
                </Typography>
                    <img alt="No Images" src="images/phone2.png"
                         style={{
                             marginTop:5,
                             display:'flex',
                             alignItems:'top center',
                             width:'80px',
                             height:'80px'}
                         }/>
                </Button>
            </Mobile>





        </>
    )
}