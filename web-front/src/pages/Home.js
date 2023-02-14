import React, {useEffect, useState} from "react";
import {authHomeCheck, signAllCheck} from "../api";
import AfterLoginDesktop from "./components/Desktop/AfterLoginDesktop";
import BeforeLoginDesktop from "./components/Desktop/BeforeLoginDesktop";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Layout from "../containers/main/Layout";
import AuthHome from "../components/auth/authHome";
import {useMediaQuery} from "react-responsive";
import background from "../images/bg_index.png";
import {Typography} from "@mui/material";
import LgHelloService from "./services/lgHelloService";
import LgUService from "./services/lgUService";
import S1Service from "./services/s1Service";
import RaemianService from "./services/raemianService";
import CowayService from "./services/cowayService";
import BeforeLoginTablet from "./components/Tablet/BeforeLoginTablet";
import AfterLoginTablet from "./components/Tablet/AfterLoginTablet";
import BeforeLoginPhone from "./components/Phone/BeforeLoginPhone";
import AfterLoginPhone from "./components/Phone/AfterLoginPhone";
import styled from "styled-components";

const theme = createTheme({
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontSize: 15,
    },
});

const Common = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  background-color: whitesmoke;
  flex-direction: column;
`


export default function Home(){


    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(()=>{
        try{
            signAllCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data)
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
        }catch (err){
            console.log(err)
            window.location.replace("/login")
        }
    },[])


    //관리자 인증
    const [isAuth, setIsAuth]=useState(false)
    const [res, setRes] =useState('')

    useEffect(()=>{
        try{
            authHomeCheck()
                .then((res)=>{
                    setIsAuth(true)
                    setRes(res.data)
                })
                .catch((err)=>{
                })
        }catch (err){
        }
    },[])


    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }



    return(
        <>
            {isAuth ? (
                <>
                <Desktop>
                    <Layout>
                        {isLogin ? (
                            <AfterLoginDesktop />
                        ) : (
                            <BeforeLoginDesktop />
                        )}
                    </Layout>
                </Desktop>

                <Tablet>
                    <Layout>
                        {isLogin ? (
                            <AfterLoginTablet theme={theme} />
                            ):(
                            <BeforeLoginTablet theme={theme} />
                            )}
                    </Layout>
                </Tablet>

                    <Mobile>
                        <Layout>
                            {isLogin ? (
                                <AfterLoginPhone theme={theme}/>
                                ):(
                                <BeforeLoginPhone theme={theme}/>
                                )}
                        </Layout>
                    </Mobile>
                </>
                ):(

                <AuthHome />

            )}

        </>
    )

}