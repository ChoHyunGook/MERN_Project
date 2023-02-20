import React, {useEffect, useState} from 'react'
import background from "../../../../images/bg_yellow_flower_field.jpg";
import {Box, Typography} from "@mui/material";
import ModifyService from "../service/ModifyService/ModifyService";
import {authModifySignCheck} from "../../../../api";
import RequiredAuthModify from "../../RequiredService/main/RequiredAuthModify";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";




export default function ModifyComponent(props){

    const { userData, srcAddress, CheckCompany } = props;

    const [isAuthModify,setIsAuthModify] = useState(false)
    const [res,setRes]=useState('')

    useEffect(()=>{
        authModifySignCheck()
            .then((res)=>{
                setIsAuthModify(true)
                setRes(res.data)
            })
            .catch((err)=>{
            })
    },[])

    const [isMarginTop, setIsMarginTop] =useState(false)

    useEffect(()=>{
        if(CheckCompany === 'LG HelloVision'){
            setIsMarginTop(true)
        }else if(CheckCompany === 'LG U+'){
            setIsMarginTop(true)
        }else if(CheckCompany === 'Blaubit'){
            setIsMarginTop(true)
        }else{
            setIsMarginTop(false)
        }
    },[])


    return(
        <>
            {isAuthModify ? (
                <div style={{
                    backgroundImage: `url(${background})`,
                    paddingBottom:350
                }}><br/>
                    <div style={{ display: 'flex',
                        flexDirection:"column",
                        alignItems:"center",}}>
            <Desktop>
                {isMarginTop ? (
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '700px',
                            width: '500px',
                            borderRadius:'0.5rem'
                        }}
                    ><br/>
                        <img alt="No Images" src={srcAddress}
                             style={{
                                 marginTop: 1,
                                 paddingBottom:30
                             }}/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"250px",
                                 paddingBottom:30
                             }}/>
                        <div style={{paddingBottom:30}}>
                            <Typography component="h3" variant="h7">
                                계약자 정보 수정 / 회원 탈퇴
                            </Typography>
                        </div>
                        <ModifyService userData={userData} srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                    </Box>
                ):(
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '700px',
                            width: '500px',
                            borderRadius:'0.5rem'
                        }}
                    ><br/>
                        <img alt="No Images" src={srcAddress}
                             style={{
                                 marginTop: 1,
                                 paddingBottom:30
                             }}/>
                        <img alt="No Images" src="images/img_logo_main.png"
                             style={{
                                 display:'flex',
                                 alignItems: "center",
                                 width:"250px",
                                 paddingBottom:30
                             }}/>
                        <div style={{paddingBottom:30}}>
                            <Typography component="h3" variant="h7">
                                계약자 정보 수정 / 회원 탈퇴
                            </Typography>
                        </div>
                        <ModifyService userData={userData} srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                    </Box>
                )}
            </Desktop>

                        <Tablet>
                            {isMarginTop ? (
                                <Box
                                    sx={{
                                        marginTop: 15,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '700px',
                                        width: '450px',
                                        borderRadius:'0.5rem'
                                    }}
                                ><br/>
                                    <img alt="No Images" src={srcAddress}
                                         style={{
                                             marginTop: 1,
                                             paddingBottom:30
                                         }}/>
                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             display:'flex',
                                             alignItems: "center",
                                             width:"200px",
                                             paddingBottom:30
                                         }}/>
                                    <div style={{paddingBottom:30}}>
                                        <Typography component="h4" variant="h8">
                                            계약자 정보 수정 / 회원 탈퇴
                                        </Typography>
                                    </div>
                                    <ModifyService userData={userData} srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                                </Box>
                            ):(
                                <Box
                                    sx={{
                                        marginTop: 15,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '700px',
                                        width: '450px',
                                        borderRadius:'0.5rem'
                                    }}
                                ><br/>
                                    <img alt="No Images" src={srcAddress}
                                         style={{
                                             marginTop: 1,
                                             paddingBottom:30
                                         }}/>
                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             display:'flex',
                                             alignItems: "center",
                                             width:"200px",
                                             paddingBottom:30
                                         }}/>
                                    <div style={{paddingBottom:30}}>
                                        <Typography component="h4" variant="h8">
                                            계약자 정보 수정 / 회원 탈퇴
                                        </Typography>
                                    </div>
                                    <ModifyService userData={userData} srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                                </Box>
                            )}
                        </Tablet>


                        <Mobile>
                            {isMarginTop ? (
                                <Box
                                    sx={{
                                        marginTop: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '750px',
                                        width: '350px',
                                        borderRadius:'0.5rem'
                                    }}
                                ><br/>
                                    <img alt="No Images" src={srcAddress}
                                         style={{
                                             marginTop: 1,
                                             paddingBottom:30
                                         }}/>
                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             display:'flex',
                                             alignItems: "center",
                                             width:"200px",
                                             paddingBottom:30
                                         }}/>
                                    <div style={{paddingBottom:30}}>
                                        <Typography component="h5" variant="h8">
                                            계약자 정보 수정 / 회원 탈퇴
                                        </Typography>
                                    </div>
                                    <ModifyService userData={userData} srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                                </Box>
                            ):(
                                <Box
                                    sx={{
                                        marginTop: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '700px',
                                        width: '350px',
                                        borderRadius:'0.5rem'
                                    }}
                                ><br/>
                                    <img alt="No Images" src={srcAddress}
                                         style={{
                                             marginTop: 1,
                                             paddingBottom:30
                                         }}/>
                                    <img alt="No Images" src="images/img_logo_main.png"
                                         style={{
                                             display:'flex',
                                             alignItems: "center",
                                             width:"250px",
                                             paddingBottom:30
                                         }}/>
                                    <div style={{paddingBottom:30}}>
                                        <Typography component="h5" variant="h8">
                                            계약자 정보 수정 / 회원 탈퇴
                                        </Typography>
                                    </div>
                                    <ModifyService userData={userData} srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                                </Box>
                            )}
                        </Mobile>


                    </div>
                </div>
            ):(
                <RequiredAuthModify />
            )}

        </>
    )

}