import React from "react";
import RequiredAuthModifyComponent from "../component/RequiredAuthModifyComponent";
import background from "../../../../images/bg_index.png";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function RequiredAuthModify(){
    return (
        <>
            <Desktop>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:550
                }}>
                    <div style={{ display: 'flex',
                        flexDirection:"column",
                        alignItems:"center",}}>
                        <RequiredAuthModifyComponent />
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:750
                }}>
                    <div style={{ display: 'flex',
                        flexDirection:"column",
                        alignItems:"center",}}>
                        <RequiredAuthModifyComponent />
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:600
                }}>
                    <div style={{ display: 'flex',
                        flexDirection:"column",
                        alignItems:"center",}}>
                        <RequiredAuthModifyComponent />
                    </div>
                </div>
            </Mobile>

        </>

    )
}