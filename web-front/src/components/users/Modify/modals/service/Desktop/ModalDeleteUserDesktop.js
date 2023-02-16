import {Box, Button, TextField, Typography} from "@mui/material";
import React from "react";


export default function ModalDeleteUserDesktop(props){

    const { srcAddress, password, onChangePassword, PwMessage, FormHelperTextsRED, onSubmitHandler, isPw }=props

    return(
        <>
            <div style={{height: 400, width: '100%'}}>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '300px',
                        width: '530px',
                        borderRadius: '1rem',
                    }}
                ><br/>
                    <img alt="No Images" src={srcAddress}
                         style={{
                             marginTop: 1
                         }}/><br/>
                    <Typography component="h4" variant="h0" sx={{paddingBottom:3}}>
                        회원 탈퇴 전 비밀번호를 재입력 해주세요.
                    </Typography><br/><br/>
                    <div style={{width:400}}>
                        <TextField
                            autoFocus
                            required
                            fullWidth
                            type="password"
                            name="password"
                            label='비밀번호'
                            value={password}
                            onChange={onChangePassword}
                            error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
                        />

                        <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>
                        <br/><br/>
                        <Button
                            onClick={onSubmitHandler}
                            variant="contained"
                            type="submit"
                            size="medium"
                            fullWidth
                            sx={{
                                marginTop: 1,
                                height: '45px',
                                border: 3,
                                "&.MuiButton-root:hover": {
                                    color: '#008DDC',
                                    backgroundColor: '#c7ebff',
                                    borderColor: '#008DDC'
                                }
                            }}
                            disabled={isPw === false }
                        >
                            회원탈퇴
                        </Button>
                    </div>
                </Box>
            </div>
        </>
    )
}