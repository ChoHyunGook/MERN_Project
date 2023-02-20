import background from "../../../../images/bg_yellow_flower_field.jpg";
import {Box, Typography} from "@mui/material";
import * as React from "react";
import AuthModifyService from "../service/AuthModifyService/AuthModifyService";
import {useEffect, useState} from "react";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function AuthModifyComponent(props){

    const { userData, srcAddress, CheckCompany } = props;

    const [isMarginTopsSet, setIsMarginTopSet] =useState(false)

    useEffect(()=>{
        if(CheckCompany === 'LG HelloVision'){
            setIsMarginTopSet(true)
        }else if(CheckCompany === 'LG U+'){
            setIsMarginTopSet(true)
        }else if(CheckCompany === 'Blaubit'){
            setIsMarginTopSet(true)
        }else {
            setIsMarginTopSet(false)
        }
    },[])


    return(
        <>


                <Desktop>
                    <div style={{backgroundImage: `url(${background})`,paddingTop:10,paddingBottom:250}}>
                        <div style={{display: 'flex', flexDirection:"column", alignItems:"center"}}>
                    <Box
                        component='form'
                        sx={{
                            marginTop: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '500px',
                            width: '450px',
                            borderRadius:'0.5rem',
                            border:1,
                            borderColor:'grey.500'

                        }}
                    ><br/>
                        {isMarginTopsSet ? (
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 5,
                                     paddingBottom:30
                                 }}/>
                        ):(
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 30,
                                     paddingBottom:40
                                 }}/>
                        )}

                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"300px",
                                 paddingBottom:30
                             }}/>
                        <div style={{paddingBottom:40}}>
                            <Typography component="h3" variant="h7">
                                고객정보 수정 전 비밀번호를 입력해주세요.
                            </Typography>
                        </div>
                        <AuthModifyService userData={userData}/>
                    </Box>
                        </div></div>
                </Desktop>

                <Tablet>
                    <div style={{backgroundImage: `url(${background})`,paddingTop:10,paddingBottom:450}}>
                        <div style={{display: 'flex', flexDirection:"column", alignItems:"center"}}>
                    <Box
                        component='form'
                        sx={{
                            marginTop: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '500px',
                            width: '400px',
                            borderRadius:'0.5rem',
                            border:1,
                            borderColor:'grey.500'

                        }}
                    ><br/>
                        {isMarginTopsSet ? (
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 5,
                                     paddingBottom:30
                                 }}/>
                        ):(
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 30,
                                     paddingBottom:40
                                 }}/>
                        )}

                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"250px",
                                 paddingBottom:30
                             }}/>
                        <div style={{paddingBottom:40}}>
                            <Typography component="h4" variant="h8">
                                고객정보 수정 전 비밀번호를 입력해주세요.
                            </Typography>
                        </div>
                        <AuthModifyService userData={userData}/>
                    </Box>
                        </div></div>
                </Tablet>

                <Mobile>
                    <div style={{backgroundImage: `url(${background})`,paddingTop:10,paddingBottom:250}}>
                        <div style={{display: 'flex', flexDirection:"column", alignItems:"center"}}>
                    <Box
                        component='form'
                        sx={{
                            marginTop: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '400px',
                            width: '350px',
                            borderRadius:'0.5rem',
                            border:1,
                            borderColor:'grey.500'

                        }}
                    ><br/>
                        {isMarginTopsSet ? (
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 5,
                                     paddingBottom:30
                                 }}/>
                        ):(
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 30,
                                     paddingBottom:40
                                 }}/>
                        )}

                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"200px",
                                 paddingBottom:30
                             }}/>
                        <div style={{paddingBottom:30}}>
                            <Typography component="h5" variant="h8">
                                고객정보 수정 전 비밀번호를 입력해주세요.
                            </Typography>
                        </div>
                        <AuthModifyService userData={userData}/>
                    </Box>
                        </div></div>
                </Mobile>

        </>
    )
}