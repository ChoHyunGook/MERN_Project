import { Typography} from "@mui/material";
import RequiredLoginService from "../service/RequiredLoginService";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function RequiredLoginComponent(){
    return(
        <>
            <Desktop>
                <Typography color="white" component="h2" variant="h7" align="left" sx={{
                    marginTop:40,
                    display: 'flex',
                    float: 'left'
                }}>
                    로그인 후 사용 가능합니다.
                </Typography><br/>
                <RequiredLoginService />
            </Desktop>
            <Tablet>
                <Typography color="white" component="h3" variant="h8" align="left" sx={{
                    marginTop:40,
                    display: 'flex',
                    float: 'left'
                }}>
                    로그인 후 사용 가능합니다.
                </Typography><br/>
                <RequiredLoginService />
            </Tablet>
            <Mobile>
                <Typography color="white" component="h4" variant="h8" align="left" sx={{
                    marginTop:30,
                    display: 'flex',
                    float: 'left'
                }}>
                    로그인 후 사용 가능합니다.
                </Typography><br/>
                <RequiredLoginService />
            </Mobile>

        </>
    )
}