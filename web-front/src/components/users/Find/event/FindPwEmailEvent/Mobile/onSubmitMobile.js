import {changePasswordPage} from "../../../../../../api";
import Button from "@mui/material/Button";


export default function OnSubmitMobile(props){

    const { signNum, userid, setRes}=props

    const checkSignHandler = (e) => {
        e.preventDefault()
        let data = {
            authNum: signNum,
            userid: userid
        }

        changePasswordPage(data)
            .then(res=>{
                setRes(res.data)
                alert(res.data)
                window.location.replace('/changePw')

            }).catch(function (err){
            alert(err.response.data)
        })
    }

    return(
        <>
            <Button
                sx={{height:45,width:280,marginTop:2}}
                type="submit"
                variant="contained"
                disabled={signNum.length<6 || false}
                onClick={checkSignHandler}
            >
                다음
            </Button>
        </>
    )
}