import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";


export default function ModalUserIdDesktop(props){

    const { srcAddress, userIdMap, changeUserid, onChangeEmail, EmailMessage, onSendEmail, FormHelperTextsRED, signNum,
        onChangeSignHandler, onSubmitHandler } =props

    return(
        <>
            <div style={{height: 500, width: '100%'}}>
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
                        이메일 주소 변경
                    </Typography><br/><br/>
                    <Grid container spacing={1}>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                required
                                fullWidth
                                type="text"
                                name="userid"
                                label='기존 이메일주소'
                                defaultValue={userIdMap}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={12}/>
                        <Grid item xs={1}/>
                        <Grid item xs={7.5}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                type="email"
                                name="changeUserid"
                                label='변경하실 이메일주소(아이디)를 입력해주세요.'
                                value={changeUserid}
                                onChange={onChangeEmail}
                                error={EmailMessage === "이메일의 형식이 올바르지 않습니다!" || false}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                onClick={onSendEmail}
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
                                disabled={changeUserid.length<10}
                            >
                                인증받기
                            </Button>
                        </Grid>
                        <br/>
                        <Grid item xs={1}/>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <FormHelperTextsRED>{EmailMessage}</FormHelperTextsRED>
                        </Grid>

                        <Grid item xs={1}/>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                required
                                fullWidth
                                type="text"
                                name="signNum"
                                label='인증번호'
                                value={signNum}
                                onChange={onChangeSignHandler}
                            />
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
                                disabled={signNum.length<6 || false}
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