import TextField from "@mui/material/TextField";
import * as React from "react";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function SendInfo(props){

    const {isLogin, sendInfo, onChangeSendInfo, isInfo, isEmailAnswer,userId,phone} = props

    return(
        <>
            {isLogin ? (
                <>
                    <Desktop>
                        {isEmailAnswer ? (
                            <TextField
                                value={userId}
                                disabled
                                margin="normal"
                                sx={{marginTop:1,width:450}}
                                label="답변 받으실 이메일 또는 전화번호"
                                name="sendInfo"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        ):(
                            <TextField
                                value={phone}
                                disabled
                                margin="normal"
                                sx={{marginTop:1,width:450}}
                                label="답변 받으실 이메일 또는 전화번호"
                                name="sendInfo"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        )}
                    </Desktop>
                    <Tablet>
                        {isEmailAnswer ? (
                            <TextField
                                value={userId}
                                disabled
                                margin="normal"
                                sx={{marginTop:1,width:450}}
                                label="답변 받으실 이메일 또는 전화번호"
                                name="sendInfo"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        ):(
                            <TextField
                                value={phone}
                                disabled
                                margin="normal"
                                sx={{marginTop:1,width:450}}
                                label="답변 받으실 이메일 또는 전화번호"
                                name="sendInfo"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        )}
                    </Tablet>
                    <Mobile>
                        {isEmailAnswer ? (
                            <TextField
                                value={userId}
                                disabled
                                size='small'
                                margin="normal"
                                sx={{marginTop:1,width:300}}
                                label="답변 받으실 이메일 또는 전화번호"
                                name="sendInfo"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        ):(
                            <TextField
                                value={phone}
                                disabled
                                size='small'
                                margin="normal"
                                sx={{marginTop:1,width:300}}
                                label="답변 받으실 이메일 또는 전화번호"
                                name="sendInfo"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        )}
                    </Mobile>

                </>
            ):(
                <>
                    <Desktop>
                        <TextField
                            value={sendInfo}
                            margin="normal"
                            sx={{marginTop:1,width:450}}
                            label="답변 받으실 이메일 또는 전화번호"
                            name="sendInfo"
                            onChange={onChangeSendInfo}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={isInfo === false}
                        />
                    </Desktop>
                    <Tablet>
                        <TextField
                            value={sendInfo}
                            margin="normal"
                            sx={{marginTop:1,width:450}}
                            label="답변 받으실 이메일 또는 전화번호"
                            name="sendInfo"
                            onChange={onChangeSendInfo}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={isInfo === false}
                        />
                    </Tablet>
                    <Mobile>
                        <TextField
                            value={sendInfo}
                            margin="normal"
                            size='small'
                            sx={{marginTop:1,width:300}}
                            label="답변 받으실 이메일 또는 전화번호"
                            name="sendInfo"
                            onChange={onChangeSendInfo}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={isInfo === false}
                        />
                    </Mobile>

                </>
                )}

        </>
    )
}