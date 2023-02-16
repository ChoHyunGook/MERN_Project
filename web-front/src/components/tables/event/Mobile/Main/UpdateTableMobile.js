import {Button} from "@mui/material";
import React from 'react'

export default function UpdateTableMobile(){

    return(
        <>
            <Button
                href='/mobileUpdateTable'
                variant="outlined"
                type="submit"
                size="medium"
                sx={{
                    marginTop:1,
                    width:'98px',
                    height:'40px',
                    border:3,
                    "&.MuiButton-root:hover":{
                        color:'#008DDC',
                        backgroundColor:'#c7ebff',
                        borderColor:'#008DDC'
                    }
                }}>
                수정
            </Button>
        </>
    )
}