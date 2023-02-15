import TextField from "@mui/material/TextField";
import * as React from "react";
import styled from "styled-components";
import {FormHelperText} from "@mui/material";


// mui의 styles 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제
const FormHelperTextsRED = styled(FormHelperText)`
  width: 70%;
  padding-left: 5px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;


export default function OnChangeMobile(props){

    const { setPw, setPwMessage, setIsPw, setPwConfirm, Pw,
        setPwConfirmMessage, setIsPwConfirm, PwMessage, PwConfirm, PwConfirmMessage  } = props

    const onChangePassword = (e) => {
        const currentPw = e.target.value;
        setPw(currentPw);
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
        const currentPasswordConfirm = e.target.value;
        setPwConfirm(currentPasswordConfirm);
        if (Pw !== currentPasswordConfirm) {
            setPwConfirmMessage("비밀번호가 일치하지 않습니다!");
            setIsPwConfirm(false);
        } else {
            setPwConfirmMessage("");
            setIsPwConfirm(true);
        }
    };

    return(
        <>
            <TextField
                size="medium"
                value={Pw}
                margin="normal"
                required
                sx={{width:280}}
                label="비밀번호"
                name="Pw"
                type ="password"
                autoFocus
                error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
                onChange={onChangePassword}
            />

            <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>

            <TextField
                value={PwConfirm}
                margin="normal"
                required
                sx={{width:280}}
                label="비밀번호 재입력"
                name="PwConfirm"
                type ="password"
                error={PwConfirmMessage === '비밀번호가 일치하지 않습니다!' || false}
                onChange={onChangePasswordConfirm}
            />

            <FormHelperTextsRED>{PwConfirmMessage}</FormHelperTextsRED>

        </>
    )
}