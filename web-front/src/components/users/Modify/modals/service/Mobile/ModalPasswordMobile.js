import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";


export default function ModalPasswordMobile(props){

    const { CheckCompany, srcAddress, PwConfirm, onChangeConfirmPw, PwConfirmMessage, FormHelperTextsRED, password,
        onChangePassword, PwMessage, samePassword, onChangeSamePassword, SamePwMessage, phoneMap, sign,
        sendSMSHandler, isPwConfirm, isPw, isSamePw, signNum, onChangeSignHandler, FormHelperTextsBLUE,
        onSubmitHandler }=props

    const [isMarginTop, setIsMarginTop] =useState(false)
    const [isHello, setIsHello] = useState(false)

    useEffect(()=>{
        if(CheckCompany === 'LG HelloVision'){
            setIsHello(true)
        }else if(CheckCompany === 'Blaubit'){
            setIsMarginTop(true)
        }else{
            setIsMarginTop(false)
        }
    },[])

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
                >
                    {isHello ? (
                        <>
                            <img alt="No Images" src={srcAddress}
                                 style={{
                                     width:150
                                 }}/><br/>
                        </>
                    ):(
                        <>
                            {isMarginTop ? (
                                <>
                                    <img alt="No Images" src={srcAddress}
                                         style={{width:200}}/><br/>
                                </>
                            ):(
                                <>
                                    <img alt="No Images" src={srcAddress}
                                         style={{
                                             marginTop: 1
                                         }}/><br/>
                                </>
                            )}
                        </>
                    )}

                    <Typography component="h4" variant="h0">
                        ???????????? ??????
                    </Typography><br/>
                    <Grid container spacing={1}>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                size='small'
                                autoFocus
                                required
                                fullWidth
                                type="password"
                                name="PwConfirm"
                                label='?????? ????????????(??????+?????????+???????????? 8?????? ??????)'
                                value={PwConfirm}
                                onChange={onChangeConfirmPw}
                                error={PwConfirmMessage === '??????+?????????+???????????? ???????????? 8?????? ?????? ??????????????????!' || false}
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
                                size='small'
                                required
                                fullWidth
                                type="password"
                                name="password"
                                label='????????? ???????????? (??????+?????????+???????????? 8?????? ??????)'
                                value={password}
                                onChange={onChangePassword}
                                error={PwMessage === '??????+?????????+???????????? ???????????? 8?????? ?????? ??????????????????!' || false}
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
                                size='small'
                                required
                                fullWidth
                                type="password"
                                name="samePassword"
                                label='????????? ???????????? ????????? (??????+?????????+???????????? 8?????? ??????)'
                                value={samePassword}
                                onChange={onChangeSamePassword}
                                error={SamePwMessage === '??????????????? ???????????? ????????????.' || false}
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
                        <Grid item xs={10}>
                            <TextField
                                size='small'
                                required
                                fullWidth
                                type="text"
                                name="phone"
                                label='?????? ????????????'
                                defaultValue={phoneMap[0]}
                                disabled
                            /><br/>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <Button
                                value={sign}
                                variant="contained"
                                type="submit"
                                size="medium"
                                fullWidth
                                sx={{
                                    marginTop:0,
                                    height:'35px',
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
                                ????????????
                            </Button>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                size='small'
                                fullWidth
                                label="????????????"
                                value={signNum}
                                type="text"
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
                                    height: '35px',
                                    border: 3,
                                    "&.MuiButton-root:hover": {
                                        color: '#008DDC',
                                        backgroundColor: '#c7ebff',
                                        borderColor: '#008DDC'
                                    }
                                }}
                                disabled={isPwConfirm === false || isPw === false || isSamePw === false}
                            >
                                ????????????
                            </Button>
                        </Grid>
                    </Grid>

                </Box>
            </div>
        </>
    )

}