import {Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import React from "react";


export default function MobileDataService(props){

    const { CheckCompany, handleChange, userData, contractSortationList, communicationOpenList,
        handleClick}=props

    return(
        <>
            <TextField
                required
                sx={{width:280,paddingBottom:2}}
                size='small'
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
                size='small'
                sx={{width:280,paddingBottom:2}}
                type="text"
                name="contract"
                label="계약번호"
                value={userData.map(item=>item.contract)}
                onChange={handleChange}
                disabled
            />
            <TextField
                required
                size='small'
                sx={{width:280,paddingBottom:2}}
                type="text"
                name="terminalNum"
                label="단말기번호"
                defaultValue={userData.map(item=>item.terminalNum)}
                onChange={handleChange}
            />

            <TextField
                defaultValue={userData.map(item=>item.id)}
                sx={{width:280,paddingBottom:2}}
                required
                size='small'
                type="text"
                name="id"
                label="ID"
                onChange={handleChange}
            />
            <TextField
                defaultValue={userData.map(item=>item.phoneNum)}
                required
                sx={{width:280,paddingBottom:1}}
                type="text"
                size='small'
                name="phoneNum"
                label="연락처"
                onChange={handleChange}
            />




            <FormControl sx={{width:280,paddingBottom:2}}>
                <InputLabel>계약자 구분</InputLabel>
                <Select
                    defaultValue={userData.map(item=>item.contractSortation)}
                    rowsPerPageOptions
                    size='small'
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


            <FormControl sx={{width:280,paddingBottom:2}} >
                <InputLabel>통신</InputLabel>
                <Select
                    defaultValue={userData.map(item=>item.communication)}
                    rowsPerPageOptions
                    size='small'
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
                defaultValue={userData.map(item=>item.serviceType)}
                required
                size='small'
                sx={{width:280,paddingBottom:2}}
                type="text"
                name="serviceType"
                label="서비스종류"
                onChange={handleChange}
            />


            <FormControl sx={{width:280,paddingBottom:2}} >
                <InputLabel>개시</InputLabel>
                <Select
                    defaultValue={userData.map(item=>item.open)}
                    name="open"
                    type='text'
                    size='small'
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
                defaultValue={userData.map(item=>item.serviceRegitDate)}
                required
                sx={{width:280,paddingBottom:2}}
                type="text"
                size='small'
                name="serviceRegitDate"
                label="서비스등록일자"
                onChange={handleChange}
            />


            <TextField
                defaultValue={userData.map(item=>item.serviceCloseDate)}
                required
                sx={{width:280,paddingBottom:2}}
                fullWidth
                type="text"
                size='small'
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
                수정하기
            </Button>
        </>
    )
}