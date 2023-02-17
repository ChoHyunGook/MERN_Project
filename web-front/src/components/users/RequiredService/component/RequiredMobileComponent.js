import {Desktop, Tablet} from "../../../../containers/Responsive/responsive";
import {Typography} from "@mui/material";
import RequiredMobileService from "../service/RequiredMobileService";



export default function RequiredMobileComponent(){
    return(
        <>
            <Desktop>
                <Typography color="white" component="h2" variant="h7" align="left" sx={{
                    marginTop:40,
                    display: 'flex',
                    float: 'left'
                }}>
                    Desktop 사용 중... 현재 페이지는 모바일 세로 전용 서비스 페이지입니다.
                </Typography><br/>
                <RequiredMobileService />
            </Desktop>
            <Tablet>
                <Typography color="white" component="h3" variant="h8" align="left" sx={{
                    marginTop:40,
                    display: 'flex',
                    float: 'left'
                }}>
                    Tablet 또는 Mobile 가로모드 사용중... 현재 페이지는 모바일 세로 전용 서비스 페이지입니다.
                </Typography><br/>
                <RequiredMobileService />
            </Tablet>
        </>
    )
}