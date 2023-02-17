import {Button} from "@mui/material";
import React from "react";


export default function UpdateTableMobileService(props){

    const { handleClick }=props

    return(
        <>
            <Button
                onClick={handleClick}
                type="submit"
                variant="outlined"
                sx={{ mt: 1, mb: 3 ,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:90,
                    height:40,
                    "&.MuiButton-root:hover":{
                        color:'#008DDC',
                        backgroundColor:'#c7ebff',
                        borderColor:'#008DDC'
                    }
                }}
                size="large"
            >
                수정
            </Button>
        </>
    )
}