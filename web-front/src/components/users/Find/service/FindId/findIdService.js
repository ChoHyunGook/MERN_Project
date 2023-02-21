import React from "react";
import OnChangeDesktop from "../../event/FindIdEvent/Desktop/onChangeDesktop";
import AuthNumDesktop from "../../event/FindIdEvent/Desktop/authNumDesktop";
import OnSubmitDesktop from "../../event/FindIdEvent/Desktop/onSubmitDesktop";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import OnChangeTablet from "../../event/FindIdEvent/Tablet/onChangeTablet";
import AuthNumTablet from "../../event/FindIdEvent/Tablet/authNumTablet";
import OnSubmitTablet from "../../event/FindIdEvent/Tablet/onSubmitTablet";
import OnChangeMobile from "../../event/FindIdEvent/Mobile/onChangeMobile";
import AuthNumMobile from "../../event/FindIdEvent/Mobile/authNumMobile";
import OnSubmitMobile from "../../event/FindIdEvent/Mobile/onSubmitMobile";
import BackOnSubmitDesktop from "../../event/OnBackSubmitEvent/BackLogin/Desktop/backOnSubmitDesktop";
import BackOnSubmitTablet from "../../event/OnBackSubmitEvent/BackLogin/Tablet/backOnSubmitTablet";
import BackOnSubmitMobile from "../../event/OnBackSubmitEvent/BackLogin/Mobile/backOnSubmitMobile";


export default function FindIdService(props){

    const { Name, setName, Phone, setPhone, signNum, setSignNum, PhoneMessage, setPhoneMessage,
        setIsPhone, sign, setSign, setRes } = props


    return(
        <>

            <Desktop>
                <OnChangeDesktop setName={setName} setPhone={setPhone} PhoneMessage={PhoneMessage}
                                 setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone} Name={Name}
                                 Phone={Phone} />
                <AuthNumDesktop Phone={Phone} Name={Name} setSign={setSign} setSignNum={setSignNum} sign={sign}
                                signNum={signNum}/>
                <OnSubmitDesktop Name={Name} Phone={Phone} signNum={signNum} setRes={setRes}/>
                <BackOnSubmitDesktop />
            </Desktop>


            <Tablet>
                <OnChangeTablet setName={setName} setPhone={setPhone} PhoneMessage={PhoneMessage}
                                 setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone} Name={Name}
                                 Phone={Phone} />
                <AuthNumTablet Phone={Phone} Name={Name} setSign={setSign} setSignNum={setSignNum} sign={sign}
                                signNum={signNum}/>
                <OnSubmitTablet Name={Name} Phone={Phone} signNum={signNum} setRes={setRes}/>
                <BackOnSubmitTablet />
            </Tablet>


            <Mobile>
                <OnChangeMobile setName={setName} setPhone={setPhone} PhoneMessage={PhoneMessage}
                                setPhoneMessage={setPhoneMessage} setIsPhone={setIsPhone} Name={Name}
                                Phone={Phone} />
                <AuthNumMobile Phone={Phone} Name={Name} setSign={setSign} setSignNum={setSignNum} sign={sign}
                               signNum={signNum}/>
                <OnSubmitMobile Name={Name} Phone={Phone} signNum={signNum} setRes={setRes}/>
                <BackOnSubmitMobile />
            </Mobile>


        </>
    )
}