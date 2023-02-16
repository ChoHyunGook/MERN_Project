import {Button,  Typography} from "@mui/material";
import {useState} from "react";
import UpdatePasswordModal from "../../../modals/main/updatePasswordModal";


export default function ModifyPasswordTablet(props){

    const {userData, CheckCompany, srcAddress} =props

    const [modalOpen, setModalOpen] = useState(false);


    const openModal=()=>{
        setModalOpen(true);
    };
    const closeModal=()=>{
        setModalOpen(false);
    }

    return(
        <>
            <div style={{alignItems:'center',display:'flex',paddingLeft:25,paddingBottom:20}}>
                <Button
                    onClick={openModal}
                    fullWidth
                    variant="outlined"
                    type="submit"
                    size="medium"
                    sx={{
                        width:400,
                        marginTop:0,
                        height:50,
                        border:3,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'#c7ebff',
                            borderColor:'#008DDC'
                        }
                    }}
                >
                    <Typography component="h3" variant="h7">
                        비밀번호 변경하기
                    </Typography>
                </Button>
                {modalOpen && <UpdatePasswordModal open={modalOpen} close={closeModal} header="비밀번호 변경"
                                               userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>}
            </div>
        </>
    )
}