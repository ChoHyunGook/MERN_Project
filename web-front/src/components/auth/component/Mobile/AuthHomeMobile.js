import background from "../../../../images/bg_yellow_flower_field.jpg";
import {ThemeProvider} from "@mui/material/styles";
import {Box, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export default function AuthHomeMobile(props){

    const { theme, authId, onChangeId, password, onChangePassword, onSubmitHandler  }=props

    return(
        <>
            <div style={{
                backgroundImage: `url(${background})`,
                width:'100%',height:'100%'}}>
                <ThemeProvider theme={theme}>
                    <div style={{display:'flex',alignItems:'center',flexDirection:"column",paddingBottom:300}}>
                        <Box
                            component="form"
                            sx={{
                                marginTop: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                height: '550px',
                                width: '350px',
                                borderRadius:'0.5rem',
                                border:1,
                                borderColor:'grey.500'

                            }}>
                            <img alt="No Images" src="images/img_splash_title.png"
                                 style={{
                                     display:'flex',
                                     alignItems: "center",
                                     width:200,
                                     marginTop:30,
                                     paddingBottom:20
                                 }}/>
                            <Typography component="h3" variant="h8" sx={{paddingBottom:2}}>
                                관리자 로그인
                            </Typography>
                            <Divider color="#696969" sx={{height: 2, width: '300px'}}></Divider><br/>
                            <TextField
                                value={authId}
                                margin="normal"
                                required
                                sx={{width:250}}
                                label="관리자 ID"
                                name="userid"
                                autoFocus
                                onChange={onChangeId}
                            />
                            <TextField
                                value={password}
                                margin="normal"
                                required
                                sx={{width:250}}
                                label="관리자 Password"
                                type="password"
                                onChange={onChangePassword}
                            />
                            <Button
                                onClick={onSubmitHandler}
                                disabled={authId.length<5 || password.length<5}
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ mt: 5, mb: 2,
                                    width:250,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                관리자 로그인
                            </Button>
                        </Box>
                    </div>
                </ThemeProvider>
            </div>
        </>
    )
}