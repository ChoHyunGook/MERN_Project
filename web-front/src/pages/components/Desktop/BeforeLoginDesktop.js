import React from "react";
import MainPage from "./contents/MainPage";
import background from "../../../images/bg_index.png";



export default function BeforeLoginDesktop(){


    return(
        <>
            <div style={{backgroundImage:`url(${background})`,
            width:'100%',height:'100%'}}>
                <MainPage />
            </div>
        </>
    )
}