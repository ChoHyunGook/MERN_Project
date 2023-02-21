import React from 'react'


export default function ProductTablet(){
    return(
        <>
            <div style={{paddingTop:30 ,paddingBottom:500,backgroundColor:'white'}}>
                <div style={{display: 'flex',
                    flexDirection: "column",
                    alignItems: "center",}}>
                    <img alt="No Images" src="images/doorbell_hard.png"
                         style={{
                             width:700,
                             paddingTop:150
                         }}/>
                    <div style={{display:'flex',alignItems:'center'}}>
                    <img alt="No Images" src="images/doorbell_text.png"
                         style={{
                             width:200,
                             paddingTop:150
                         }}/>
                    <img alt="No Images" src="images/doorbell_point.png"
                         style={{
                             width:500,
                             paddingTop:150
                         }}/>
                    </div>
                </div>
            </div>
        </>
    )
}