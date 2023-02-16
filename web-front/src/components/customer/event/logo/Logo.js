import * as React from "react";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";
import {useEffect, useState} from "react";


export default function Logo(props){

    const { isLogin,srcAddress,CheckCompany }=props


    const [isMarginTopsSet, setIsMarginTopSet] =useState(false)

    useEffect(()=>{
        if(CheckCompany === 'LG HelloVision'){
            setIsMarginTopSet(true)
        }else if(CheckCompany === 'LG U+'){
            setIsMarginTopSet(true)
        }else if(CheckCompany === 'Blaubit'){
            setIsMarginTopSet(true)
        }else {
            setIsMarginTopSet(false)
        }
    },[])



    return(
        <>
            {isLogin ? (
                <>
                    <Desktop>
                        <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 30
                                 }}/>

                            <img alt="No Images" src="images/question.png"
                                 style={{
                                     width: 70,
                                     paddingTop: 20
                                 }}/>
                        </div>
                    </Desktop>

                    <Tablet>
                        {isMarginTopsSet ? (
                            <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                                <img alt="No Images" src={srcAddress}
                                     style={{
                                         marginTop: 30
                                     }}/>

                                <img alt="No Images" src="images/question.png"
                                     style={{
                                         width: 70,
                                         paddingTop: 20
                                     }}/>
                            </div>
                        ):(
                            <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                                <img alt="No Images" src={srcAddress}
                                     style={{
                                         marginTop: 30,
                                     }}/>

                                <img alt="No Images" src="images/question.png"
                                     style={{
                                         width: 70,
                                         paddingTop: 20
                                     }}/>
                            </div>
                            )}

                    </Tablet>

                    <Mobile>
                        {isMarginTopsSet ? (
                            <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                                <img alt="No Images" src={srcAddress}
                                     style={{
                                         marginTop: 30
                                     }}/>

                                <img alt="No Images" src="images/question.png"
                                     style={{
                                         width: 70,
                                         paddingTop: 20
                                     }}/>
                            </div>
                        ):(
                            <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                                <img alt="No Images" src={srcAddress}
                                     style={{
                                         marginTop: 30
                                     }}/>

                                <img alt="No Images" src="images/question.png"
                                     style={{
                                         width: 70,
                                         paddingTop: 20
                                     }}/>
                            </div>
                        )}
                    </Mobile>

                </>

            ):(
                <>
                <Desktop>
                <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                    <img alt="No Images" src="images/question.png"
                         style={{
                             width: 100,
                             paddingTop: 30
                         }}/>
                </div>
                </Desktop>

                    <Tablet>
                        <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                            <img alt="No Images" src="images/question.png"
                                 style={{
                                     width: 80,
                                     paddingTop: 30
                                 }}/>
                        </div>
                    </Tablet>

                    <Mobile>
                        <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                            <img alt="No Images" src="images/question.png"
                                 style={{
                                     width: 60,
                                     paddingTop: 30
                                 }}/>
                        </div>
                    </Mobile>

                </>
                )}

        </>
    )
}