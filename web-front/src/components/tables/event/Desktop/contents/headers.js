import React, {useEffect, useState} from 'react'
import { Typography} from "@mui/material";
import {companyCheck} from "../../../../../api";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";



export default function Headers(props){

    const { srcAddress } =props


    return (
        <>
            <Desktop>
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
            </Desktop>
            <Tablet>
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
            </Tablet>
            <Mobile>
                <img alt="No Images" src={srcAddress}
                     style={{
                         marginTop: 20,
                         paddingBottom:10
                     }}/>
                <Typography component="h3" variant="h8" align="left" sx={{
                    display: 'flex',
                    float: 'left'
                }}>
                    고객리스트
                </Typography>
                <Typography component="h5" variant="h8" align="left" sx={{
                    marginTop: 2,
                    display: 'flex',
                    float: 'left'
                }}>
                    모바일 세로모드는 검색 후
                </Typography>
                <Typography component="h5" variant="h8" align="left" sx={{
                    marginTop: 1,
                    display: 'flex',
                    float: 'left'
                }}>
                     단일 데이터만 수정 또는 삭제가 가능 합니다.
                </Typography>
            </Mobile>

        </>
    )
}