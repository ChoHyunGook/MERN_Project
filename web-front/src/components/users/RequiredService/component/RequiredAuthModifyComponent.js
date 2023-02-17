import {Typography} from "@mui/material";
import RequiredAuthModifyService from "../service/RequiredAuthModifyService";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function RequiredAuthModifyComponent(){
    return(
        <>
            <Desktop>
                <Typography color="white" component="h2" variant="h7" align="left" sx={{
                    marginTop:40,
                    display: 'flex',
                    float: 'left'
                }}>
                    잘못된 경로입니다. 정보수정 전 비밀번호 인증 후 입장해주세요.
                </Typography><br/>
                <RequiredAuthModifyService />
            </Desktop>
            <Tablet>
                <Typography color="white" component="h3" variant="h8" align="left" sx={{
                    marginTop:40,
                    display: 'flex',
                    float: 'left'
                }}>
                    잘못된 경로입니다. 정보수정 전 비밀번호 인증 후 입장해주세요.
                </Typography><br/>
                <RequiredAuthModifyService />
            </Tablet>

            <Mobile>
                <Typography color="white" component="h3" variant="h7" align="left" sx={{
                    marginTop:18,
                    width:350,
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'column'
                }}>
                    잘못된 경로입니다.
                </Typography><br/>
                <Typography color="white" component="h4" variant="h8" align="left" sx={{
                    width:350,
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'column'
                }}>
                    정보수정 전 비밀번호 인증 후 입장해주세요.
                </Typography><br/>
                <RequiredAuthModifyService />
            </Mobile>

        </>
    )
}