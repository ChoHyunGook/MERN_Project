import {FormHelperText} from "@mui/material";
import React, {useState} from "react";
import styled from "styled-components";
import {authModify} from "../../../../../api";
import AuthModifyDesktop from "./Desktop/AuthModifyDesktop";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import AuthModifyTablet from "./Tablet/AuthModifyTablet";
import AuthModifyMobile from "./Mobile/AuthModifyMobile";

const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
  display: flex;
  align-items: center;
`;

export default function AuthModifyService(props){

    const { userData } = props;

    let useridMap = userData.map(item=>item.userid)

    const [password, setPassword]= useState('');
    const [PwMessage, setPwMessage] = useState("")
    const[isPw,setIsPw] =useState(false)

    const onChangePassword = (e) => {
        const currentPw = e.currentTarget.value;
        setPassword(currentPw);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPw)) {
            setPwMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
        } else {
            setPwMessage("");
            setIsPw(true)
        }
    };

    const onSubmitHandler = (e)=>{
        e.preventDefault()

        let data = {
            userid: useridMap[0],
            password:password
        }

        authModify(data)
            .then((res)=>{
                alert(res.data)
                window.location.replace('/profile')
            })
            .catch((err)=>{
                alert(err.response.data)
            })


    }

    
    return(
        <>
            <Desktop>
                <AuthModifyDesktop password={password} onChangePassword={onChangePassword}
                                   PwMessage={PwMessage} onSubmitHandler={onSubmitHandler}
                                   FormHelperTextsRED={FormHelperTextsRED} isPw={isPw}/>
            </Desktop>

            <Tablet>
                <AuthModifyTablet password={password} onChangePassword={onChangePassword}
                                   PwMessage={PwMessage} onSubmitHandler={onSubmitHandler}
                                   FormHelperTextsRED={FormHelperTextsRED} isPw={isPw}/>
            </Tablet>

            <Mobile>
                <AuthModifyMobile password={password} onChangePassword={onChangePassword}
                                   PwMessage={PwMessage} onSubmitHandler={onSubmitHandler}
                                   FormHelperTextsRED={FormHelperTextsRED} isPw={isPw}/>
            </Mobile>


        </>
    )
}