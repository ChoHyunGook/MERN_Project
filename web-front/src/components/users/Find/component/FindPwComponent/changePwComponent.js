import background from "../../../../../images/bg_yellow_flower_field.jpg";
import {createTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import * as React from "react";
import ChangePwService from "../../service/FindPw/changePwService";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";




const theme = createTheme();

export default function ChangePwComponent(props){

    const { setPw, setPwMessage, setIsPw, setPwConfirm, setPwConfirmMessage, setIsPwConfirm,
        PwMessage, PwConfirmMessage, setRes, Pw, PwConfirm, isPw, isPwConfirm} = props

    return(
        <>
            <div style={{backgroundImage: `url(${background})`,}}>
            <div style={{
                display: 'flex',
                flexDirection:"column",
                alignItems:"center",
                paddingBottom:300
            }}><br/>
                <Desktop>
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '550px',
                            width: '500px',
                            borderRadius:'0.5rem'
                        }}
                    ><br/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"300px",
                                 paddingBottom:20
                             }}/>
                        <br/><br/>
                        <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                            비밀번호 변경
                        </Typography><br/>
                        <Divider color="#696969" sx={{ height: 2, width: '400px' }}></Divider><br/>

                        <ChangePwService setPw={setPw} setPwMessage={setPwMessage} setIsPw={setIsPw}
                                         setPwConfirm={setPwConfirm} setPwConfirmMessage={setPwConfirmMessage}
                                         setIsPwConfirm={setIsPwConfirm} PwMessage={PwMessage}
                                         PwConfirmMessage={PwConfirmMessage} setRes={setRes} Pw={Pw} PwConfirm={PwConfirm}
                                         isPw={isPw} isPwConfirm={isPwConfirm}/>

                    </Box>
                </Desktop>

                <Tablet>
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '500px',
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
                            비밀번호 변경
                        </Typography><br/>
                        <Divider color="#696969" sx={{ height: 2, width: '350px' }}></Divider><br/>

                        <ChangePwService setPw={setPw} setPwMessage={setPwMessage} setIsPw={setIsPw}
                                         setPwConfirm={setPwConfirm} setPwConfirmMessage={setPwConfirmMessage}
                                         setIsPwConfirm={setIsPwConfirm} PwMessage={PwMessage}
                                         PwConfirmMessage={PwConfirmMessage} setRes={setRes} Pw={Pw} PwConfirm={PwConfirm}
                                         isPw={isPw} isPwConfirm={isPwConfirm}/>

                    </Box>
                </Tablet>

                <Mobile>
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '500px',
                            width: '350px',
                            borderRadius:'0.5rem'
                        }}
                    ><br/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"200px"
                             }}/>
                        <br/><br/>
                        <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                            비밀번호 변경
                        </Typography><br/>
                        <Divider color="#696969" sx={{ height: 2, width: '300px' }}></Divider><br/>

                        <ChangePwService setPw={setPw} setPwMessage={setPwMessage} setIsPw={setIsPw}
                                         setPwConfirm={setPwConfirm} setPwConfirmMessage={setPwConfirmMessage}
                                         setIsPwConfirm={setIsPwConfirm} PwMessage={PwMessage}
                                         PwConfirmMessage={PwConfirmMessage} setRes={setRes} Pw={Pw} PwConfirm={PwConfirm}
                                         isPw={isPw} isPwConfirm={isPwConfirm}/>

                    </Box>
                </Mobile>

            </div>
            </div>
        </>
    )
}