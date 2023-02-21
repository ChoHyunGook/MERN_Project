import background from "../../../../../images/bg_yellow_flower_field.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FindPwEmailService from "../../service/FindPw/findPwEmailService";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";


export default function FindPwEmailComponent(props){

    const { Name, setName, userid, setUserid, signNum, setSignNum, setMail, setRes, NameMessage,
        setNameMessage,  setIsName,  setIsEmail, setEmailMessage, EmailMessage } = props


    return(
        <>

                    <Desktop>
                        <div style={{backgroundImage: `url(${background})`,}}>
                            <div style={{
                                display: 'flex',
                                flexDirection:"column",
                                alignItems:"center",
                                backgroundSize:'cover',
                                paddingBottom:300

                            }}><br/>
                        <Box
                            component="form"
                            sx={{
                                marginTop: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '670px',
                                width: '520px',
                                borderRadius:'0.5rem'
                            }}
                        ><br/><br/>
                            <img alt="No Images" src="images/img_logo_main.png"
                                 style={{
                                     display:'flex',
                                     alignItems: "center",
                                     width:"300px",
                                     paddingBottom:20
                                 }}/><br/>
                            <Typography component="h3" variant="h7" sx={{paddingBottom:4}}>
                                E-mail로 비밀번호 찾기
                            </Typography>
                            <Divider color="#696969" sx={{ height: 2, width: '420px' }}></Divider><br/>


                            <FindPwEmailService Name={Name} setName={setName} userid={userid} setUserid={setUserid}
                                                signNum={signNum} setSignNum={setSignNum} setMail={setMail} setRes={setRes}
                                                NameMessage={NameMessage} setNameMessage={setNameMessage}
                                                setIsName={setIsName} setIsEmail={setIsEmail}
                                                setEmailMessage={setEmailMessage} EmailMessage={EmailMessage}/>

                        </Box>
                            </div></div>
                    </Desktop>

                    <Tablet>
                        <div style={{backgroundImage: `url(${background})`,backgroundSize:'cover',}}>
                            <div style={{
                                display: 'flex',
                                flexDirection:"column",
                                alignItems:"center",
                                backgroundSize:'cover',
                                paddingBottom:800

                            }}><br/>
                        <Box
                            component="form"
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
                                     width:"250px",
                                     paddingBottom:20
                                 }}/><br/>
                            <Typography component="h3" variant="h7" sx={{paddingBottom:3}}>
                                E-mail로 비밀번호 찾기
                            </Typography>
                            <Divider color="#696969" sx={{ height: 2, width: '350px' }}></Divider><br/>

                            <FindPwEmailService Name={Name} setName={setName} userid={userid} setUserid={setUserid}
                                                signNum={signNum} setSignNum={setSignNum} setMail={setMail} setRes={setRes}
                                                NameMessage={NameMessage} setNameMessage={setNameMessage}
                                                setIsName={setIsName} setIsEmail={setIsEmail}
                                                setEmailMessage={setEmailMessage} EmailMessage={EmailMessage}/>


                        </Box>
                            </div></div>
                    </Tablet>

                    <Mobile>
                        <div style={{backgroundImage: `url(${background})`,}}>
                            <div style={{
                                display: 'flex',
                                flexDirection:"column",
                                alignItems:"center",
                                backgroundSize:'cover',
                                paddingBottom:500

                            }}><br/>
                        <Box
                            component="form"
                            sx={{
                                marginTop: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '520px',
                                width: '350px',
                                borderRadius:'0.5rem'
                            }}
                        ><br/>
                            <img alt="No Images" src="images/img_logo_main.png"
                                 style={{
                                     display:'flex',
                                     alignItems: "center",
                                     width:"200px"
                                 }}/><br/>
                            <Typography component="h3" variant="h7" sx={{paddingBottom:2}}>
                                E-mail로 비밀번호 찾기
                            </Typography>
                            <Divider color="#696969" sx={{ height: 2, width: '300px' }}></Divider><br/>


                            <FindPwEmailService Name={Name} setName={setName} userid={userid} setUserid={setUserid}
                                                signNum={signNum} setSignNum={setSignNum} setMail={setMail} setRes={setRes}
                                                NameMessage={NameMessage} setNameMessage={setNameMessage}
                                                setIsName={setIsName} setIsEmail={setIsEmail}
                                                setEmailMessage={setEmailMessage} EmailMessage={EmailMessage}/>


                        </Box>
                            </div>
                        </div>
                    </Mobile>


        </>


    )

}