import * as React from "react";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function Logo(props){

    const { isLogin,srcAddress }=props


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
                        <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 30,
                                     width:250
                                 }}/>

                            <img alt="No Images" src="images/question.png"
                                 style={{
                                     width: 70,
                                     paddingTop: 20
                                 }}/>
                        </div>
                    </Tablet>
                    <Mobile>
                        <div style={{alignItems: "center", display: "flex", flexDirection: "column",paddingLeft:40}}>
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     width:250,
                                     marginTop: 30
                                 }}/>

                            <img alt="No Images" src="images/question.png"
                                 style={{
                                     width: 70,
                                     paddingTop: 20
                                 }}/>
                        </div>
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