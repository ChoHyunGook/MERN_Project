import background from "../../../images/bg_yellow_flower_field.jpg";
import React from "react";
import ContactEmailService from "../service/ContactEmailService";


export default function CustomerComponent(){


    return(
        <>
            <div style={{backgroundImage: `url(${background})`,width:'100%',height:'100%'}}>
                <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
                    <div style={{paddingTop:60,paddingBottom:200}}>
                     <ContactEmailService />
                    </div>
                </div>
            </div>
        </>
    )
}