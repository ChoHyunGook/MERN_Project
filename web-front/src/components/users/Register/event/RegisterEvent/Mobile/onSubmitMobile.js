import {register} from "../../../../../../api";
import {Button, FormControl} from "@mui/material";
import React from "react";


export default function OnSubmitMobile(props){

    const {name,  userid,  password,  phone, authNum, CheckCompany, company, isExclusive, setRes,
        isName,isEmail,isPw,isPwConfirm,isPhone,isAuthNum,isSendAuth}=props



    const onSubmitHandler = (e) =>{
        e.preventDefault();
        let data = {
            name: name,
            userid: userid,
            password: password,
            company: company,
            phone: phone,
            authNum: authNum
        }

        register(data)
            .then(res=> {
                setRes(res.data)
                alert(`회원가입이 정상적으로 완료되었습니다.  ${company} 소속 ${name} 님 환영합니다! 로그인페이지로 이동됩니다.`)
                window.location.replace("/login")
            })
            .catch(function (err){
                alert(JSON.stringify(err.response.data))
            });
    }



    const onSubmitExclusiveHandler = (e) =>{
        e.preventDefault();
        let data = {
            name: name,
            userid: userid,
            password: password,
            company: CheckCompany,
            phone: phone,
            authNum:authNum
        }

        register(data)
            .then(res=> {
                setRes(res.data)
                alert(`회원가입이 정상적으로 완료되었습니다. ${CheckCompany} 소속 ${name} 님 환영합니다! 로그인페이지로 이동됩니다.`)
                window.location.replace("/login")
            })
            .catch(function (err){
                alert(JSON.stringify(err.response.data))
            });
    }

    return(
        <>
                {isExclusive ? (
                    <FormControl sx={{width: 300}}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            onClick={onSubmitExclusiveHandler}
                            sx={{ mt: 2, mb: 1 ,
                                justifyContent: 'center',
                                alignItems: 'center' }}
                            size="large"
                            disabled={ isName === false ||  isEmail === false || isPw === false || isPwConfirm === false ||
                                isPhone === false || isAuthNum === false || isSendAuth === false }
                        >
                            회원가입
                        </Button>
                    </FormControl>
                ):(
                    <FormControl sx={{width: 300}}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            onClick={onSubmitHandler}
                            sx={{ mt: 2, mb: 1 ,
                                justifyContent: 'center',
                                alignItems: 'center' }}
                            size="large"
                            disabled={ isName === false ||  isEmail === false || isPw === false || isPwConfirm === false ||
                                isPhone === false || isAuthNum === false || isSendAuth === false }
                        >
                            회원가입
                        </Button>
                    </FormControl>
                )}

        </>
    )
}