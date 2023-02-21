import background from "../../../images/bg_yellow_flower_field.jpg";
import React from "react";
import ContactEmailService from "../service/ContactEmailService";
import {Desktop, Mobile, Tablet} from "../../../containers/Responsive/responsive";


export default function CustomerComponent(){


    return(
        <>
            <Desktop>
                <div style={{backgroundImage: `url(${background})`,width:'100%',height:'100%',backgroundSize:"cover",paddingBottom:300}}>
                    <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                        <div style={{paddingTop:80,paddingBottom:200}}>
                            <ContactEmailService />
                        </div>
                    </div>
                </div>
            </Desktop>
            <Tablet>
            <div style={{backgroundImage: `url(${background})`,width:'100%',height:'100%',backgroundSize:"cover",paddingBottom:300}}>
                <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                    <div style={{paddingTop:200,paddingBottom:200}}>
                     <ContactEmailService />
                    </div>
                </div>
            </div>
            </Tablet>
            <Mobile>
                <div style={{backgroundImage: `url(${background})`,width:'100%',height:'100%',backgroundSize:"cover",paddingBottom:300}}>
                    <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                        <div style={{paddingTop:80,paddingBottom:200}}>
                            <ContactEmailService />
                        </div>
                    </div>
                </div>
            </Mobile>
        </>
    )
}