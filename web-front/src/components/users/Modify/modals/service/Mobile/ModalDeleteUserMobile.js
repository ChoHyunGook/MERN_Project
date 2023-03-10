import {Box, Button, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";


export default function ModalDeleteUserMobile(props){

    const { CheckCompany, srcAddress, password, onChangePassword, PwMessage, FormHelperTextsRED, onSubmitHandler, isPw }=props

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
            <div style={{height: 300, width: '100%'}}>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '300px',
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
                                    <br/>
                                    <img alt="No Images" src={srcAddress}
                                         style={{
                                             marginTop: 1
                                         }}/><br/>
                                </>

                            )}
                        </>
                    )}
                    <Typography component="h4" variant="h0" sx={{paddingBottom:1}}>
                        ?????? ?????? ??? ??????????????? ????????? ????????????.
                    </Typography><br/>
                    <div style={{width:280}}>
                        <TextField
                            size='small'
                            autoFocus
                            required
                            fullWidth
                            type="password"
                            name="password"
                            label='????????????'
                            value={password}
                            onChange={onChangePassword}
                            error={PwMessage === '??????+?????????+???????????? ???????????? 8?????? ?????? ??????????????????!' || false}
                        />

                        <FormHelperTextsRED>{PwMessage}</FormHelperTextsRED>
                        <br/>
                        <Button
                            onClick={onSubmitHandler}
                            variant="contained"
                            type="submit"
                            size="medium"
                            fullWidth
                            sx={{
                                height: '35px',
                                border: 3,
                                "&.MuiButton-root:hover": {
                                    color: '#008DDC',
                                    backgroundColor: '#c7ebff',
                                    borderColor: '#008DDC'
                                }
                            }}
                            disabled={isPw === false }
                        >
                            ????????????
                        </Button>
                    </div>
                </Box>
            </div>
        </>
    )
}