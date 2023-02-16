import {Button, Typography} from "@mui/material";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function RequiredLoginService(){
    return(
        <>
            <Desktop>
                <Button
                    variant="outlined"
                    href="/login"
                    sx={{
                        marginTop:2,
                        fontStyle:"inherit",
                        fontSize:'18px',
                        width:'250px',
                        height:'60px',
                        borderColor:"white"
                    }}>
                    <Typography color="whitesmoke" component="h2" variant="h5" align="left" sx={{
                        marginTop:0.5,
                        display: 'flex',
                        float: 'left'
                    }}>
                        로그인 하러가기
                    </Typography>
                </Button>
            </Desktop>
            <Tablet>
                <Button
                    variant="outlined"
                    href="/login"
                    sx={{
                        marginTop:2,
                        fontStyle:"inherit",
                        fontSize:'18px',
                        width:'230px',
                        height:'50px',
                        borderColor:"white"
                    }}>
                    <Typography color="whitesmoke" component="h2" variant="h5" align="left" sx={{
                        marginTop:0.5,
                        display: 'flex',
                        float: 'left'
                    }}>
                        로그인 하러가기
                    </Typography>
                </Button>
            </Tablet>
            <Mobile>
            <Button
                variant="outlined"
                href="/login"
                sx={{
                    marginTop:2,
                    fontStyle:"inherit",
                    fontSize:'18px',
                    width:'210px',
                    height:'40px',
                    borderColor:"white"
                }}>
                <Typography color="whitesmoke" component="h2" variant="h5" align="left" sx={{
                    marginTop:0.5,
                    display: 'flex',
                    float: 'left'
                }}>
                    로그인 하러가기
                </Typography>
            </Button>
            </Mobile>
        </>
    )
}