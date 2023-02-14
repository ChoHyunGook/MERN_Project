import React from "react"
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import ListItemButton from "@mui/material/ListItemButton";
import {  Button } from 'antd';



export default function BeforePhoneNav(props){

    const { MobileHome,MobileLogoImg,MobileNavTop,toggleChange,toggleBar,toggleMenu,styles}=props

    return(
        <>
            <MobileHome href='/'>
                <MobileLogoImg href='/' src="images/img_logo_main.png"/>
            </MobileHome>
            <MobileNavTop>
                <Button type="primary" onClick={toggleChange} style={{ marginBottom: 10, marginTop:-30 }}>
                    { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
                </Button>
            </MobileNavTop>
            {toggleMenu &&
                <List sx={styles} component="nav" aria-label="mailbox folders">
                    <ListItemButton components='a' href='/product'>
                        <ListItemText primary="제품설명(핸드폰)" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton components='a' href='/customer'>
                        <ListItemText primary="고객센터" />
                    </ListItemButton>
                    <Divider light />
                    <ListItemButton components='a' href='/agreeRegister'>
                        <ListItemText primary="회원가입" />
                    </ListItemButton>
                    <Divider light />
                    <ListItemButton components='a' href='/login'>
                        <ListItemText primary="로그인" />
                    </ListItemButton>
                </List>}
        </>
    )
}