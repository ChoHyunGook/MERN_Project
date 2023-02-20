import React, {useEffect, useState} from "react";
import {signCheck, withdrawUser,logout} from "../../../../../api";
import RequiredLoginModal from "../../../../../modals/contents/RequiredLoginModal";
import {FormHelperText} from "@mui/material";
import styled from "styled-components";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import ModalDeleteUserDesktop from "../service/Desktop/ModalDeleteUserDesktop";
import ModalDeleteUserTablet from "../service/Tablet/ModalDeleteUserTablet";
import ModalDeleteUserMobile from "../service/Mobile/ModalDeleteUserMobile";

const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
  display: flex;
  align-items: center;
`;
export default function DeleteModalComponent(props){

    const { userData, srcAddress, CheckCompany } = props

    let useridMap = userData.map(item=>item.userid)
    let nameMap = userData.map(item=>item.name)
    let phoneMap = userData.map(item=>item.phone)
    let companyMap = userData.map(item=>item.company)


    const [password, setPassword] = useState('');
    const [PwMessage, setPwMessage] = useState("")
    const [isPw,setIsPw] = useState(false)


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

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        if(window.confirm('확인을 누르면 회원탈퇴됩니다. 회원을 탈퇴하시겠습니까?')){
            let data ={
                userid:useridMap[0],
                name:nameMap[0],
                phone:phoneMap[0],
                company:companyMap[0],
                password:password
            }
            withdrawUser(data)
                .then((res)=>{
                    alert(res.data)
                    logout().then((res)=>{
                        window.location.replace('/')
                    }).catch((err)=>{
                        alert(JSON.stringify(err.response.data))
                    })
                })
                .catch(function (err){
                    alert(JSON.stringify(err.response.data))
                })

        }else {
            return;
        }
    }


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

    return(
        <>
            {isLogin ? (
                    <>
                        <Desktop>
                            <ModalDeleteUserDesktop srcAddress={srcAddress} password={password} onChangePassword={onChangePassword}
                                                    PwMessage={PwMessage} FormHelperTextsRED={FormHelperTextsRED}
                                                    onSubmitHandler={onSubmitHandler} isPw={isPw} />
                        </Desktop>
                        <Tablet>
                            <ModalDeleteUserTablet srcAddress={srcAddress} password={password} onChangePassword={onChangePassword}
                                                    PwMessage={PwMessage} FormHelperTextsRED={FormHelperTextsRED}
                                                    onSubmitHandler={onSubmitHandler} isPw={isPw} />
                        </Tablet>
                        <Mobile>
                            <ModalDeleteUserMobile CheckCompany={CheckCompany} srcAddress={srcAddress} password={password} onChangePassword={onChangePassword}
                                                    PwMessage={PwMessage} FormHelperTextsRED={FormHelperTextsRED}
                                                    onSubmitHandler={onSubmitHandler} isPw={isPw} />
                        </Mobile>
                    </>


            ):(
                <RequiredLoginModal />
            )}
        </>
    )
}