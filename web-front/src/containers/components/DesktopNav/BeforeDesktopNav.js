import React from "react";
import {Button, Typography} from "@mui/material";

export default function BeforeDesktopNav(props){

    const {Common,Home,LogoImg, ContlorBox, Contlor, onSubmit,onSubmitNavJoin}=props


    return(
        <>
            <Common>
                <Home href='/'>
                    <LogoImg href='/' src="images/img_logo_main.png"/>
                </Home>
            <ContlorBox >
                <Contlor href='/product'>제품설명</Contlor>
                <Contlor href='/customer'>고객센터</Contlor>
                <Button style={{
                    color:'black',
                    paddingRight:'30px',
                    textDecoration:"none"}}
                        onClick={onSubmitNavJoin}>
                    <Typography>회원가입</Typography>
                </Button>
                <Contlor href='/login'>로그인</Contlor>
                <Button style={{color:'black',paddingRight:'30px',
                    textDecoration:"none"}} onClick={onSubmit}><Typography>관리자 로그아웃</Typography></Button>
            </ContlorBox>
            </Common>
        </>
    )
}