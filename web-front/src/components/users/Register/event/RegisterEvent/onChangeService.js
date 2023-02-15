import {FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import React from "react";
import OnChangeMobile from "./Mobile/OnChangeMobile.js";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import OnChangeTablet from "./Tablet/OnChangeTablet";
import OnSubmitTablet from "./Tablet/OnSubmitTablet";
import OnChangeDesktop from "./Desktop/OnChangeDesktop";


export default function OnChangeService(props){

    const {name, setName, userid, setUserId, password, setPassword, PwConfirm, setPwConfirm,
        phone, setPhone, NameMessage, setNameMessage, EmailMessage, setEmailMessage, PwMessage,
        setPwMessage, PwConfirmMessage, setPwConfirmMessage, PhoneMessage, setPhoneMessage,setIsName, setIsEmail,
        setIsPw, setIsPwConfirm,setIsPhone, CheckCompany,isExclusive, company, setCompany,CompanyList,
        authNum,setAuthNum,isName,isEmail,isPw,isPwConfirm,isPhone,setIsAuthNum,setIsSendAuth, isSendAuth}=props

    const onChangeCompany = (e) =>{
        setCompany(e.target.value)
    }


    return(
        <>
            <Desktop>
                    {isExclusive ? (
                        <TextField
                            value = {CheckCompany}
                            required
                            sx={{width:400,margin:1}}
                            id="company"
                            name="company"
                            label="소속 회사"
                            disabled
                        />
                    ):(
                        <FormControl sx={{width:400, margin:1}}>
                            <InputLabel>소속(회사) *</InputLabel>
                            <Select
                                value={company}
                                name="company"
                                onChange={onChangeCompany}
                                input={<OutlinedInput label="name" />}
                            >
                                {CompanyList.map((item) => (
                                    <MenuItem
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                <OnChangeDesktop name={name} setName={setName} userid={userid} setUserId={setUserId} password={password}
                                setPassword={setPassword} PwConfirm={PwConfirm} setPwConfirm={setPwConfirm}
                                phone={phone} setPhone={setPhone} NameMessage={NameMessage} setNameMessage={setNameMessage}
                                EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                                setPwMessage={setPwMessage} PwConfirmMessage={PwConfirmMessage}
                                setPwConfirmMessage={setPwConfirmMessage} PhoneMessage={PhoneMessage}
                                setPhoneMessage={setPhoneMessage} setIsName={setIsName} setIsEmail={setIsEmail}
                                setIsPw={setIsPw} setIsPwConfirm={setIsPwConfirm} setIsPhone={setIsPhone}
                                authNum={authNum} setAuthNum={setAuthNum} isName={isName} isEmail={isEmail}
                                isPw={isPw} isPwConfirm={isPwConfirm} isPhone={isPhone} setIsAuthNum={setIsAuthNum}
                                setIsSendAuth={setIsSendAuth} isSendAuth={isSendAuth}/>
            </Desktop>

            <Tablet>
                    {isExclusive ? (
                        <TextField
                            value = {CheckCompany}
                            required
                            sx={{width:350, margin:1}}
                            id="company"
                            name="company"
                            label="소속 회사"
                            disabled
                        />
                    ):(
                        <FormControl sx={{width:350, margin:1}}>
                            <InputLabel>소속(회사) *</InputLabel>
                            <Select
                                value={company}
                                name="company"
                                onChange={onChangeCompany}
                                input={<OutlinedInput label="name" />}
                            >
                                {CompanyList.map((item) => (
                                    <MenuItem
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                <OnChangeTablet name={name} setName={setName} userid={userid} setUserId={setUserId} password={password}
                                setPassword={setPassword} PwConfirm={PwConfirm} setPwConfirm={setPwConfirm}
                                phone={phone} setPhone={setPhone} NameMessage={NameMessage} setNameMessage={setNameMessage}
                                EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                                setPwMessage={setPwMessage} PwConfirmMessage={PwConfirmMessage}
                                setPwConfirmMessage={setPwConfirmMessage} PhoneMessage={PhoneMessage}
                                setPhoneMessage={setPhoneMessage} setIsName={setIsName} setIsEmail={setIsEmail}
                                setIsPw={setIsPw} setIsPwConfirm={setIsPwConfirm} setIsPhone={setIsPhone}
                                authNum={authNum} setAuthNum={setAuthNum} isName={isName} isEmail={isEmail}
                                isPw={isPw} isPwConfirm={isPwConfirm} isPhone={isPhone} setIsAuthNum={setIsAuthNum}
                                setIsSendAuth={setIsSendAuth} isSendAuth={isSendAuth}/>

            </Tablet>
            <Mobile>
                    {isExclusive ? (
                        <TextField
                            value = {CheckCompany}
                            required
                            sx={{width:300, margin:1}}
                            id="company"
                            name="company"
                            label="소속 회사"
                            disabled
                        />
                    ):(
                        <FormControl sx={{width:300, margin:1}}>
                            <InputLabel>소속(회사) *</InputLabel>
                            <Select
                                value={company}
                                name="company"
                                onChange={onChangeCompany}
                                input={<OutlinedInput label="name" />}
                            >
                                {CompanyList.map((item) => (
                                    <MenuItem
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                <OnChangeMobile name={name} setName={setName} userid={userid} setUserId={setUserId} password={password}
                                setPassword={setPassword} PwConfirm={PwConfirm} setPwConfirm={setPwConfirm}
                                phone={phone} setPhone={setPhone} NameMessage={NameMessage} setNameMessage={setNameMessage}
                                EmailMessage={EmailMessage} setEmailMessage={setEmailMessage} PwMessage={PwMessage}
                                setPwMessage={setPwMessage} PwConfirmMessage={PwConfirmMessage}
                                setPwConfirmMessage={setPwConfirmMessage} PhoneMessage={PhoneMessage}
                                setPhoneMessage={setPhoneMessage} setIsName={setIsName} setIsEmail={setIsEmail}
                                setIsPw={setIsPw} setIsPwConfirm={setIsPwConfirm} setIsPhone={setIsPhone}
                                authNum={authNum} setAuthNum={setAuthNum} isName={isName} isEmail={isEmail}
                                isPw={isPw} isPwConfirm={isPwConfirm} isPhone={isPhone} setIsAuthNum={setIsAuthNum}
                                setIsSendAuth={setIsSendAuth} isSendAuth={isSendAuth}/>
            </Mobile>

        </>
    )
}