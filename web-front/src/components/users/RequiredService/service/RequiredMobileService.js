import {Desktop, Tablet} from "../../../../containers/Responsive/responsive";
import {Button, Typography} from "@mui/material";


export default function RequiredMobileService(){

    return(
        <>
            <Desktop>
                <Button
                    autoFocus
                    variant="outlined"
                    href="/table"
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
                        테이블 페이지로
                    </Typography>
                </Button>
            </Desktop>
            <Tablet>
                <Button
                    autoFocus
                    variant="outlined"
                    href="/table"
                    sx={{
                        marginTop:2,
                        fontStyle:"inherit",
                        fontSize:'18px',
                        width:'220px',
                        height:'50px',
                        borderColor:"white"
                    }}>
                    <Typography color="whitesmoke" component="h2" variant="h5" align="left" sx={{
                        marginTop:0.5,
                        display: 'flex',
                        float: 'left'
                    }}>
                        테이블 페이지로
                    </Typography>
                </Button>
            </Tablet>
        </>
    )
}