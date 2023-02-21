import styled from "styled-components";
import {FormHelperText} from "@mui/material";
import {sendFindPwSMS} from "../../../../../../api";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from 'react'

const FormHelperTextsBLUE = styled(FormHelperText)`
  width: 90%;
  margin-top: 17px;
  padding-left: 10px;
  font-weight: 600 !important;
  color: #0f27d9 !important;
`;

export default function AuthNumMobile(props){

    const { Email, Phone, setSign, setSignNum, sign, signNum} = props

    const sendSMSHandler =(e)=>{
        e.preventDefault()
        let data = {
            userid:Email,
            phone:Phone,
            phoneSubject: '비밀번호 찾기'
        }
        sendFindPwSMS(data)
            .then((res)=>{
                setSign(res.data)
                alert(res.data)
            })
            .catch(function (err){
                alert(err.response.data)
            })
    }

    const onChangeSignHandler = (e) => {
        setSignNum(e.target.value);
    }

    return(
        <>
            <Button
                value={sign}
                type="submit"
                variant="outlined"
                sx={{
                    marginTop: 2,
                    width: '280px',
                    height: '35px',
                    border: 3,
                    "&.MuiButton-root:hover": {
                        color: '#008DDC',
                        backgroundColor: '#c7ebff',
                        borderColor: '#008DDC'
                    }
                }}
                onClick={sendSMSHandler}
                disabled={Phone.length < 13}
                fullWidth
            >
                인증받기
            </Button>

            <TextField
                sx={{width:280, marginTop:2}}
                size='small'
                label="인증번호"
                value={signNum}
                type="text"
                onChange={onChangeSignHandler}
            />

            <FormHelperTextsBLUE>{sign}</FormHelperTextsBLUE><br/>

        </>
    )
}