import styled from "styled-components";
import {Box, Button, FormHelperText, Grid, TextField, Typography} from "@mui/material";
import {
    editUser,
    sendEditNameSMS,
    signCheck
} from "../../../../../api";
import React,{useState,useEffect} from "react";
import MustLogin from "../../../../../modals/contents/RequiredLoginModal";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import ModalNameDesktop from "../service/Desktop/ModalNameDesktop";
import ModalNameTablet from "../service/Tablet/ModalNameTablet";
import ModalNameMobile from "../service/Mobile/ModalNameMobile";

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

export default function NameModalComponent(props){

    const{ userData, srcAddress,CheckCompany } = props;

    let useridMap = userData.map(item=>item.userid)
    let nameMap = userData.map(item=>item.name)
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

    const [name, setName] = useState('')
    const [NameMessage, setNameMessage] = useState('')


    const onChangeName = (e) => {
        const currentName = e.currentTarget.value;
        setName(currentName)
        const nameRegExp = /^[가-힣a-zA-Z]+$/;

        if (!nameRegExp.test(currentName) || name.length<1) {
            setNameMessage('이름을 두 글자 이상 입력하세요!');
        } else {
            setNameMessage('');
        }
    }


    const [sign, setSign] =useState("")
    const [isSign,setIsSign]= useState(false)
    const sendSMSHandler =(e)=>{
        e.preventDefault()
        let data = {
            userid:useridMap[0],
            name:nameMap[0],
            changeName:name,
            phoneNum:phoneMap[0],
            phoneSubject: '고객 이름정보 수정'
        }
        sendEditNameSMS(data)
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


    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = {
            userid: useridMap[0],
            name: name,
            authNum: signNum
        }
        editUser(data)
            .then((res) => {
                setRes(res.data)
                alert('수정 완료')
                window.location.replace('/profile')
            })
            .catch(function (err) {
                alert(err.response.data)
            })

    }

    return(
        <>
            {isLogin ? (
                <>
                    <Desktop>
                        <ModalNameDesktop srcAddress={srcAddress} nameMap={nameMap} name={name} onChangeName={onChangeName}
                                          NameMessage={NameMessage} FormHelperTextsRED={FormHelperTextsRED} phoneMap={phoneMap}
                                          sign={sign} sendSMSHandler={sendSMSHandler} signNum={signNum} onChangeSignHandler={onChangeSignHandler}
                                          FormHelperTextsBLUE={FormHelperTextsBLUE} onSubmitHandler={onSubmitHandler} isSign={isSign}/>
                    </Desktop>
                    <Tablet>
                        <ModalNameTablet  srcAddress={srcAddress} nameMap={nameMap} name={name} onChangeName={onChangeName}
                                          NameMessage={NameMessage} FormHelperTextsRED={FormHelperTextsRED} phoneMap={phoneMap}
                                          sign={sign} sendSMSHandler={sendSMSHandler} signNum={signNum} onChangeSignHandler={onChangeSignHandler}
                                          FormHelperTextsBLUE={FormHelperTextsBLUE} onSubmitHandler={onSubmitHandler} isSign={isSign}/>
                    </Tablet>
                    <Mobile>
                        <ModalNameMobile CheckCompany={CheckCompany} srcAddress={srcAddress} nameMap={nameMap} name={name} onChangeName={onChangeName}
                                         NameMessage={NameMessage} FormHelperTextsRED={FormHelperTextsRED} phoneMap={phoneMap}
                                         sign={sign} sendSMSHandler={sendSMSHandler} signNum={signNum} onChangeSignHandler={onChangeSignHandler}
                                         FormHelperTextsBLUE={FormHelperTextsBLUE} onSubmitHandler={onSubmitHandler} isSign={isSign}/>
                    </Mobile>
                </>
            ) : (
                <MustLogin/>
            )}
        </>
    )
}