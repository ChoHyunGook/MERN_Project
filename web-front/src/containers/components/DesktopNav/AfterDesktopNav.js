import React from 'react'


export default function AfterDesktopNav(props){

    const {Common,Home,LogoImg, ContlorBox,Contlor,logoutButton}=props

    return(
        <>
            <Common>
            <Home href='/'>
                <LogoImg href='/' src="images/img_logo_main.png"/>
            </Home>
            <ContlorBox >
                <Contlor href='/product'>제품설명</Contlor>
                <Contlor href='/customer'>고객센터</Contlor>
                <Contlor href='/table'>고객관리</Contlor>
                <Contlor href='/authModify'>정보수정</Contlor>
                <Contlor onClick={logoutButton} href='/'>로그아웃</Contlor>
            </ContlorBox>
            </Common>
        </>
    )
}