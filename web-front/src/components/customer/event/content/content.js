import Textarea from "@mui/joy/Textarea";
import * as React from "react";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function Content(props){

    const {defaultValue, onChangeContent}=props

    return(
        <>
            <Desktop>
                <Textarea
                    defaultValue={defaultValue}
                    placeholder="문의하실 내용을 기입해주세요."
                    sx={{marginTop:1,width:920,height:280, border:1,
                        borderColor:'grey.500'}}
                    name="sendInfo"
                    onChange={onChangeContent}
                />
            </Desktop>
            <Tablet>
                <Textarea
                    defaultValue={defaultValue}
                    placeholder="문의하실 내용을 기입해주세요."
                    sx={{marginTop:1,width:450,height:280, border:1,
                        borderColor:'grey.500'}}
                    name="sendInfo"
                    onChange={onChangeContent}
                />
            </Tablet>
            <Mobile>
                <Textarea
                    defaultValue={defaultValue}
                    placeholder="문의하실 내용을 기입해주세요."
                    sx={{marginTop:1,width:300,height:280, border:1,
                        borderColor:'grey.500'}}
                    name="sendInfo"
                    onChange={onChangeContent}
                />
            </Mobile>
        </>
    )
}