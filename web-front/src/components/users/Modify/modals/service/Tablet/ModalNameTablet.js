import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";


export default function ModalNameTablet(props){

    const { srcAddress, nameMap, name, onChangeName, NameMessage, FormHelperTextsRED, phoneMap, sign, sendSMSHandler,
        signNum, onChangeSignHandler, FormHelperTextsBLUE, onSubmitHandler, isSign } =props

    return(
        <>
            <div style={{height: 600, width: '100%'}}>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '520px',
                        borderRadius: '1rem',
                    }}
                ><br/>
                    <img alt="No Images" src={srcAddress}
                         style={{
                             marginTop: 1
                         }}/><br/>

                    <Typography component="h4" variant="h0">
                        이름 변경
                    </Typography><br/><br/>
                    <Grid container spacing={1}>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                type="text"
                                name="name"
                                label='기존 이름(성함)'
                                defaultValue={nameMap[0]}
                                disabled
                            /><br/><br/>
                        </Grid>
                        <br/>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                type="text"
                                name="name"
                                label='수정하실 이름을 작성해주세요.'
                                value={name}
                                onChange={onChangeName}
                                error={NameMessage === '이름을 두 글자 이상 입력하세요!' || false}
                            />
                        </Grid>
                        <br/>
                        <Grid item xs={1}/>
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <FormHelperTextsRED>{NameMessage}</FormHelperTextsRED><br/>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={1}/>
                        <Grid item xs={7.5}>
                            <TextField
                                required
                                fullWidth
                                type="text"
                                name="phone"
                                label='전화번호("-" 하이픈 자동생성)'
                                defaultValue={phoneMap[0]}
                                disabled
                            />
                        </Grid>
                        <br/>
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
                                disabled={name.length<1}
                            >
                                인증받기
                            </Button><br/><br/>
                        </Grid>
                        <Grid item xs={1.5}/>

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
                                disabled={name.length < 1 || isSign === false}
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