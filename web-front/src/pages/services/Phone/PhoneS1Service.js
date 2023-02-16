import {Box, Button, Typography} from "@mui/material";
import React, {useState} from "react";
import {exclusiveCompany} from "../../../api";


export default function PhoneS1Service(){

    const [res,setRes] =useState('')

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        let data ={
            company: 'Samsung S1'
        }

        exclusiveCompany(data)
            .then((res)=>{
                setRes(res.data)
                window.location.replace('/agreeRegister')
            })
            .catch(function (err){
                alert(err.response.data)
            })

    }


    return(
        <>
                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: '150px',
                        width: '150px',
                        borderRadius:'2rem',
                        border:1,
                        borderColor:'grey.500'
                    }}
                ><img alt="No images" src="images/s1.png" style={{
                    width:110,marginTop:30}
                }/>
                    <Button
                        onClick={onSubmitHandler}
                        required
                        type="submit"
                        variant="contained"
                        style={{marginTop:30, width:'130px',height:'30px',borderRadius:'1rem'}}
                        >
                        <Typography color="primary.contrastText">
                            회원가입
                        </Typography>
                    </Button>
                </Box>
        </>
    )
}

window.onpageshow = function(event) {
    if ( event.persisted || (window.performance && window.performance.navigation.type == 2)) {
        // Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우
        window.location.replace('/');
    }
}