import OnChangeDesktop from "../../event/FindPwSMSEvent/Desktop/onChangeDesktop";
import AuthNumDesktop from "../../event/FindPwSMSEvent/Desktop/authNumDesktop";
import OnSubmitDesktop from "../../event/FindPwSMSEvent/Desktop/onSubmitDesktop";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import OnChangeTablet from "../../event/FindPwSMSEvent/Tablet/onChangeTablet";
import AuthNumTablet from "../../event/FindPwSMSEvent/Tablet/authNumTablet";
import OnSubmitTablet from "../../event/FindPwSMSEvent/Tablet/onSubmitTablet";
import OnChangeMobile from "../../event/FindPwSMSEvent/Mobile/onChangeMobile";
import AuthNumMobile from "../../event/FindPwSMSEvent/Mobile/authNumMobile";
import OnSubmitMobile from "../../event/FindPwSMSEvent/Mobile/onSubmitMobile";
import React from 'react'





export default function FindPwPhoneService(props){

    const { Email, setEmail, Phone, setPhone, signNum, setSignNum, setEmailMessage, PhoneMessage, setPhoneMessage,
        sign, setSign, isEmail, setIsEmail, setIsPhone, setRes }=props






    return(
        <>
            <Desktop>
                <OnChangeDesktop setEmail={setEmail} setEmailMessage={setEmailMessage} setIsEmail={setIsEmail}
                                 setPhone={setPhone} setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone}
                                 Email={Email} isEmail={isEmail} Phone={Phone} PhoneMessage={PhoneMessage}/>

                <AuthNumDesktop Email={Email} Phone={Phone} setSign={setSign} setSignNum={setSignNum} sign={sign}
                                signNum={signNum}/>

                <OnSubmitDesktop Email={Email} signNum={signNum} setRes={setRes}/>
            </Desktop>

            <Tablet>
                <OnChangeTablet setEmail={setEmail} setEmailMessage={setEmailMessage} setIsEmail={setIsEmail}
                                 setPhone={setPhone} setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone}
                                 Email={Email} isEmail={isEmail} Phone={Phone} PhoneMessage={PhoneMessage}/>

                <AuthNumTablet Email={Email} Phone={Phone} setSign={setSign} setSignNum={setSignNum} sign={sign}
                                signNum={signNum}/>

                <OnSubmitTablet Email={Email} signNum={signNum} setRes={setRes}/>
            </Tablet>

            <Mobile>
                <OnChangeMobile setEmail={setEmail} setEmailMessage={setEmailMessage} setIsEmail={setIsEmail}
                                setPhone={setPhone} setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone}
                                Email={Email} isEmail={isEmail} Phone={Phone} PhoneMessage={PhoneMessage}/>

                <AuthNumMobile Email={Email} Phone={Phone} setSign={setSign} setSignNum={setSignNum} sign={sign}
                               signNum={signNum}/>

                <OnSubmitMobile Email={Email} signNum={signNum} setRes={setRes}/>
            </Mobile>



        </>
    )
}
