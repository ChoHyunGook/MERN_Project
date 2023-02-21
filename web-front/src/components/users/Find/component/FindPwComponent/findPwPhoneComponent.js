import background from "../../../../../images/bg_yellow_flower_field.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FindPwPhoneService from "../../service/FindPw/findPwPhoneService";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";


export default function FindPwPhoneComponent(props){

    const { Email, setEmail, Phone, setPhone, signNum, setSignNum, setEmailMessage, PhoneMessage, setPhoneMessage,
        sign, setSign, isEmail, setIsEmail, setIsPhone, setRes }=props



    return(
        <>
                <Desktop>
                    <div style={{backgroundImage: `url(${background})`,backgroundSize:'cover'}}>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center",
                            paddingBottom:300
                        }}><br/>
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '680px',
                            width: '520px',
                            borderRadius: '0.5rem'
                        }}
                    ><br/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display: 'flex',
                                 alignItems: "center",
                                 width: "300px"
                             }}/><br/><br/>
                        <Typography component="h3" variant="h7" sx={{paddingBottom:4}}>
                            핸드폰으로 비밀번호 찾기
                        </Typography><br/>
                        <Divider color="#696969" sx={{height: 2, width: '420px'}}></Divider><br/>

                        <FindPwPhoneService Email={Email} setEmail={setEmail} Phone={Phone} setPhone={setPhone}
                                            signNum={signNum} setSignNum={setSignNum} setEmailMessage={setEmailMessage}
                                            PhoneMessage={PhoneMessage} setPhoneMessage={setPhoneMessage} sign={sign}
                                            setSign={setSign} isEmail={isEmail} setIsEmail={setIsEmail}
                                            setIsPhone={setIsPhone} setRes={setRes}/>

                    </Box>
                        </div></div>
                </Desktop>

                <Tablet>
                    <div style={{backgroundImage: `url(${background})`,backgroundSize:'cover'}}>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center",
                            paddingBottom:800
                        }}><br/>
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '650px',
                            width: '400px',
                            borderRadius: '0.5rem'
                        }}
                    ><br/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display: 'flex',
                                 alignItems: "center",
                                 width: "250px",
                                 paddingBottom:20
                             }}/><br/>
                        <Typography component="h3" variant="h7" sx={{paddingBottom:3}}>
                            핸드폰으로 비밀번호 찾기
                        </Typography><br/>
                        <Divider color="#696969" sx={{height: 2, width: '350px'}}></Divider><br/>

                        <FindPwPhoneService Email={Email} setEmail={setEmail} Phone={Phone} setPhone={setPhone}
                                            signNum={signNum} setSignNum={setSignNum} setEmailMessage={setEmailMessage}
                                            PhoneMessage={PhoneMessage} setPhoneMessage={setPhoneMessage} sign={sign}
                                            setSign={setSign} isEmail={isEmail} setIsEmail={setIsEmail}
                                            setIsPhone={setIsPhone} setRes={setRes}/>

                    </Box>
                        </div></div>
                </Tablet>

                <Mobile>
                    <div style={{backgroundImage: `url(${background})`,backgroundSize:'cover'}}>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center",
                            paddingBottom:500
                        }}><br/>
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '550px',
                            width: '350px',
                            borderRadius: '0.5rem'
                        }}
                    ><br/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display: 'flex',
                                 alignItems: "center",
                                 width: "200px"
                             }}/><br/>
                        <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                            핸드폰으로 비밀번호 찾기
                        </Typography><br/>
                        <Divider color="#696969" sx={{height: 2, width: '300px'}}></Divider><br/>

                        <FindPwPhoneService Email={Email} setEmail={setEmail} Phone={Phone} setPhone={setPhone}
                                            signNum={signNum} setSignNum={setSignNum} setEmailMessage={setEmailMessage}
                                            PhoneMessage={PhoneMessage} setPhoneMessage={setPhoneMessage} sign={sign}
                                            setSign={setSign} isEmail={isEmail} setIsEmail={setIsEmail}
                                            setIsPhone={setIsPhone} setRes={setRes}/>

                    </Box>
                        </div>
                    </div>
                </Mobile>



        </>
    )

}