import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import * as React from "react";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function Answer(props){

    const{answer, onChangeAnswer, answerList}=props

    return(
        <>
            <Desktop>
                <FormControl sx={{marginTop:3,width:450}}>
                    <InputLabel>답변유형</InputLabel>
                    <Select
                        value={answer}
                        name="answer"
                        onChange={onChangeAnswer}
                        input={<OutlinedInput label="name" />}
                    >
                        {answerList.map((item) => (
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
                    <InputLabel>답변유형</InputLabel>
                    <Select
                        value={answer}
                        name="answer"
                        onChange={onChangeAnswer}
                        input={<OutlinedInput label="name" />}
                    >
                        {answerList.map((item) => (
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
                    <InputLabel>답변유형</InputLabel>
                    <Select
                        value={answer}
                        name="answer"
                        onChange={onChangeAnswer}
                        input={<OutlinedInput label="name" />}
                    >
                        {answerList.map((item) => (
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
    )

}