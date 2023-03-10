import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";


export default function ModalUserIdMobile(props){

    const { CheckCompany, srcAddress, userIdMap, changeUserid, onChangeEmail, EmailMessage, onSendEmail, FormHelperTextsRED, signNum,
        onChangeSignHandler, onSubmitHandler } =props

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
            <div style={{height: 460, width: '100%'}}>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '460px',
                        borderRadius: '1rem',
                    }}
                ><br/>
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
                        ????????? ?????? ??????
                    </Typography><br/><br/>
                    <Grid container spacing={0}>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                size='small'
                                required
                                fullWidth
                                type="text"
                                name="userid"
                                label='?????? ???????????????'
                                defaultValue={userIdMap}
                                disabled
                            /><br/><br/>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={12}/>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                size='small'
                                autoFocus
                                required
                                fullWidth
                                type="email"
                                name="changeUserid"
                                label='???????????? ???????????????(?????????)??? ??????????????????.'
                                value={changeUserid}
                                onChange={onChangeEmail}
                                error={EmailMessage === "???????????? ????????? ???????????? ????????????!" || false}
                            /><br/><br/>
                        </Grid>
                        <Grid item xs={1}/>

                        <br/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <Button
                                onClick={onSendEmail}
                                variant="contained"
                                type="submit"
                                fullWidth
                                size="medium"
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
                                disabled={changeUserid.length<10}
                            >
                                ????????????
                            </Button><br/><br/>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <FormHelperTextsRED>{EmailMessage}</FormHelperTextsRED>
                        </Grid>

                        <Grid item xs={1}/>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                size='small'
                                required
                                fullWidth
                                type="text"
                                name="signNum"
                                label='????????????'
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
                                    height: '35px',
                                    border: 3,
                                    "&.MuiButton-root:hover": {
                                        color: '#008DDC',
                                        backgroundColor: '#c7ebff',
                                        borderColor: '#008DDC'
                                    }
                                }}
                                disabled={signNum.length<6 || false}
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