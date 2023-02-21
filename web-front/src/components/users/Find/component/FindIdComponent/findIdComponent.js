import background from "../../../../../images/bg_yellow_flower_field.jpg";
import {createTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import FindIdService from "../../service/FindId/findIdService";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";




export default function FindIdComponent(props){

    const {Name, setName, Phone, setPhone, signNum, setSignNum, PhoneMessage, setPhoneMessage,
        setIsPhone, sign, setSign, setRes } = props

    const theme = createTheme();


    return(
        <>

            <Desktop>
                <div style={{
                    backgroundImage: `url(${background})`,
                    width:'auto',
                    paddingBottom:300
                }}><br/>
                    <div style={{display: 'flex',
                        flexDirection: "column",
                        alignItems: "center",}}>
                <Box
                    component='form'
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '650px',
                        width: '500px',
                        borderRadius:'0.5rem'
                    }}
                ><br/>
                    <img alt="No Images" src="images/img_logo_main.png"
                         style={{
                             display:'flex',
                             alignItems: "center",
                             width:"250px",
                             marginTop:10
                         }}/>
                    <br/><br/>
                    <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                        아이디 찾기
                    </Typography>
                    <Divider color="#696969" sx={{ height: 2, width: '400px' }}></Divider><br/>

                    <FindIdService Name={Name} setName={setName} Phone={Phone} setPhone={setPhone}
                                   signNum={signNum} setSignNum={setSignNum} PhoneMessage={PhoneMessage}
                                   setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone} sign={sign}
                                   setSign={setSign} setRes={setRes}/>


                </Box>
                    </div></div>
            </Desktop>

            <Tablet>
                <div style={{
                    backgroundImage: `url(${background})`,
                    width:'auto',
                    backgroundSize:'cover',
                    paddingBottom:800
                }}><br/>
                    <div style={{display: 'flex',
                        flexDirection: "column",
                        alignItems: "center",}}>
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '620px',
                        width: '400px',
                        borderRadius:'0.5rem'
                    }}
                ><br/>
                    <img alt="No Images" src="images/img_logo_main.png"
                         style={{
                             display:'flex',
                             alignItems: "center",
                             width:"250px"
                         }}/>
                    <br/><br/>
                    <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                        아이디 찾기
                    </Typography>
                    <Divider color="#696969" sx={{ height: 2, width: '350px' }}></Divider><br/>

                    <FindIdService Name={Name} setName={setName} Phone={Phone} setPhone={setPhone}
                                   signNum={signNum} setSignNum={setSignNum} PhoneMessage={PhoneMessage}
                                   setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone} sign={sign}
                                   setSign={setSign} setRes={setRes}/>


                </Box>
                    </div></div>
            </Tablet>

            <Mobile>
                <div style={{
                    backgroundImage: `url(${background})`,
                    width:'auto',
                    paddingBottom:500
                }}><br/>
                    <div style={{display: 'flex',
                        flexDirection: "column",
                        alignItems: "center",}}>
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '550px',
                        width: '350px',
                        borderRadius:'0.5rem'
                    }}
                ><br/>
                    <img alt="No Images" src="images/img_logo_main.png"
                         style={{
                             display:'flex',
                             alignItems: "center",
                             width:"220px",
                             paddingBottom:10
                         }}/>
                    <br/>
                    <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                        아이디 찾기
                    </Typography>
                    <Divider color="#696969" sx={{ height: 2, width: '300px' }}></Divider><br/>

                    <FindIdService Name={Name} setName={setName} Phone={Phone} setPhone={setPhone}
                                   signNum={signNum} setSignNum={setSignNum} PhoneMessage={PhoneMessage}
                                   setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone} sign={sign}
                                   setSign={setSign} setRes={setRes}/>


                </Box>
                    </div>
                </div>
            </Mobile>
        </>
    )
}