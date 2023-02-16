import React, {useEffect, useState} from 'react'
import background from "../../../images/bg_yellow_flower_field.jpg";
import {createTheme} from "@mui/material/styles";
import {Box} from "@mui/material";
import { signCheck } from "../../../api";
import RequiredLogin from "../../users/RequiredService/main/RequiredLogin";
import TableService from "../service/Desktop/TableService";
import {Desktop, Mobile, Tablet} from "../../../containers/Responsive/responsive";
import TableServiceTablet from "../service/Tablet/TableServiceTablet";
import TableServiceMobile from "../service/Mobile/TableServiceMobile";



export default function TableComponent(){

    //로그인 체크
    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            signCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data);
                    }
                })
                .catch((err)=>{
                })
        }catch (err){
        }
    }, [])

    return(
        <>
        {isLogin ? (
            <div style={{
                             backgroundImage: `url(${background})`,
                             paddingBottom:40
                          }}>
                <div style={{display: 'flex',
                    flexDirection:"column",
                    alignItems:"center",}}>
                    <Desktop>
                        <Box
                            sx={{
                                marginTop: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '850px',
                                borderRadius:'2rem'
                            }}
                        >
                            <TableService />
                        </Box>
                    </Desktop>


                    <Tablet>
                        <Box
                            sx={{
                                marginTop: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '950px',
                                width: '550px',
                                borderRadius:'2rem'
                            }}
                        >
                            <TableServiceTablet />
                        </Box>
                    </Tablet>


                    <Mobile>
                        <Box
                            sx={{
                                marginTop: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '950px',
                                width: '350px',
                                borderRadius:'2rem'
                            }}
                        >
                            <TableServiceMobile />
                        </Box>
                    </Mobile>


                </div>

            </div>
        ):(
                <RequiredLogin />
            )}
        </>
    )
}