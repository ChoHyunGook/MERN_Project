import React from "react";


export default function BeforeDesktopNav(props){

    const {Common,Home,LogoImg, ContlorBox,Contlor}=props

    return(
        <>
            <Common>
                <Home href='/'>
                    <LogoImg href='/' src="images/img_logo_main.png"/>
                </Home>
            <ContlorBox >
                <Contlor href='/product'>제품설명</Contlor>
                <Contlor href='/customer'>고객센터</Contlor>
                <Contlor href='/agreeRegister'>회원가입</Contlor>
                <Contlor href='/login'>로그인</Contlor>
            </ContlorBox>
            </Common>
        </>
    )
}