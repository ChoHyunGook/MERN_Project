import * as React from "react";
import OnChangeDesktop from "../event/Desktop/onChangeDesktop";
import OnSubmitDesktop from "../event/Desktop/onSubmitDesktop";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";
import OnChangeTablet from "../event/Tablet/onChangeTablet";
import OnChangeMobile from "../event/Mobile/onChangeMobile";
import OnSubmitTablet from "../event/Tablet/onSubmitTablet";
import OnSubmitMobile from "../event/Mobile/onSubmitMobile";





export default function LoginService(props){

    const { userid, setUserid, password, setPassword, EmailMessage,
        setEmailMessage, PwMessage, setPwMessage, setIsEmail, setIsPw, setRes  } = props


    return(
        <>
            <Desktop>
                <OnChangeDesktop userid={userid} setUserid={setUserid} password={password}
                                 setPassword={setPassword} EmailMessage={EmailMessage}
                                 setEmailMessage={setEmailMessage} PwMessage={PwMessage} setPwMessage={setPwMessage}
                                 setIsEmail={setIsEmail} setIsPw={setIsPw}/>
                <OnSubmitDesktop userid={userid} password={password} setRes={setRes} />
            </Desktop>
            <Tablet>
                <OnChangeTablet userid={userid} setUserid={setUserid} password={password}
                                 setPassword={setPassword} EmailMessage={EmailMessage}
                                 setEmailMessage={setEmailMessage} PwMessage={PwMessage} setPwMessage={setPwMessage}
                                 setIsEmail={setIsEmail} setIsPw={setIsPw}/>
                <OnSubmitTablet userid={userid} password={password} setRes={setRes}/>
            </Tablet>
            <Mobile>
                <OnChangeMobile userid={userid} setUserid={setUserid} password={password}
                                setPassword={setPassword} EmailMessage={EmailMessage}
                                setEmailMessage={setEmailMessage} PwMessage={PwMessage} setPwMessage={setPwMessage}
                                setIsEmail={setIsEmail} setIsPw={setIsPw}/>
                <OnSubmitMobile userid={userid} password={password} setRes={setRes}/>
            </Mobile>
        </>
    )
}