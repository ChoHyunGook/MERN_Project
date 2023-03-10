import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";


export default function ModalPhoneMobile(props){

    const { CheckCompany, srcAddress, phoneMap, phone, addHyphen, PhoneMessage, sign, sendSMSHandler, FormHelperTextsRED,
        signNum, onChangeSignHandler, FormHelperTextsBLUE, onSubmitHandler, isSign }=props

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
            <div style={{height: 470, width: '100%'}}>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '470px',
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
                        ???????????? ??????
                    </Typography><br/><br/>
                    <Grid container spacing={0}>
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
                            /><br/><br/>
                        </Grid>
                        <br/><br/>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                size='small'
                                autoFocus
                                required
                                fullWidth
                                type="text"
                                name="phone"
                                label='???????????? ????????????("-" ????????? ????????????)'
                                value={phone}
                                onChange={addHyphen}
                                error={PhoneMessage === '????????? ?????????????????? ??????????????????. (" - " <= ????????? ???????????????.)' || false}
                            /><br/><br/>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <Button
                                value={sign}
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
                                onClick={sendSMSHandler}
                                disabled={phone.length<13}
                            >
                                ????????????
                            </Button><br/><br/>
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
                                    height: '35px',
                                    border: 3,
                                    "&.MuiButton-root:hover": {
                                        color: '#008DDC',
                                        backgroundColor: '#c7ebff',
                                        borderColor: '#008DDC'
                                    }
                                }}
                                disabled={phone.length < 13 || isSign === false}
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