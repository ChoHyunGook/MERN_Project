import React, {useEffect, useState} from "react";
import {companyCheck, signCheck, tableUpdate} from "../../../../../api";
import RequiredLogin from "../../../../users/RequiredService/main/RequiredLogin";
import background from "../../../../../images/bg_yellow_flower_field.jpg";
import Layout from "../../../../../containers/main/Layout";
import {
    Box,
    Typography
} from "@mui/material";
import CreateTableMobileService from "../service/CreateTableMobileService";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import RequiredMobile from "../../../../users/RequiredService/main/RequiredMobile";


export default function CreateTableMobileCompnent(){

    const [inputs, setInputs] = useState({})
    const {contract, terminalNum, contractName, contractSortation, id, phoneNum,
        communication,serviceType, serviceRegitDate,serviceCloseDate,open} =inputs;
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

    const handleClick =(e)=>{
        e.preventDefault()
        tableUpdate({contract, terminalNum, contractName:CheckCompany, contractSortation, id, phoneNum,
            communication,serviceType, serviceRegitDate,serviceCloseDate,open})
            .then(res=>{
                setRes(res.data)
                alert('업데이트 성공')
                window.location.reload()
            })
            .catch(function (err){
                alert(JSON.stringify(err.response.data))
            })

    }

    const onBackClick = (e)=>{
        e.preventDefault()
        window.location.replace('/table')
    }

    const [srcAddress,setSrcAddress] =useState('')
    const [CheckCompany, setCheckCompany] = useState('')



    useEffect(() => {
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
    }, [])


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
                <>
                    <Desktop>
                        <RequiredMobile />
                    </Desktop>

                    <Tablet>
                        <RequiredMobile />
                    </Tablet>

                    <Mobile>
                    <div style={{
                        backgroundImage: `url(${background})`,
                        paddingBottom:150
                    }}>
                        <div style={{display: 'flex',
                            flexDirection:"column",
                            alignItems:"center",}}>
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    width:350,
                                    height:950,
                                    borderRadius:'2rem'
                                }}
                            >
                                <img alt="No Images" src={srcAddress}
                                     style={{
                                         marginTop: 30
                                     }}/><br/>
                                <Typography component="h4" variant="h0">
                                    신규생성
                                </Typography>

                                <CreateTableMobileService onBackClick={onBackClick} CheckCompany={CheckCompany}
                                                          handleChange={handleChange} contractSortation={contractSortation}
                                                          contractSortationList={contractSortationList}
                                communication={communication} communicationOpenList={communicationOpenList} open={open}
                                                          handleClick={handleClick}/>

                            </Box>

                        </div>
                    </div>
                    </Mobile>
                </>
            ):(
                <RequiredLogin />
            )}
        </Layout>
        </>
    )
}