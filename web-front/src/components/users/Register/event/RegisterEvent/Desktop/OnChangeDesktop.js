import {Button, FormHelperText, TextField, Typography} from "@mui/material";
import React from "react";
import styled from "styled-components";
import {sendJoinSMS} from "../../../../../../api";


const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 30px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

export default function OnChangeDesktop(props){

    const {name, setName, userid, setUserId, password, setPassword, PwConfirm, setPwConfirm,
        phone, setPhone, NameMessage, setNameMessage, EmailMessage, setEmailMessage, PwMessage,
        setPwMessage, PwConfirmMessage, setPwConfirmMessage, PhoneMessage, setPhoneMessage,setIsName, setIsEmail,
        setIsPw, setIsPwConfirm,setIsPhone,authNum,setAuthNum,isName,isEmail,isPw,isPwConfirm,isPhone,setIsAuthNum,
        setIsSendAuth,isSendAuth}=props

    const onChangeName = (e) => {
        const currentName = e.currentTarget.value;
        setName(currentName)
        const nameRegExp = /^[가-힣a-zA-Z]+$/;

        if (!nameRegExp.test(currentName) || name.length<1) {
            setNameMessage('이름을 두 글자 이상 입력하세요!');
            setIsName(false);
        } else {
            setNameMessage('');
            setIsName(true);
        }

    }
    const onChangeEmail = (e) => {
        const currentEmail = e.currentTarget.value;
        setUserId(currentEmail)
        const emailRegExp =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
            setIsEmail(false);
        } else {
            setEmailMessage("");
            setIsEmail(true);
        }
    };


    const onChangePassword = (e) => {
        const currentPw = e.currentTarget.value;
        setPassword(currentPw);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPw)) {
            setPwMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
            setIsPw(false);
        } else {
            setPwMessage("");
            setIsPw(true);
        }
    };
    const onChangePasswordConfirm = (e) => {
        const currentPasswordConfirm = e.currentTarget.value;
        setPwConfirm(currentPasswordConfirm);
        if (password !== currentPasswordConfirm) {
            setPwConfirmMessage("비밀번호가 일치하지 않습니다.");
            setIsPwConfirm(false);
        } else {
            setPwConfirmMessage("");
            setIsPwConfirm(true);
        }
    };


    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage("핸드폰 번호를 입력해 주세요!");
            setIsPhone(false);
        } else {
            setPhoneMessage("");
            setIsPhone(true);
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



    const sendAuthSMS =(e)=>{
        e.preventDefault()
        let data = {
            phone:phone,
            phoneSubject:'회원가입 핸드폰 인증'
        }
        sendJoinSMS(data)
            .then((res)=>{
                alert(res.data)
                setIsSendAuth(true)
            })
            .catch(function (err){
                alert(err.response.data)
                setIsSendAuth(false)
            })

    }

    const onChangeAuthNum = (e) =>{
        setAuthNum(e.target.value)
        setIsAuthNum(true)
    }



    return(
        <>
            <TextField
                autoFocus
                value={name}
                required
                sx={{width:400, margin:1}}
                id="name"
                name="name"
                label="이름"
                onChange={onChangeName}
                error={NameMessage === '이름을 두 글자 이상 입력하세요!' || false}
            />

            <FormHelperTextsRED>{NameMessage}</FormHelperTextsRED>

            <TextField
                required
                value={userid}
                sx={{width:400, margin:1}}
                type="email"
                onChange={onChangeEmail}
                name="userid"
                label="이메일 주소"
                error={EmailMessage === '이메일의 형식이 올바르지 않습니다!' || false}
            />

            <FormHelperTextsRED>{EmailMessage}</FormHelperTextsRED>

            <TextField
                required
                sx={{width:400, margin:1}}
                type="password"
                onChange={onChangePassword}
                value={password}
                name="password"
                label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
            />

            <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>


            <TextField
                required
                sx={{width:400, margin:1}}
                value={PwConfirm}
                onChange={onChangePasswordConfirm}
                type="password"
                name="PwConfirm"
                label="비밀번호 재입력"
                error={PwConfirmMessage === '비밀번호가 일치하지 않습니다.' || false}
            />

            <FormHelperTextsRED>{PwConfirmMessage}</FormHelperTextsRED>

            <div>
                <TextField
                    required
                    value={phone}
                    sx={{width:280, margin:1}}
                    type="text"
                    onChange={addHyphen}
                    name="phone"
                    label="전화번호( - 빼고 기입)"
                    error={PhoneMessage === '핸드폰 번호를 입력해 주세요!' || false}
                />

                <Button
                    onClick={sendAuthSMS}
                    variant="outlined"
                    type="submit"
                    size="medium"
                    sx={{
                        marginTop:1,
                        width: 120,
                        height:'56px',
                        border:3,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'#c7ebff',
                            borderColor:'#008DDC'
                        }
                    }}
                    disabled={isName === false || isEmail === false || isPw === false || isPwConfirm === false || isPhone === false}
                >
                    <Typography component="h3" variant="h7">
                        인증받기
                    </Typography>
                </Button>
            </div>


            <FormHelperTextsRED>{PhoneMessage}</FormHelperTextsRED>

            <TextField
                disabled={isSendAuth === false}
                value={authNum}
                required
                sx={{width:400, margin:1}}
                id="sign"
                name="sign"
                label="인증번호"
                onChange={onChangeAuthNum}
            />


        </>
    )
}