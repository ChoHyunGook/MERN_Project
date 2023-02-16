import Layout from "../../../../../containers/main/Layout";
import background from "../../../../../images/bg_yellow_flower_field.jpg";
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography
} from "@mui/material";
import RequiredLogin from "../../../../users/RequiredService/main/RequiredLogin";
import React, {useEffect, useState} from "react";
import {companyCheck, signCheck, tableEdit, userInfoCheck} from "../../../../../api";


export default function UpdateTableMobileCompnent(){




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
        tableEdit({contract:'contractMap[0]', terminalNum, contractName:CheckCompany, contractSortation, id, phoneNum,
            communication,serviceType, serviceRegitDate,serviceCloseDate,open})
            .then(res=>{
                setRes(res.data)
                alert('수정 완료')
                window.location.reload()
            })
            .catch(function (err){
                alert(err.response.data)
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
                                        height:1050,
                                        borderRadius:'2rem'
                                    }}
                                >
                                    <img alt="No Images" src={srcAddress}
                                         style={{
                                             marginTop: 30
                                         }}/><br/>
                                    <Typography component="h4" variant="h0">
                                        데이터 수정
                                    </Typography>

                                    <Button
                                        onClick={onBackClick}
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 2, mb: 4 ,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width:200,
                                            height:30}}
                                        size="large"
                                    >
                                        뒤로가기
                                    </Button>



                                    <TextField
                                        required
                                        sx={{width:280,paddingBottom:1}}
                                        type="text"
                                        name="contractName"
                                        label="계약자명"
                                        value={CheckCompany}
                                        onChange={handleChange}
                                        disabled
                                    />


                                    <TextField
                                        autoFocus
                                        required
                                        sx={{width:280,paddingBottom:1}}
                                        type="text"
                                        name="contract"
                                        label="계약번호"
                                        onChange={handleChange}
                                        disabled
                                    />
                                    <TextField
                                        required
                                        sx={{width:280,paddingBottom:1}}
                                        type="text"
                                        name="terminalNum"
                                        label="단말기번호"
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        sx={{width:280,paddingBottom:1}}
                                        required
                                        type="text"
                                        name="id"
                                        label="ID"
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        sx={{width:280,paddingBottom:1}}
                                        type="text"
                                        name="phoneNum"
                                        label="연락처"
                                        onChange={handleChange}
                                    />




                                    <FormControl sx={{width:280,paddingBottom:1}}>
                                        <InputLabel>계약자 구분</InputLabel>
                                        <Select
                                            rowsPerPageOptions
                                            name="contractSortation"
                                            type='text'
                                            onChange={handleChange}
                                            input={<OutlinedInput label="name" />}
                                        >
                                            {contractSortationList.map((item) => (
                                                <MenuItem
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>


                                    <FormControl sx={{width:280,paddingBottom:1}} >
                                        <InputLabel>통신</InputLabel>
                                        <Select
                                            rowsPerPageOptions
                                            name="communication"
                                            type='text'
                                            onChange={handleChange}
                                            input={<OutlinedInput label="name" />}
                                        >
                                            {communicationOpenList.map((item) => (
                                                <MenuItem
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <TextField
                                        required
                                        sx={{width:280,paddingBottom:1}}
                                        type="text"
                                        name="serviceType"
                                        label="서비스종류"
                                        onChange={handleChange}
                                    />


                                    <FormControl sx={{width:280,paddingBottom:1}} >
                                        <InputLabel>개시</InputLabel>
                                        <Select
                                            name="open"
                                            type='text'
                                            onChange={handleChange}
                                            input={<OutlinedInput label="name" />}
                                        >
                                            {communicationOpenList.map((item) => (
                                                <MenuItem
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>





                                    <TextField
                                        required
                                        sx={{width:280,paddingBottom:1}}
                                        type="text"
                                        name="serviceRegitDate"
                                        label="서비스등록일자"
                                        onChange={handleChange}
                                    />


                                    <TextField
                                        required
                                        sx={{width:280,paddingBottom:1}}
                                        fullWidth
                                        type="text"
                                        name="serviceCloseDate"
                                        label="서비스해지일자"
                                        onChange={handleChange}
                                    />



                                    <Button
                                        onClick={handleClick}
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 2, mb: 1 ,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width:280}}
                                        size="large"
                                    >
                                        추가하기
                                    </Button>

                                    <br/>


                                </Box>

                            </div>
                        </div>
                    </>
                ):(
                    <RequiredLogin />
                )}
            </Layout>
        </>
    )
}