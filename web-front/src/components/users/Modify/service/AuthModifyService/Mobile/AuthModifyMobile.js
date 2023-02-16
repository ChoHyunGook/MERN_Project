import {Button, TextField} from "@mui/material";
import React from "react";


export default function AuthModifyMobile(props){

    const {password,onChangePassword,PwMessage,onSubmitHandler,FormHelperTextsRED,isPw}=props

    return(
        <>
            <TextField
                required
                sx={{width:250}}
                type="password"
                name="password"
                label='비밀번호'
                value={password}
                onChange={onChangePassword}
                error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
            />
            <div style={{paddingTop:20}}>
                <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>
            </div>
            <div style={{paddingTop:20,width:250}}>
                <Button
                    onClick={onSubmitHandler}
                    variant="contained"
                    type="submit"
                    size="medium"
                    fullWidth
                    sx={{
                        marginTop: 1,
                        height: '45px',
                        border: 1,
                        "&.MuiButton-root:hover": {
                            color: '#008DDC',
                            backgroundColor: '#c7ebff',
                            borderColor: '#008DDC'
                        }
                    }}
                    disabled={ isPw === false }
                >
                    확인
                </Button>
            </div>
        </>
    )
}