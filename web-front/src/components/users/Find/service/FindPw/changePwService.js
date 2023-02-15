import * as React from "react";
import OnSubmitDesktop from "../../event/ChangePwEvent/Desktop/onSubmitDesktop";
import OnChangeDesktop from "../../event/ChangePwEvent/Desktop/onChangeDesktop";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import OnChangeTablet from "../../event/ChangePwEvent/Tablet/onChangeTablet";
import OnSubmitTablet from "../../event/ChangePwEvent/Tablet/onSubmitTablet";
import OnChangeMobile from "../../event/ChangePwEvent/Mobile/onChangeMobile";
import OnSubmitMobile from "../../event/ChangePwEvent/Mobile/onSubmitMobile";




export default function ChangePwService(props){

    const { setPw, setPwMessage, setIsPw, setPwConfirm, setPwConfirmMessage, setIsPwConfirm,
        PwMessage, PwConfirmMessage, setRes, Pw, PwConfirm, isPw, isPwConfirm} = props


    return(
        <>
            <Desktop>
                <OnChangeDesktop setPw={setPw} setPwMessage={setPwMessage} setIsPw={setIsPw}
                                 setPwConfirm={setPwConfirm} Pw={Pw} setPwConfirmMessage={setPwConfirmMessage}
                                 setIsPwConfirm={setIsPwConfirm} PwMessage={PwMessage} PwConfirm={PwConfirm}
                                 PwConfirmMessage={PwConfirmMessage}/>

                <OnSubmitDesktop setRes={setRes} Pw={Pw} PwConfirm={PwConfirm} isPw={isPw}
                                 isPwConfirm={isPwConfirm}/>
            </Desktop>

            <Tablet>
                <OnChangeTablet setPw={setPw} setPwMessage={setPwMessage} setIsPw={setIsPw}
                                 setPwConfirm={setPwConfirm} Pw={Pw} setPwConfirmMessage={setPwConfirmMessage}
                                 setIsPwConfirm={setIsPwConfirm} PwMessage={PwMessage} PwConfirm={PwConfirm}
                                 PwConfirmMessage={PwConfirmMessage}/>

                <OnSubmitTablet setRes={setRes} Pw={Pw} PwConfirm={PwConfirm} isPw={isPw}
                                 isPwConfirm={isPwConfirm}/>
            </Tablet>

            <Mobile>
                <OnChangeMobile setPw={setPw} setPwMessage={setPwMessage} setIsPw={setIsPw}
                                 setPwConfirm={setPwConfirm} Pw={Pw} setPwConfirmMessage={setPwConfirmMessage}
                                 setIsPwConfirm={setIsPwConfirm} PwMessage={PwMessage} PwConfirm={PwConfirm}
                                 PwConfirmMessage={PwConfirmMessage}/>

                <OnSubmitMobile setRes={setRes} Pw={Pw} PwConfirm={PwConfirm} isPw={isPw}
                                 isPwConfirm={isPwConfirm}/>
            </Mobile>


        </>
    )
}