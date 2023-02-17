import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";
import {Typography} from "@mui/material";
import RequiredMobileDataService from "../service/RequiredMobileDataService";


export default function RequiredMobileDataComponent(){

    return(
        <>
            <Desktop>
                <Typography color="white" component="h2" variant="h7" align="left" sx={{
                    marginTop:40,
                    display: 'flex',
                    float: 'left'
                }}>
                    잘못된 경로입니다.
                </Typography><br/>
                <RequiredMobileDataService />
            </Desktop>
            <Tablet>
                <Typography color="white" component="h3" variant="h8" align="left" sx={{
                    marginTop:40,
                    display: 'flex',
                    float: 'left'
                }}>
                    잘못된 경로입니다.
                </Typography><br/>
                <RequiredMobileDataService />
            </Tablet>
            <Mobile>
                <Typography color="white" component="h3" variant="h8" align="left" sx={{
                    marginTop:18,
                    display: 'flex',
                    float: 'left'
                }}>
                    잘못된 경로입니다.
                </Typography><br/>
                <RequiredMobileDataService />
            </Mobile>
        </>
    )
}