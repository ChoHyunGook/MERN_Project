import React, {useEffect, useState} from "react";
import { editEmailAdress, logout, sendModifyEmail, signCheck} from "../../../../../api";
import MustLogin from "../../../../../modals/contents/RequiredLoginModal";
import {FormHelperText} from "@mui/material";
import styled from "styled-components";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import ModalUserIdDesktop from "../service/Desktop/ModalUserIdDesktop";
import ModalUserIdTablet from "../service/Tablet/ModalUserIdTablet";
import ModalUserIdMobile from "../service/Mobile/ModalUserIdMobile";


const FormHelperTextsRED = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
  display: flex;
  align-items: center;
`;

export default function UserIdModalComponent(props){

    const {userData, srcAddress,CheckCompany} =props

    let nameMap = userData.map(item=>item.name)
    let userIdMap = userData.map(item=>item.userid)



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




    const [changeUserid, setChangeUserId] = useState("");
    const [EmailMessage, setEmailMessage] = useState("")
    const [IsEmail,setIsEmail] = useState(false)

    const onChangeEmail = (e) => {
        const currentEmail = e.currentTarget.value;
        setChangeUserId(currentEmail)
        const emailRegExp =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
            setIsEmail(false)
        } else {
            setEmailMessage("");
            IsEmail(true)
        }
    };

    const [mail, setMail] = useState('')
    const onSendEmail = (e)=>{
        e.preventDefault()
        let data = {
            emailSubject:'아이디(이메일) 변경',
            name:nameMap[0],
            userid:userIdMap[0],
            changeUserid:changeUserid
        }
        setMail(data)
        sendModifyEmail(data)
            .then(res=>{
                setMail(res.data)
                alert(res.data)
            })
            .catch(function (err){
                alert(err.response.data)
            })

    }

    const [signNum, setSignNum] = useState("");
    const onChangeSignHandler = (e) => {
        setSignNum(e.target.value);
    }



    const [res,setRes] = useState('')

    const [isLogout,setIsLogout] = useState(false)
    const [logoutUser,setLogoutUser] = useState({})

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        let data = {
            userid: userIdMap[0],
            changeUserid: changeUserid,
            signNum:signNum
        }

        editEmailAdress(data)
            .then((res)=>{
                setRes(res.data)
                alert('이메일(아이디) 수정완료. 변경된 아이디로 다시 로그인해주세요~!')
                logout().then((res)=>{
                    setIsLogout(true);
                    setLogoutUser(res.data)
                    window.location.replace('/login')
                }).catch((err)=>{
                    alert(JSON.stringify(err))
                })

            })
            .catch(function (err){
                alert(JSON.stringify(err.response.data))
            })


    }




    return(
        <>
            {isLogin ? (
                    <>
                        <Desktop>
                            <ModalUserIdDesktop srcAddress={srcAddress} userIdMap={userIdMap} changeUserid={changeUserid}
                                                onChangeEmail={onChangeEmail} EmailMessage={EmailMessage} onSendEmail={onSendEmail}
                                                FormHelperTextsRED={FormHelperTextsRED} signNum={signNum}
                            onChangeSignHandler={onChangeSignHandler} onSubmitHandler={onSubmitHandler} />

                        </Desktop>
                        <Tablet>
                            <ModalUserIdTablet srcAddress={srcAddress} userIdMap={userIdMap} changeUserid={changeUserid}
                                                onChangeEmail={onChangeEmail} EmailMessage={EmailMessage} onSendEmail={onSendEmail}
                                                FormHelperTextsRED={FormHelperTextsRED} signNum={signNum}
                                                onChangeSignHandler={onChangeSignHandler} onSubmitHandler={onSubmitHandler} />
                        </Tablet>
                        <Mobile>
                            <ModalUserIdMobile  CheckCompany={CheckCompany} srcAddress={srcAddress} userIdMap={userIdMap} changeUserid={changeUserid}
                                                onChangeEmail={onChangeEmail} EmailMessage={EmailMessage} onSendEmail={onSendEmail}
                                                FormHelperTextsRED={FormHelperTextsRED} signNum={signNum}
                                                onChangeSignHandler={onChangeSignHandler} onSubmitHandler={onSubmitHandler} />
                        </Mobile>
                    </>

            ):(
                <MustLogin/>
                )}
        </>
    )


}