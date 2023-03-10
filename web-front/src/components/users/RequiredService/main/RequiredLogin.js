import React from 'react'
import background from "../../../../images/bg_index.png";
import RequiredLoginComponent from "../component/RequiredLoginComponent";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function RequiredLogin(){
    return (
        <>
            <Desktop>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:550
                }}>
                    <div style={{display: 'flex',
                        flexDirection:"column",
                        alignItems:"center"}}>
                        <RequiredLoginComponent />
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:750
                }}>
                    <div style={{display: 'flex',
                        flexDirection:"column",
                        alignItems:"center"}}>
                        <RequiredLoginComponent />
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:600
                }}>
                    <div style={{display: 'flex',
                        flexDirection:"column",
                        alignItems:"center"}}>
                        <RequiredLoginComponent />
                    </div>
                </div>
            </Mobile>

        </>
    )
}