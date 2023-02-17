import {Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import UpdateUserIdModal from "../../../modals/main/updateUserIdModal";


export default function ModifyUserIdMobile(props){

    const {userData, CheckCompany, srcAddress} = props

    let useridMap = userData.map(item=>item.userid)

    const [modalOpen, setModalOpen] = useState(false);

    const openModal=()=>{
        setModalOpen(true);
    };
    const closeModal=()=>{
        setModalOpen(false);
    }

    return(
        <>
            <div style={{alignItems:'center',display:'flex',flexDirection:'column',paddingBottom:25}}>
                <TextField
                    size='small'
                    required
                    fullWidth
                    type="text"
                    name="userid"
                    label="아이디(이메일)"
                    defaultValue={useridMap}
                    disabled
                    sx={{width:280}}
                />
                <Button
                    onClick={openModal}
                    variant="outlined"
                    type="submit"
                    size="medium"
                    sx={{
                        marginTop:1,
                        width:'280px',
                        height:'35px',
                        border:3,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'#c7ebff',
                            borderColor:'#008DDC'
                        }
                    }}
                >
                    <Typography component="h3" variant="h7">
                        아이디(이메일)수정
                    </Typography>
                </Button>
                {modalOpen && <UpdateUserIdModal open={modalOpen} close={closeModal} header="아이디(이메일)변경"
                                            userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>}
            </div>
        </>
    )
}