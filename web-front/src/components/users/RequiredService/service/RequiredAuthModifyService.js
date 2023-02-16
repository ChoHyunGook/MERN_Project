import {Button, Typography} from "@mui/material";


export default function RequiredAuthModifyService(){
    return(
        <>
            <Button
                variant="outlined"
                href="/"
                sx={{
                    marginTop:2,
                    fontStyle:"inherit",
                    fontSize:'18px',
                    width:'200px',
                    height:'60px',
                    borderColor:"white"
                }}>
                <Typography color="whitesmoke" component="h2" variant="h5" align="left" sx={{
                    marginTop:0.5,
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'column'
                }}>
                    홈으로
                </Typography>
            </Button>
        </>
    )
}