import React, {useEffect, useState} from 'react'
import background from "../../../images/bg_yellow_flower_field.jpg";
import {Box} from "@mui/material";
import {companyCheck, signCheck} from "../../../api";
import RequiredLogin from "../../users/RequiredService/main/RequiredLogin";
import TableService from "../service/Desktop/TableService";
import {Desktop, Mobile, Tablet} from "../../../containers/Responsive/responsive";
import TableServiceTablet from "../service/Tablet/TableServiceTablet";
import TableServiceMobile from "../service/Mobile/TableServiceMobile";


export default function TableComponent() {

    //로그인 체크
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        try {
            signCheck()
                .then((res) => {
                    if (res.status === 200) {
                        setIsLogin(true);
                        setUser(res.data);
                    }
                })
                .catch((err) => {
                })
        } catch (err) {
        }
    }, [])


    const [srcAddress, setSrcAddress] = useState('')
    const [CheckCompany, setCheckCompany] = useState('')

    useEffect(() => {
        companyCheck()
            .then((res) => {
                if (res.data === 'LG HelloVision') {
                    setSrcAddress("../../../images/lg_hello.png")
                    setCheckCompany('LG HelloVision')
                } else if (res.data === 'Samsung S1') {
                    setSrcAddress("../../../images/s1.png")
                    setCheckCompany('Samsung S1')
                } else if (res.data === 'LG U+') {
                    setSrcAddress("../../../images/lgu.png")
                    setCheckCompany('LG U+')
                } else if (res.data === 'RAEMIAN') {
                    setSrcAddress("../../../images/raemian.png")
                    setCheckCompany('RAEMIAN')
                } else if (res.data === 'THE WAVE') {
                    setSrcAddress("../../../images/the_wave.png")
                    setCheckCompany('THE WAVE')
                } else if (res.data === 'ETCETRA') {
                    setSrcAddress("../../../images/etcetra.png")
                    setCheckCompany('ETCETRA')
                } else if (res.data === 'Samsung C&T') {
                    setSrcAddress("../../../images/samsung_mulsan.png")
                    setCheckCompany('Samsung C&T')
                } else if (res.data === 'Coway') {
                    setSrcAddress("../../../images/coway.png")
                    setCheckCompany('Coway')
                } else {
                    //블라우비트
                    setSrcAddress("../../../images/new_blaubit.png")
                    setCheckCompany('Blaubit')
                }
            })
    }, [])


    return (
        <>
            {isLogin ? (
                <>
                    <Desktop>
                        <div style={{
                            backgroundImage: `url(${background})`,
                            paddingBottom: 40
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <Box
                                    sx={{
                                        marginTop: 5,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '850px',
                                        borderRadius: '2rem'
                                    }}
                                >
                                    <TableService srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                                </Box>
                            </div>
                        </div>
                    </Desktop>


                    <Tablet>
                        <div style={{
                            backgroundImage: `url(${background})`,
                            paddingBottom: 100
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <Box
                                    sx={{
                                        marginTop: 5,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '950px',
                                        width: '550px',
                                        borderRadius: '2rem'
                                    }}
                                >
                                    <TableServiceTablet srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                                </Box>
                            </div>
                        </div>
                    </Tablet>


                    <Mobile>
                        <div style={{
                            backgroundImage: `url(${background})`,
                            paddingBottom: 320
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <Box
                                    sx={{
                                        marginTop: 10,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'white',
                                        height: '450px',
                                        width: '350px',
                                        borderRadius: '2rem'
                                    }}
                                >
                                    <TableServiceMobile srcAddress={srcAddress} CheckCompany={CheckCompany}/>
                                </Box>
                            </div>
                        </div>
                    </Mobile>
                </>

            ) : (
                <RequiredLogin/>
            )}
        </>
    )
}