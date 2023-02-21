import OnChangeDesktop from "../../event/FindPwEmailEvent/Desktop/onChangeDesktop";
import AuthNumDesktop from "../../event/FindPwEmailEvent/Desktop/authNumDesktop";
import OnSubmitDesktop from "../../event/FindPwEmailEvent/Desktop/onSubmitDesktop";
import OnChangeTablet from "../../event/FindPwEmailEvent/Tablet/onChangeTablet"
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import AuthNumTablet from "../../event/FindPwEmailEvent/Tablet/authNumTablet";
import OnSubmitTablet from "../../event/FindPwEmailEvent/Tablet/onSubmitTablet";
import OnChangeMobile from "../../event/FindPwEmailEvent/Mobile/onChangeMobile";
import AuthNumMobile from "../../event/FindPwEmailEvent/Mobile/authNumMobile";
import OnSubmitMobile from "../../event/FindPwEmailEvent/Mobile/onSubmitMobile";
import React from 'react'
import BackOnSubmitSelectDesktop from "../../event/OnBackSubmitEvent/BackFindPwSelect/Desktop/backOnSubmitSelectDesktop";
import BackOnSubmitSelectTablet from "../../event/OnBackSubmitEvent/BackFindPwSelect/Tablet/backOnSubmitSelectTablet";
import BackOnSubmitSelectMobile from "../../event/OnBackSubmitEvent/BackFindPwSelect/Mobile/backOnSubmitSelectMobile";


export default function FindPwEmailService(props){


    const { Name, setName, userid, setUserid, signNum, setSignNum, setMail, setRes, NameMessage,
        setNameMessage,  setIsName,  setIsEmail, setEmailMessage, EmailMessage } = props




    return(
        <>
            <Desktop>
                <OnChangeDesktop setName={setName} Name={Name} setIsName={setIsName} setNameMessage={setNameMessage}
                                 setUserid={setUserid} setEmailMessage={setEmailMessage} setIsEmail={setIsEmail}
                                 NameMessage={NameMessage} userid={userid} EmailMessage={EmailMessage}/>

                <AuthNumDesktop Name={Name} userid={userid} setMail={setMail} setSignNum={setSignNum} signNum={signNum}/>

                <OnSubmitDesktop signNum={signNum} userid={userid} setRes={setRes}/>
                <BackOnSubmitSelectDesktop />
            </Desktop>

            <Tablet>
                <OnChangeTablet setName={setName} Name={Name} setIsName={setIsName} setNameMessage={setNameMessage}
                                 setUserid={setUserid} setEmailMessage={setEmailMessage} setIsEmail={setIsEmail}
                                 NameMessage={NameMessage} userid={userid} EmailMessage={EmailMessage}/>

                <AuthNumTablet Name={Name} userid={userid} setMail={setMail} setSignNum={setSignNum} signNum={signNum}/>

                <OnSubmitTablet signNum={signNum} userid={userid} setRes={setRes}/>
                <BackOnSubmitSelectTablet />
            </Tablet>

            <Mobile>
                <OnChangeMobile setName={setName} Name={Name} setIsName={setIsName} setNameMessage={setNameMessage}
                                 setUserid={setUserid} setEmailMessage={setEmailMessage} setIsEmail={setIsEmail}
                                 NameMessage={NameMessage} userid={userid} EmailMessage={EmailMessage}/>

                <AuthNumMobile Name={Name} userid={userid} setMail={setMail} setSignNum={setSignNum} signNum={signNum}/>

                <OnSubmitMobile signNum={signNum} userid={userid} setRes={setRes}/>
                <BackOnSubmitSelectMobile />
            </Mobile>


        </>
    )
}