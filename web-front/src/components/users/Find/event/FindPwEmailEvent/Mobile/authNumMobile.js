import TextField from "@mui/material/TextField";
import {checkmail} from "../../../../../../api";
import Button from "@mui/material/Button";
import React from 'react'

export default function AuthNumMobile(props){

    const { Name, userid, setMail, setSignNum, signNum }=props

    const sendEmail = (e) => {
        e.preventDefault()
        let data = {
            emailSubject:'비밀번호 찾기',
            name:Name,
            userid:userid
        }
        setMail(data)
        checkmail(data)
            .then(res=>{
                setMail(res.data)
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
                onClick={sendEmail}
                disabled={Name.length<2 || userid.length<10}

            >
                인증받기
            </Button>

            <TextField
                sx={{width:280, marginTop:2}}
                label="인증번호"
                size='small'
                value={signNum}
                type="text"
                onChange={onChangeSignHandler}
            />

        </>
    )
}