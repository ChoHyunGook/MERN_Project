import {Button, TextField, Typography} from "@mui/material";
import UpdateNameModal from "../../../modals/main/updateNameModal";
import {useState} from "react";


export default function ModifyNameTablet(props){

    const {userData, CheckCompany, srcAddress} =props

    let nameMap = userData.map(item=>item.name)

    const [modalOpen, setModalOpen] = useState(false);



    const openModal=()=>{
        setModalOpen(true);
    };
    const closeModal=()=>{
        setModalOpen(false);
    }

    return(
        <>
            <div style={{alignItems:'center',display:'flex',paddingBottom:30}}>
                <div style={{paddingLeft:20,paddingRight:10}}>
                <TextField
                    required
                    type="text"
                    name="name"
                    label="이름"
                    defaultValue={nameMap}
                    disabled
                    sx={{width:300}}
                />
                </div>
                <Button
                    onClick={openModal}
                    variant="outlined"
                    type="submit"
                    size="medium"
                    sx={{
                        marginTop:0,
                        width:'100px',
                        height:'58px',
                        border:3,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'#c7ebff',
                            borderColor:'#008DDC'
                        }
                    }}
                >
                    <Typography component="h3" variant="h7">
                        수정
                    </Typography>
                </Button>

                {modalOpen && <UpdateNameModal open={modalOpen} close={closeModal} header="이름 변경"
                                                userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>}
            </div>
        </>
    )
}