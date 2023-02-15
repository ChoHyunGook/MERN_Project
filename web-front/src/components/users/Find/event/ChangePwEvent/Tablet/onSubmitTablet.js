import {findEditPassword} from "../../../../../../api";
import Button from "@mui/material/Button";
import * as React from "react";


export default function OnSubmitTablet(props){

    const { setRes, Pw, PwConfirm, isPw, isPwConfirm } = props
    const completePW = (e) =>{
        e.preventDefault()
        let data = {password: Pw}

        findEditPassword(data)
            .then(res=>{
                setRes(res.data)
                alert('비밀번호 변경완료. 로그인페이지로 이동됩니다.')
                window.location.replace('/login')
            })
            .catch((err)=>{
                alert(err.response.data)
            })


    }

    return (
        <>
            <Button
                size= "large"
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 2 ,
                    justifyContent: 'center',
                    alignItems: 'center' ,
                    width:320}}
                disabled={Pw.length<8 || PwConfirm.length<8 || isPw === false || isPwConfirm === false}

                onClick={completePW}
            >
                비밀번호변경
            </Button>
        </>
    )

}