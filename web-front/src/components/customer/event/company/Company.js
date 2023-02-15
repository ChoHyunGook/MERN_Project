import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import * as React from "react";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function Company(props){

    const {isLogin,company,onChangeCompany,CompanyList,CheckCompany}=props

    return(
        <>
            {isLogin ? (
                <>
                    <Desktop>
                        <FormControl sx={{width:450}}>
                            <InputLabel>소속 회사</InputLabel>
                            <Select
                                value={CheckCompany}
                                disabled
                                name="company"
                                input={<OutlinedInput label="name" />}
                            >
                                {CompanyList.map((item) => (
                                    <MenuItem
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Desktop>

                    <Tablet>
                        <FormControl sx={{width:450}}>
                            <InputLabel>소속 회사</InputLabel>
                            <Select
                                value={CheckCompany}
                                disabled
                                name="company"
                                input={<OutlinedInput label="name" />}
                            >
                                {CompanyList.map((item) => (
                                    <MenuItem
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Tablet>

                    <Mobile>
                        <FormControl sx={{width:300}}>
                            <InputLabel>소속 회사</InputLabel>
                            <Select
                                value={CheckCompany}
                                disabled
                                name="company"
                                input={<OutlinedInput label="name" />}
                            >
                                {CompanyList.map((item) => (
                                    <MenuItem
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Mobile>

                </>
            ):(
                <>
                    <Desktop>
                        <FormControl sx={{width:450}}>
                            <InputLabel>소속 회사</InputLabel>
                            <Select
                                value={company}
                                name="company"
                                onChange={onChangeCompany}
                                input={<OutlinedInput label="name" />}
                            >
                                {CompanyList.map((item) => (
                                    <MenuItem
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Desktop>

                    <Tablet>
                        <FormControl sx={{width:450}}>
                            <InputLabel>소속 회사</InputLabel>
                            <Select
                                value={company}
                                name="company"
                                onChange={onChangeCompany}
                                input={<OutlinedInput label="name" />}
                            >
                                {CompanyList.map((item) => (
                                    <MenuItem
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Tablet>

                    <Mobile>
                        <FormControl sx={{width:300}}>
                            <InputLabel>소속 회사</InputLabel>
                            <Select
                                value={company}
                                name="company"
                                onChange={onChangeCompany}
                                input={<OutlinedInput label="name" />}
                            >
                                {CompanyList.map((item) => (
                                    <MenuItem
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Mobile>

                </>
                )}

        </>
    )

}