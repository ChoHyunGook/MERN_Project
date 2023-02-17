import {Button} from "@mui/material";
import React from "react";


export default function BackMobileService(props){

    const { onBackClick }=props

    return(
        <>
            <Button
                onClick={onBackClick}
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 1 ,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:120,
                    height:30,
                    "&.MuiButton-root:hover":{
                        color:'#008DDC',
                        backgroundColor:'#c7ebff',
                        borderColor:'#008DDC'
                    }
                }}
                size="large"
            >
                뒤로가기
            </Button>
        </>
    )
}