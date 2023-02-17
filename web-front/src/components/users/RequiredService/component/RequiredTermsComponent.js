import { Typography} from "@mui/material";
import RequiredTermsService from "../service/RequiredTermsService";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function RequiredTermsComponent(){
    return(
        <>
            <Desktop>
                <Typography color="white" component="h2" variant="h7" align="left" sx={{
                    marginTop:40,
                    display: 'flex',
                    float: 'left'
                }}>
                    잘못된 경로입니다. 회원가입 약관동의 후 접근해주세요.
                </Typography><br/>
                <RequiredTermsService />
            </Desktop>
            <Tablet>
                <Typography color="white" component="h3" variant="h8" align="left" sx={{
                    marginTop:40,
                    display: 'flex',
                    float: 'left'
                }}>
                    잘못된 경로입니다. 회원가입 약관동의 후 접근해주세요.
                </Typography><br/>
                <RequiredTermsService />
            </Tablet>
            <Mobile>
                <Typography color="white" component="h4" variant="h8" align="left" sx={{
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
                    회원가입 약관동의 후 접근해주세요.
                </Typography><br/>
                <RequiredTermsService />
            </Mobile>

        </>
    )
}