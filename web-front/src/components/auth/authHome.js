import background from "../../images/bg_yellow_flower_field.jpg";
import {Box, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import Button from "@mui/material/Button";
import {authLogin} from "../../api";
import {Desktop,Tablet,Mobile} from "../../containers/Responsive/responsive";
import AuthHomeDesktop from "./component/Desktop/AuthHomeDesktop";
import AuthHomeTablet from "./component/Tablet/AuthHomeTablet";
import AuthHomeMobile from "./component/Mobile/AuthHomeMobile";


export default function AuthHome(){

    const theme = createTheme();

    const [authId,setAuthId] =useState('')
    const [password, setPassword] = useState('')
    const [res, setRes] = useState('')

    const onChangeId = (e)=>{
        setAuthId(e.target.value)
    }
    const onChangePassword = (e)=>{
        setPassword(e.target.value)
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()

        let data = {authId: authId, password: password}

        setRes(data)

        authLogin(data)
            .then(res => {
                setRes(res.data)
                alert('관리자 로그인 성공')
                window.location.replace('/')
            })
            .catch(function (err) {
                alert(JSON.stringify(err.response.data))
            })

    }



    return(<>
            <Desktop>
                <AuthHomeDesktop theme={theme} authId={authId} onChangeId={onChangeId}
                         password={password} onChangePassword={onChangePassword}
                         onSubmitHandler={onSubmitHandler} />
            </Desktop>

            <Tablet>
                <AuthHomeTablet theme={theme} authId={authId} onChangeId={onChangeId}
                                password={password} onChangePassword={onChangePassword}
                                onSubmitHandler={onSubmitHandler}/>
            </Tablet>

            <Mobile>
                <AuthHomeMobile theme={theme} authId={authId} onChangeId={onChangeId}
                                password={password} onChangePassword={onChangePassword}
                                onSubmitHandler={onSubmitHandler}/>
            </Mobile>
    </>

    )
}