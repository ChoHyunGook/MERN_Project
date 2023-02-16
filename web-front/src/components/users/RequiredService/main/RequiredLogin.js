import React from 'react'
import background from "../../../../images/bg_index.png";
import RequiredLoginComponent from "../component/RequiredLoginComponent";


export default function RequiredLogin(){
    return (
        <>
        <div style={{
                 backgroundImage: `url(${background})`,paddingBottom:390
                 }}>
            <div style={{display: 'flex',
                flexDirection:"column",
                alignItems:"center"}}>
            <RequiredLoginComponent />
            </div>
        </div>
        </>
    )
}