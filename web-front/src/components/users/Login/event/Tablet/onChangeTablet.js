import TextField from "@mui/material/TextField";
import * as React from "react";



export default function OnChangeTablet(props){

    const { userid, setUserid, password, setPassword, EmailMessage,
        setEmailMessage, PwMessage, setPwMessage, setIsEmail, setIsPw  } = props

    const onEmailHandler = (event) => {
        const currentEmail = event.target.value;
        setUserid(currentEmail);
        const emailRegExp =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("아이디는 이메일 주소입니다.");
            setIsEmail(false);
        } else {
            setEmailMessage("");
            setIsEmail(true);
        }
    }
    const onPasswordHandler = (event) => {
        const currentPw = event.target.value;
        setPassword(currentPw);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPw)) {
            setPwMessage(
                "비밀번호는 숫자+영문자+특수문자 조합으로 8자리 이상 입니다!"
            );
            setIsPw(false);
        } else {
            setPwMessage("");
            setIsPw(true);
        }
    }

    return(
        <>
            <TextField
                value={userid}
                margin="normal"
                required
                sx={{width:300}}
                label="사용자ID(이메일주소)"
                name="userid"
                autoComplete="email"
                autoFocus
                onChange={onEmailHandler}
                error={EmailMessage === '아이디는 이메일 주소입니다.' || false}
            />
            <TextField
                value={password}
                margin="normal"
                required
                sx={{width:300}}
                name="password"
                label="비밀번호를 입력해주세요."
                type="password"
                autoComplete="current-password"
                onChange={onPasswordHandler}
                error={PwMessage === '비밀번호는 숫자+영문자+특수문자 조합으로 8자리 이상 입니다!' || false}
            />
        </>
    )
}