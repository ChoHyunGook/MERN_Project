import {Button} from "@mui/material";
import React from "react";


export default function DeleteTableMobileService(props){

    const {confirmDelete}=props

    return(
        <>
            <Button
                onClick={confirmDelete}
                type="submit"
                variant="outlined"
                sx={{ mt: 1, mb: 3 ,ml:2,
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
                삭제
            </Button>
        </>
    )
}