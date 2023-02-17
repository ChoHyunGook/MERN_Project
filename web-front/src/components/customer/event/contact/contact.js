import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import * as React from "react";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";



export default function Contact(props){

    const { isLogin, onChangeContact, contactList, contact ,onChangeCompanyContact} =props

    return(
        <>
            {isLogin ? (
                <>
                    <Desktop>
                        <FormControl sx={{marginTop:3,width:450}}>
                            <InputLabel>문의유형</InputLabel>
                            <Select
                                autoFocus
                                value={contact}
                                name="contact"
                                onChange={onChangeCompanyContact}
                                input={<OutlinedInput label="name" />}
                            >
                                {contactList.map((item) => (
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
                        <FormControl sx={{marginTop:3,width:450}}>
                            <InputLabel>문의유형</InputLabel>
                            <Select
                                autoFocus
                                value={contact}
                                name="contact"
                                onChange={onChangeCompanyContact}
                                input={<OutlinedInput label="name" />}
                            >
                                {contactList.map((item) => (
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
                        <FormControl sx={{marginTop:3,width:300}}>
                            <InputLabel>문의유형</InputLabel>
                            <Select
                                size='small'
                                autoFocus
                                value={contact}
                                name="contact"
                                onChange={onChangeCompanyContact}
                                input={<OutlinedInput label="name" />}
                            >
                                {contactList.map((item) => (
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
                        <FormControl sx={{marginTop:3,width:450}}>
                            <InputLabel>문의유형</InputLabel>
                            <Select
                                autoFocus
                                value={contact}
                                name="contact"
                                onChange={onChangeContact}
                                input={<OutlinedInput label="name" />}
                            >
                                {contactList.map((item) => (
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
                        <FormControl sx={{marginTop:3,width:450}}>
                            <InputLabel>문의유형</InputLabel>
                            <Select
                                autoFocus
                                value={contact}
                                name="contact"
                                onChange={onChangeContact}
                                input={<OutlinedInput label="name" />}
                            >
                                {contactList.map((item) => (
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
                        <FormControl sx={{marginTop:3,width:300}}>
                            <InputLabel>문의유형</InputLabel>
                            <Select
                                size='small'
                                autoFocus
                                value={contact}
                                name="contact"
                                onChange={onChangeContact}
                                input={<OutlinedInput label="name" />}
                            >
                                {contactList.map((item) => (
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