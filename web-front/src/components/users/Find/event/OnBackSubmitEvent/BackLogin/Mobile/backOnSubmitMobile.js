import React from "react"
import Button from "@mui/material/Button";


export default function BackOnSubmitMobile(){

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        window.location.replace('/login')
    }

    return(
        <>
            <Button
                style={{height:35,width:250,marginTop:20}}
                type="submit"
                variant="contained"
                onClick={onSubmitHandler}
            >
                뒤로가기
            </Button>
        </>
    )
}