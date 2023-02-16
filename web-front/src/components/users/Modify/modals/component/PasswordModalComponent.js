import React,{useState,useEffect} from "react";
import MustLogin from "../../../../../modals/contents/RequiredLoginModal";
import styled from "styled-components";
import { FormHelperText} from "@mui/material";
import {
    editUserPassword,
    logout,
    sendEditPasswordSMS,
    signCheck
} from "../../../../../api";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import ModalPasswordDesktop from "../service/Desktop/ModalPasswordDesktop";
import ModalPasswordTablet from "../service/Tablet/ModalPasswordTablet";
import ModalPasswordMobile from "../service/Mobile/ModalPasswordMobile";

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

export default function PasswordModalComponent(props){

    const { userData, srcAddress,CheckCompany } = props;

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

    const [PwConfirm, setPwConfirm] = useState("");
    const [password, setPassword]= useState('');
    const [samePassword,setSamePassword] = useState('');


    const [PwConfirmMessage, setPwConfirmMessage] =useState("")
    const [PwMessage, setPwMessage] = useState("")
    const [SamePwMessage, setSamePwMessage] = useState('')

    const[isPwConfirm,setIsPwConfirm] = useState(false)
    const[isPw,setIsPw] =useState(false)
    const[isSamePw,setIsSamePw] = useState(false)


    const onChangeConfirmPw = (e)=>{
        const currentPw = e.currentTarget.value;
        setPwConfirm(currentPw);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPw)) {
            setPwConfirmMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
        } else {
            setPwConfirmMessage("");
            setIsPwConfirm(true)
        }
    }

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

    const onChangeSamePassword= (e) => {
        const currentSamePassword = e.currentTarget.value;
        setSamePassword(currentSamePassword);
        if (password !== currentSamePassword) {
            setSamePwMessage("비밀번호가 일치하지 않습니다.");
        } else {
            setSamePwMessage("");
            setIsSamePw(true)
        }
    };

    const [sign, setSign] =useState("")
    const [isSign,setIsSign]= useState(false)
    const sendSMSHandler =(e)=>{
        e.preventDefault()
        let data = {
            userid:useridMap[0],
            phone:phoneMap[0],
            password:PwConfirm,
            changePassword:password,
            phoneSubject: '고객 비밀번호 변경'
        }
        sendEditPasswordSMS(data)
            .then((res)=>{
                setSign(res.data)
                alert(res.data)
            })
            .catch(function (err){
                alert(err.message)
            })
    }


    const [signNum, setSignNum] = useState("");

    const onChangeSignHandler = (e) => {
        setSignNum(e.target.value);
        setIsSign(true)
    }




    const [res,setRes] = useState('')

    const [isLogout,setIsLogout] = useState(false)
    const [logoutUser,setLogoutUser] = useState({})

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        let data = {
            userid: useridMap[0],
            confirmPassword:PwConfirm,
            password:password,
            authNum:signNum
        }

        editUserPassword(data)
            .then((res)=>{
                setRes(res.data)
                alert('비밀번호가 변경되었습니다. 다시 로그인해주세요~!')
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
                        <ModalPasswordDesktop srcAddress={srcAddress} PwConfirm={PwConfirm} onChangeConfirmPw={onChangeConfirmPw}
                                              PwConfirmMessage={PwConfirmMessage} FormHelperTextsRED={FormHelperTextsRED}
                                              password={password} onChangePassword={onChangePassword} PwMessage={PwMessage}
                                              samePassword={samePassword} onChangeSamePassword={onChangeSamePassword}
                                              SamePwMessage={SamePwMessage} phoneMap={phoneMap} sign={sign} sendSMSHandler={sendSMSHandler}
                                              isPwConfirm={isPwConfirm} isPw={isPw} isSamePw={isSamePw} signNum={signNum}
                                              onChangeSignHandler={onChangeSignHandler} FormHelperTextsBLUE={FormHelperTextsBLUE}
                                              onSubmitHandler={onSubmitHandler}/>
                    </Desktop>
                    <Tablet>
                        <ModalPasswordTablet srcAddress={srcAddress} PwConfirm={PwConfirm} onChangeConfirmPw={onChangeConfirmPw}
                                              PwConfirmMessage={PwConfirmMessage} FormHelperTextsRED={FormHelperTextsRED}
                                              password={password} onChangePassword={onChangePassword} PwMessage={PwMessage}
                                              samePassword={samePassword} onChangeSamePassword={onChangeSamePassword}
                                              SamePwMessage={SamePwMessage} phoneMap={phoneMap} sign={sign} sendSMSHandler={sendSMSHandler}
                                              isPwConfirm={isPwConfirm} isPw={isPw} isSamePw={isSamePw} signNum={signNum}
                                              onChangeSignHandler={onChangeSignHandler} FormHelperTextsBLUE={FormHelperTextsBLUE}
                                              onSubmitHandler={onSubmitHandler}/>
                    </Tablet>
                    <Mobile>
                        <ModalPasswordMobile CheckCompany={CheckCompany} srcAddress={srcAddress} PwConfirm={PwConfirm} onChangeConfirmPw={onChangeConfirmPw}
                                              PwConfirmMessage={PwConfirmMessage} FormHelperTextsRED={FormHelperTextsRED}
                                              password={password} onChangePassword={onChangePassword} PwMessage={PwMessage}
                                              samePassword={samePassword} onChangeSamePassword={onChangeSamePassword}
                                              SamePwMessage={SamePwMessage} phoneMap={phoneMap} sign={sign} sendSMSHandler={sendSMSHandler}
                                              isPwConfirm={isPwConfirm} isPw={isPw} isSamePw={isSamePw} signNum={signNum}
                                              onChangeSignHandler={onChangeSignHandler} FormHelperTextsBLUE={FormHelperTextsBLUE}
                                              onSubmitHandler={onSubmitHandler}/>
                    </Mobile>
                </>

            ) : (
                <MustLogin/>
            )}
        </>
    )

}