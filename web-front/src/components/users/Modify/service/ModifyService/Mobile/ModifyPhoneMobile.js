import {Button,  TextField, Typography} from "@mui/material";
import { useState} from "react";
import UpdatePhoneModal from "../../../modals/main/updatePhoneModal";


export default function ModifyPhoneMobile(props){

    const {userData,CheckCompany,srcAddress} =props

    let phoneMap = userData.map(item=>item.phone)

    const [modalOpen, setModalOpen] = useState(false);



    const openModal=()=>{
        setModalOpen(true);
    };
    const closeModal=()=>{
        setModalOpen(false);
    }



    return(
        <>
            <div style={{alignItems:'center',display:'flex',flexDirection:'column',paddingBottom:5}}>
                <TextField
                    size='small'
                    required
                    type="text"
                    name="phone"
                    label='전화번호'
                    defaultValue={phoneMap}
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
                        전화번호 수정
                    </Typography>
                </Button>
                {modalOpen && <UpdatePhoneModal open={modalOpen} close={closeModal} header="전화번호 수정"
                                     userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>}
            </div><br/>
        </>
    )
}