import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";


export default function ModalPhoneTablet(props){

    const { srcAddress, phoneMap, phone, addHyphen, PhoneMessage, sign, sendSMSHandler, FormHelperTextsRED,
        signNum, onChangeSignHandler, FormHelperTextsBLUE, onSubmitHandler, isSign }=props


    return(
        <>
            <div style={{height: 520, width: '100%'}}>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '500px',
                        borderRadius: '1rem',
                    }}
                ><br/>
                    <img alt="No Images" src={srcAddress}
                         style={{
                             marginTop: 1
                         }}/><br/>

                    <Typography component="h4" variant="h0">
                        전화번호 수정
                    </Typography><br/><br/>
                    <Grid container spacing={1}>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
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
                        <br/>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={7.5}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                type="text"
                                name="phone"
                                label='변경하실 전화번호("-" 하이픈 자동생성)'
                                value={phone}
                                onChange={addHyphen}
                                error={PhoneMessage === '올바른 핸드폰번호를 입력해주세요. (" - " <= 하이픈 필수입니다.)' || false}
                            /><br/>
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
                                disabled={phone.length<13}
                            >
                                인증받기
                            </Button><br/>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <FormHelperTextsRED>{PhoneMessage}</FormHelperTextsRED>
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
                                disabled={phone.length < 13 || isSign === false}
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