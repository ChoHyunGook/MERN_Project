import React, {useEffect, useState} from "react";
import {authHomeCheck, signAllCheck} from "../api";
import AfterLoginDesktop from "./components/Desktop/AfterLoginDesktop";
import BeforeLoginDesktop from "./components/Desktop/BeforeLoginDesktop";
import {createTheme} from "@mui/material/styles";
import Layout from "../containers/main/Layout";
import AuthHome from "../components/auth/authHome";
import BeforeLoginTablet from "./components/Tablet/BeforeLoginTablet";
import AfterLoginTablet from "./components/Tablet/AfterLoginTablet";
import BeforeLoginPhone from "./components/Mobile/BeforeLoginPhone";
import AfterLoginPhone from "./components/Mobile/AfterLoginPhone";
import styled from "styled-components";
import {Desktop,Tablet,Mobile} from "../containers/Responsive/responsive";

const theme = createTheme({
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontSize: 15,
    },
});



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