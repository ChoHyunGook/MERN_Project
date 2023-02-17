import React from 'react'
import background from "../../../../images/bg_index.png";
import RequiredTermsComponent from "../component/RequiredTermsComponent";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function RequiredTerms(){
    return (
        <>
            <Desktop>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:550
                }}>
                    <div style={{display: 'flex',
                        flexDirection:"column",
                        alignItems:"center"}}>

                        <RequiredTermsComponent />
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

                        <RequiredTermsComponent />
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
                        <RequiredTermsComponent />
                    </div>
                </div>
            </Mobile>
        </>


    )
}