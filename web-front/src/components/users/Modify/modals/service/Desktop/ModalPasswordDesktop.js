import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";


export default function ModalPasswordDesktop(props){

    const { srcAddress, PwConfirm, onChangeConfirmPw, PwConfirmMessage, FormHelperTextsRED, password,
        onChangePassword, PwMessage, samePassword, onChangeSamePassword, SamePwMessage, phoneMap, sign,
        sendSMSHandler, isPwConfirm, isPw, isSamePw, signNum, onChangeSignHandler, FormHelperTextsBLUE,
        onSubmitHandler }=props

    return(
        <>
            <div style={{height: 650, width: '100%'}}>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '500px',
                        width: '530px',
                        borderRadius: '1rem',
                    }}
                ><br/>
                    <img alt="No Images" src={srcAddress}
                         style={{
                             marginTop: 1
                         }}/><br/>

                    <Typography component="h4" variant="h0">
                        비밀번호 변경
                    </Typography><br/><br/>
                    <Grid container spacing={1}>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                type="password"
                                name="PwConfirm"
                                label='기존 비밀번호(숫자+영문자+특수문자 8자리 이상)'
                                value={PwConfirm}
                                onChange={onChangeConfirmPw}
                                error={PwConfirmMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
                            />
                        </Grid>
                        <br/>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <FormHelperTextsRED>{PwConfirmMessage}</FormHelperTextsRED>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                required
                                fullWidth
                                type="password"
                                name="password"
                                label='새로운 비밀번호 (숫자+영문자+특수문자 8자리 이상)'
                                value={password}
                                onChange={onChangePassword}
                                error={PwMessage === '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!' || false}
                            />
                        </Grid>
                        <br/>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                required
                                fullWidth
                                type="password"
                                name="samePassword"
                                label='새로운 비밀번호 재입력 (숫자+영문자+특수문자 8자리 이상)'
                                value={samePassword}
                                onChange={onChangeSamePassword}
                                error={SamePwMessage === '비밀번호가 일치하지 않습니다.' || false}
                            />
                        </Grid>
                        <br/>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <FormHelperTextsRED>{SamePwMessage}</FormHelperTextsRED>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={7.5}>
                            <TextField
                                required
                                fullWidth
                                type="text"
                                name="phone"
                                label='기존 전화번호'
                                defaultValue={phoneMap[0]}
                                disabled
                            /><br/><br/>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                value={sign}
                                variant="contained"
                                type="submit"
                                size="medium"
                                sx={{
                                    marginTop:0,
                                    width:'105px',
                                    height:'55px',
                                    border:3,
                                    "&.MuiButton-root:hover":{
                                        color:'#008DDC',
                                        backgroundColor:'#c7ebff',
                                        borderColor:'#008DDC'
                                    }
                                }}
                                onClick={sendSMSHandler}
                                disabled={isPwConfirm === false || isPw === false || isSamePw === false}
                            >
                                인증받기
                            </Button><br/>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                label="인증번호"
                                value={signNum}
                                type="text"
                                onChange={onChangeSignHandler}
                            />
                        </Grid>
                        <Grid item xs={1}/>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>

                            <FormHelperTextsBLUE>{sign}</FormHelperTextsBLUE>
                        </Grid>

                        <Grid item xs={1}/>


                        <Grid item xs={1}/>
                        <Grid item xs={10}>
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
                                disabled={isPwConfirm === false || isPw === false || isSamePw === false}
                            >
                                수정하기
                            </Button>
                        </Grid>
                    </Grid>

                </Box>
            </div>
        </>
    )

}