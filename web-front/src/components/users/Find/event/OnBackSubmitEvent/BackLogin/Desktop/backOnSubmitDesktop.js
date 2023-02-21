import React from "react"
import Button from "@mui/material/Button";


export default function BackOnSubmitDesktop(){

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        window.location.replace('/login')
    }

    return(
        <>
            <Button
                style={{height:45,width:380,marginTop:20}}
                type="submit"
                variant="contained"
                onClick={onSubmitHandler}
            >
                뒤로가기
            </Button>
        </>
    )
}