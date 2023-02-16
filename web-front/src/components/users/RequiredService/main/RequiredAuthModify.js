import React from "react";
import RequiredAuthModifyComponent from "../component/RequiredAuthModifyComponent";
import background from "../../../../images/bg_index.png";


export default function RequiredAuthModify(){
    return (
        <>
            <div style={{
                backgroundImage: `url(${background})`,paddingBottom:400

               }}>
                <div style={{ display: 'flex',
                    flexDirection:"column",
                    alignItems:"center",}}>
                    <RequiredAuthModifyComponent />
                </div>
            </div>
        </>

    )
}