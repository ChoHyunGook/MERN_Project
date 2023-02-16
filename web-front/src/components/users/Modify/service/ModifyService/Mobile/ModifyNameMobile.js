import {Button, Grid, TextField, Typography} from "@mui/material";
import UpdateNameModal from "../../../modals/main/updateNameModal";
import {useState} from "react";


export default function ModifyNameMobile(props){

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
            <div style={{alignItems:'center',display:'flex',flexDirection:'column',paddingBottom:30}}>
                <TextField
                    required
                    fullWidth
                    type="text"
                    name="name"
                    label="이름"
                    defaultValue={nameMap}
                    disabled
                    sx={{width:280}}
                /><br/>
                <Button
                    onClick={openModal}
                    variant="outlined"
                    type="submit"
                    size="medium"
                    sx={{
                        marginTop:0,
                        width:'280px',
                        height:'40px',
                        border:3,
                        "&.MuiButton-root:hover":{
                            color:'#008DDC',
                            backgroundColor:'#c7ebff',
                            borderColor:'#008DDC'
                        }
                    }}
                >
                    <Typography component="h3" variant="h7">
                        이름 수정
                    </Typography>
                </Button>

                {modalOpen && <UpdateNameModal open={modalOpen} close={closeModal} header="이름 변경"
                                                userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>}
            </div>
        </>
    )
}