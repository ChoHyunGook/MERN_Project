import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";
import {Button, Typography} from "@mui/material";


export default function RequiredMobileDataService(){

    return(
        <>
            <Desktop>
                <Button
                    autoFocus
                    variant="outlined"
                    href="/"
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
                        홈으로
                    </Typography>
                </Button>
            </Desktop>
            <Tablet>
                <Button
                    autoFocus
                    variant="outlined"
                    href="/"
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
                        홈으로
                    </Typography>
                </Button>
            </Tablet>
            <Mobile>
                <Button
                    autoFocus
                    variant="outlined"
                    href="/"
                    sx={{
                        marginTop:2,
                        fontStyle:"inherit",
                        fontSize:'18px',
                        width:'200px',
                        height:'40px',
                        borderColor:"white"
                    }}>
                    <Typography color="whitesmoke" component="h2" variant="h5" align="left" sx={{
                        marginTop:0.5,
                        display: 'flex',
                        float: 'left'
                    }}>
                        홈으로
                    </Typography>
                </Button>
            </Mobile>
        </>
    )
}