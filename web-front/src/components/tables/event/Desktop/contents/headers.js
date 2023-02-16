import React, {useEffect, useState} from 'react'
import { Typography} from "@mui/material";
import {companyCheck} from "../../../../../api";



export default function Headers(props){

    const { srcAddress } =props


    return (
        <>
            <img alt="No Images" src={srcAddress}
                 style={{
                     marginTop: 30
                 }}/><br/>
            <Typography component="h2" variant="h7" align="left" sx={{
                marginTop: 1,
                display: 'flex',
                float: 'left'
            }}>
                고객리스트
            </Typography>
        </>
    )
}