import React, { useState} from "react";
import OnSubmitMobile from "../event/RegisterEvent/Mobile/onSubmitMobile";
import OnChangeService from "../event/RegisterEvent/onChangeService";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";
import OnSubmitTablet from "../event/RegisterEvent/Tablet/OnSubmitTablet";
import OnSubmitDesktop from "../event/RegisterEvent/Desktop/OnSubmitDesktop";





export default function RegisterService(props){

    const {CheckCompany,isExclusive}=props


    //기본
    const [name, setName] = useState("");
    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [PwConfirm, setPwConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [authNum, setAuthNum] = useState('')
    const CompanyList = ["Blaubit","Samsung S1","RAEMIAN","THE WAVE","LG U+","ETCETRA", "Samsung C&T", "LG HelloVision","Coway"]


    //메세지
    const [NameMessage, setNameMessage] = useState("")
    const [EmailMessage, setEmailMessage] = useState("")
    const [PwMessage, setPwMessage] = useState("")
    const [PwConfirmMessage, setPwConfirmMessage] =useState("")
    const [PhoneMessage, setPhoneMessage] = useState("")


    //상태관리
    const [isName, setIsName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPw, setIsPw] = useState(false)
    const [isPwConfirm, setIsPwConfirm] = useState(false)
    const [isPhone,setIsPhone] = useState(false)
    const [isAuthNum, setIsAuthNum]= useState(false)
    const [isSendAuth, setIsSendAuth]= useState(false)


    const [res, setRes] = useState('')



    return(
        <>
            <OnChangeService name={name} setName={setName} userid={userid} setUserId={setUserId} password={password}
                             setPassword={setPassword} PwConfirm={PwConfirm} setPwConfirm={setPwConfirm}
                             phone={phone} setPhone={setPhone} NameMessage={NameMessage} setNameMessage={setNameMessage}
                             EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                             setPwMessage={setPwMessage} PwConfirmMessage={PwConfirmMessage}
                             setPwConfirmMessage={setPwConfirmMessage} PhoneMessage={PhoneMessage}
                             setPhoneMessage={setPhoneMessage} setIsName={setIsName} setIsEmail={setIsEmail}
                             setIsPw={setIsPw} setIsPwConfirm={setIsPwConfirm} setIsPhone={setIsPhone}
                             CheckCompany={CheckCompany} isExclusive={isExclusive}
                             setCompany={setCompany} CompanyList={CompanyList} authNum={authNum} setAuthNum={setAuthNum}
                             isName={isName} isEmail={isEmail}
                             isPw={isPw} isPwConfirm={isPwConfirm} isSendAuth={isSendAuth}
                             isPhone={isPhone} setIsAuthNum={setIsAuthNum} setIsSendAuth={setIsSendAuth}
            />

            <Desktop>
                <OnSubmitDesktop name={name} userid={userid} password={password} PwConfirm={PwConfirm}
                                phone={phone} authNum={authNum} setRes={setRes} CheckCompany={CheckCompany}
                                company={company}
                                isExclusive={isExclusive} isAuthNum={isAuthNum} isSendAuth={isSendAuth} isName={isName}
                                isEmail={isEmail}
                                isPw={isPw} isPwConfirm={isPwConfirm}
                                isPhone={isPhone}/>
            </Desktop>


            <Tablet>
                <OnSubmitTablet name={name} userid={userid} password={password} PwConfirm={PwConfirm}
                                phone={phone} authNum={authNum} setRes={setRes} CheckCompany={CheckCompany}
                                company={company}
                                isExclusive={isExclusive} isAuthNum={isAuthNum} isSendAuth={isSendAuth} isName={isName}
                                isEmail={isEmail}
                                isPw={isPw} isPwConfirm={isPwConfirm}
                                isPhone={isPhone}/>
            </Tablet>


            <Mobile>
                <OnSubmitMobile name={name} userid={userid} password={password} PwConfirm={PwConfirm}
                                phone={phone} authNum={authNum} setRes={setRes} CheckCompany={CheckCompany}
                                company={company}
                                isExclusive={isExclusive} isAuthNum={isAuthNum} isSendAuth={isSendAuth} isName={isName}
                                isEmail={isEmail}
                                isPw={isPw} isPwConfirm={isPwConfirm}
                                isPhone={isPhone}/>
            </Mobile>


        </>
    )
}