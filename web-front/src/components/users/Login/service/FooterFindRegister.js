import Button from "@mui/material/Button";
import * as React from "react";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function FooterFindRegister(){

    const onFindId = (e)=>{
        e.preventDefault()
        window.location.href('/findId')
    }



    return(
        <>
            <Desktop>
                <div style={{alignItems:'center',display:'flex',margin:20}}>
                    <Button
                        type="submit"
                        variant="text"
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:"120px"}}
                        size="small"
                        onClick={onFindId}
                        style={{backgroundColor:"white"}}
                    >
                        아이디찾기
                    </Button>

                    <Button
                        type="submit"
                        variant="text"
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:"120px"}}
                        size="small"
                        href="/findPwSelect"
                        style={{backgroundColor:"white"}}
                    >
                        비밀번호찾기
                    </Button>

                    <Button
                        type="submit"
                        variant="text"
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:"120px"}}
                        size="small"
                        href="/agreeRegister"
                        style={{backgroundColor:"white"}}
                    >
                        회원가입
                    </Button>
                </div>
            </Desktop>

            <Tablet>
                <div style={{alignItems:'center',display:'flex',margin:20}}>
                    <Button
                        type="submit"
                        variant="text"
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:"120px"}}
                        size="small"
                        href="/findId"
                        style={{backgroundColor:"white"}}
                    >
                        아이디찾기
                    </Button>

                    <Button
                        type="submit"
                        variant="text"
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:"120px"}}
                        size="small"
                        href="/findPwSelect"
                        style={{backgroundColor:"white"}}
                    >
                        비밀번호찾기
                    </Button>

                    <Button
                        type="submit"
                        variant="text"
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:"120px"}}
                        size="small"
                        href="/agreeRegister"
                        style={{backgroundColor:"white"}}
                    >
                        회원가입
                    </Button>
                </div>
            </Tablet>

            <Mobile>
            <div style={{alignItems:'center',display:'flex',margin:20}}>
                <Button
                    type="submit"
                    variant="text"
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:"100px"}}
                    size="small"
                    href="/findId"
                    style={{backgroundColor:"white"}}
                >
                    아이디찾기
                </Button>

                <Button
                    type="submit"
                    variant="text"
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:"100px"}}
                    size="small"
                    href="/findPwSelect"
                    style={{backgroundColor:"white"}}
                >
                    비밀번호찾기
                </Button>

                <Button
                    type="submit"
                    variant="text"
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:"100px"}}
                    size="small"
                    href="/agreeRegister"
                    style={{backgroundColor:"white"}}
                >
                    회원가입
                </Button>
            </div>
            </Mobile>
        </>
            )
}