import React, {useEffect, useState} from 'react';
import {
    Box, Button, FormHelperText, Grid, TextField,
    Typography
} from "@mui/material";

import MustLogin from '../../../../../modals/contents/RequiredLoginModal'
import {
    editUserPhone,
    sendEditPhoneSMS,
    signCheck
} from "../../../../../api";
import styled from "styled-components";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import ModalPhoneDesktop from "../service/Desktop/ModalPhoneDesktop";
import ModalPhoneTablet from "../service/Tablet/ModalPhoneTablet";
import ModalPhoneMobile from "../service/Mobile/ModalPhoneMobile";

const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
  display: flex;
  align-items: center;
`;

const FormHelperTextsBLUE = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #0f27d9 !important;
`;


const PhoneModalComponent = (props) => {

    const { userData,srcAddress,CheckCompany } = props;


    let useridMap = userData.map(item=>item.userid)
    let phoneMap = userData.map(item=>item.phone)



    //로그인 체크

    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})


    useEffect(() => {
        try{
            signCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data)
                    }
                })
                .catch((err)=>{
                })

        }catch (err){
        }
    }, [])

    const [phone, setPhone] = useState("");
    const [PhoneMessage, setPhoneMessage] = useState("")


    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage('올바른 핸드폰번호를 입력해주세요. (" - " <= 하이픈 필수입니다.)');
        } else {
            setPhoneMessage("");
        }
    };
    const addHyphen = (e) => {
        const currentNumber = e.currentTarget.value;
        setPhone(currentNumber);
        if (currentNumber.length === 3 || currentNumber.length === 8) {
            setPhone(currentNumber + "-");
            onChangePhone(currentNumber + "-");
        } else {
            onChangePhone(currentNumber);
        }
    };

    const [sign, setSign] =useState("")
    const [isSign,setIsSign]= useState(false)
    const sendSMSHandler =(e)=>{
        e.preventDefault()
        let data = {
            userid:useridMap[0],
            phone:phone,
            phoneNum:phoneMap[0],
            phoneSubject: '고객 전화번호 변경'
        }
        sendEditPhoneSMS(data)
            .then((res)=>{
                setSign(res.data)
                alert(res.data)
            })
            .catch(function (err){
                alert(err.response.data)
            })
    }
    const [signNum, setSignNum] = useState("");

    const onChangeSignHandler = (e) => {
        setSignNum(e.target.value);
        setIsSign(true)
    }


    const [res,setRes] = useState('')

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        let data = {
            userid: useridMap[0],
            changePhoneNum:phone,
            phone:phoneMap[0],
            authNum:signNum
        }

        editUserPhone(data)
            .then((res)=>{
                setRes(res.data)
                alert('수정 완료')
                window.location.replace('/profile')
            })
            .catch(function (err){
                alert(err.response.data)
            })


    }


    return (
        <>
            {isLogin ? (
                    <>
                        <Desktop>
                            <ModalPhoneDesktop srcAddress={srcAddress} phoneMap={phoneMap} phone={phone} addHyphen={addHyphen}
                                               PhoneMessage={PhoneMessage} sign={sign} sendSMSHandler={sendSMSHandler}
                                               FormHelperTextsRED={FormHelperTextsRED} signNum={signNum}
                                               onChangeSignHandler={onChangeSignHandler} FormHelperTextsBLUE={FormHelperTextsBLUE}
                                               onSubmitHandler={onSubmitHandler} isSign={isSign} />
                        </Desktop>
                        <Tablet>
                            <ModalPhoneTablet srcAddress={srcAddress} phoneMap={phoneMap} phone={phone} addHyphen={addHyphen}
                                               PhoneMessage={PhoneMessage} sign={sign} sendSMSHandler={sendSMSHandler}
                                               FormHelperTextsRED={FormHelperTextsRED} signNum={signNum}
                                               onChangeSignHandler={onChangeSignHandler} FormHelperTextsBLUE={FormHelperTextsBLUE}
                                               onSubmitHandler={onSubmitHandler} isSign={isSign} />
                        </Tablet>
                        <Mobile>
                            <ModalPhoneMobile CheckCompany={CheckCompany} srcAddress={srcAddress} phoneMap={phoneMap} phone={phone} addHyphen={addHyphen}
                                               PhoneMessage={PhoneMessage} sign={sign} sendSMSHandler={sendSMSHandler}
                                               FormHelperTextsRED={FormHelperTextsRED} signNum={signNum}
                                               onChangeSignHandler={onChangeSignHandler} FormHelperTextsBLUE={FormHelperTextsBLUE}
                                               onSubmitHandler={onSubmitHandler} isSign={isSign} />
                        </Mobile>
                    </>
            ) : (
                <MustLogin/>
            )}
        </>

    )
}
export default PhoneModalComponent

