import {Button} from "@mui/material";
import React from 'react'


export default function CreateTableMobile(){


    return(
        <>
            <Button
                href='/mobileCreateTable'
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
                신규
            </Button>
        </>
    )
}