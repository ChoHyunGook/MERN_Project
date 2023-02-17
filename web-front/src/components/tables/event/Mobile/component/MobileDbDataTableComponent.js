import React, {useEffect, useState} from "react";
import {companyCheck, searchDataCheck, signCheck, tableDelete, tableEdit} from "../../../../../api";
import {
    Box,
    Typography
} from "@mui/material";
import Layout from "../../../../../containers/main/Layout";
import background from "../../../../../images/bg_yellow_flower_field.jpg";
import RequiredLogin from "../../../../users/RequiredService/main/RequiredLogin";
import DeleteTableMobileService from "../service/DeleteTableMobileService";
import UpdateTableMobileService from "../service/UpdateTableMobileService";
import MobileDataService from "../service/MobileDataService";
import BackMobileService from "../service/BackMobileService";



export default function MobileDbDataTableComponent(){

    const [userData,setUserData]=useState('')
    const [srcAddress, setSrcAddress] = useState('')
    const [CheckCompany, setCheckCompany] = useState('')




    const [inputs, setInputs] = useState({})
    const { terminalNum, contractSortation, id, phoneNum, communication,serviceType,
        serviceRegitDate,serviceCloseDate,open } =inputs;
    const contractSortationList = ['주계약자','부계약자']
    const communicationOpenList = ['O','X']

    const[res,setRes]=useState('')

    const handleChange = (e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs,[name]:value
        })
    }



    const handleClick = (e)=>{
        e.preventDefault()
        let contract = userData.map(item=>item.contract)
        tableEdit({contract:contract[0], terminalNum, contractName:CheckCompany, contractSortation, id, phoneNum,
            communication,serviceType, serviceRegitDate,serviceCloseDate,open})
            .then(res=>{
                setRes(res.data)
                alert('수정 완료')
                window.location.replace('/table')
            })
            .catch(function (err){
                alert(err.response.data)
            })
    }

    const deleteConfirm = ()=>{
        tableDelete(userData)
            .then((res)=>{
                console.log(res.data)
                window.location.replace('/table')
            })
            .catch(function (err){
                console.log(err)
                alert(JSON.stringify(err.response.data))
            })
    }

    const useConfirm = (message = null, onConfirm, onCancel) => {
        if (!onConfirm || typeof onConfirm !== "function") {
            return;
        }
        if (onCancel && typeof onCancel !== "function") {
            return;
        }

        const confirmAction = () => {
            if (window.confirm(message)) {
                onConfirm();
            } else {
                onCancel();
            }
        };

        return confirmAction;
    };



    const cancelConfirm = () => console.log("취소했습니다.");

    const confirmDelete = useConfirm(
        "해당 데이터를 삭제하시겠습니까?",
        deleteConfirm,
        cancelConfirm
    );



    const onBackClick = (e)=>{
        e.preventDefault()
        window.location.replace('/table')
    }


    useEffect(()=>{
        try {
            searchDataCheck()
                .then((res)=>{
                    setUserData(res.data)
                })
            companyCheck()
                .then((res) => {
                    if (res.data === 'LG HelloVision') {
                        setSrcAddress("../../../../../images/lg_hello.png")
                        setCheckCompany('LG HelloVision')
                    }else if(res.data === 'Samsung S1'){
                        setSrcAddress("../../../../../images/s1.png")
                        setCheckCompany('Samsung S1')
                    }else if(res.data === 'LG U+'){
                        setSrcAddress("../../../../../images/lgu.png")
                        setCheckCompany('LG U+')
                    }else if(res.data === 'RAEMIAN'){
                        setSrcAddress("../../../../../images/raemian.png")
                        setCheckCompany('RAEMIAN')
                    }else if(res.data === 'THE WAVE'){
                        setSrcAddress("../../../../../images/the_wave.png")
                        setCheckCompany('THE WAVE')
                    }else if(res.data === 'ETCETRA'){
                        setSrcAddress("../../../../../images/etcetra.png")
                        setCheckCompany('ETCETRA')
                    }else if(res.data === 'Samsung C&T'){
                        setSrcAddress("../../../../../images/samsung_mulsan.png")
                        setCheckCompany('Samsung C&T')
                    }else if(res.data === 'Coway'){
                        setSrcAddress("../../../../../images/coway.png")
                        setCheckCompany('Coway')
                    }else{
                        //블라우비트
                        setSrcAddress("../../../../../images/new_blaubit.png")
                        setCheckCompany('Blaubit')
                    }
                })
        }catch (err){
        }
    },[])

    //로그인 체크
    const [isLogin, setIsLogin]=useState(false)
    const [user,setUser]=useState({})

    useEffect(() => {
        try{
            signCheck()
                .then((res)=>{
                    if(res.status === 200){
                        setIsLogin(true);
                        setUser(res.data);
                    }
                })
                .catch((err)=>{
                })
        }catch (err){
        }
    }, [])





    return(
       <>
           <Layout>
               {isLogin ? (
                   <div style={{
                       backgroundImage: `url(${background})`,
                       paddingBottom: 100
                   }}>
                       <div style={{
                           display: 'flex',
                           flexDirection: "column",
                           alignItems: "center",
                       }}>
                           <Box
                               sx={{
                                   marginTop:6,
                                   flexDirection: 'column',
                                   alignItems: 'center',
                                   display: 'flex',
                                   backgroundColor: 'white',
                                   height: '1000px',
                                   width: '350px',
                                   borderRadius: '2rem'
                               }}
                           >
                               <img alt="No Images" src={srcAddress}
                                 style={{
                                     marginTop: 30
                                 }}/><br/>
                               <Typography component="h4" variant="h0">
                                   데이터 수정 및 삭제
                               </Typography>

                               <BackMobileService onBackClick={onBackClick}/>
                               <div>
                                   <UpdateTableMobileService handleClick={handleClick}/>
                                   <DeleteTableMobileService confirmDelete={confirmDelete}/>
                               </div>

                               <MobileDataService CheckCompany={CheckCompany} handleChange={handleChange}
                                                  userData={userData} contractSortationList={contractSortationList}
                                                  communicationOpenList={communicationOpenList} handleClick={handleClick}/>
                           </Box>
                       </div>
                   </div>
               ):(
                   <RequiredLogin />
                   )}

           </Layout>
       </>
    )
}