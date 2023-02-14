import {Button} from "antd";
import {MenuFoldOutlined, MenuOutlined} from "@ant-design/icons";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import React from "react";


export default function AfterTabletNav(props){

    const { TabletHome, TabletLogoImg, NavTop, toggleChange, toggleBar, toggleMenu, styles,
            logoutButton}=props

    return(
        <>
            <TabletHome href='/'>
                <TabletLogoImg href='/' src="images/img_logo_main.png"/>
            </TabletHome>
            <NavTop>
                <Button type="primary" onClick={toggleChange} style={{ marginBottom: 10, marginTop:-30 }}>
                    { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
                </Button>
            </NavTop>
            {toggleMenu &&
                <List sx={styles} component="nav" aria-label="mailbox folders">
                    <ListItemButton components='a' href='/product'>
                        <ListItemText primary="제품설명(테블)" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton components='a' href='/customer'>
                        <ListItemText primary="고객센터" />
                    </ListItemButton>
                    <Divider light />
                    <ListItemButton components='a' href='/table'>
                        <ListItemText primary="고객관리" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton components='a' href='/authModify'>
                        <ListItemText primary="정보수정" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={logoutButton} components='a' href='/'>
                        <ListItemText primary="로그아웃" />
                    </ListItemButton>
                </List>
            }
        </>
    )
}