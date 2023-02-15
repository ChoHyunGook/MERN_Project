import {Box, Typography} from "@mui/material";
import Logo from "../../event/logo/Logo";
import Contact from "../../event/contact/contact";
import Answer from "../../event/answer/answer";
import Company from "../../event/company/Company";
import SendInfo from "../../event/sendInfo/SendInfo";
import Content from "../../event/content/content";
import OnSubmit from "../../event/OnSubmit";
import * as React from "react";


export default function ContactEmailMobile(props){

    const {isLogin, srcAddress, onChangeContact, contact, onChangeCompanyContact, contactList, answerList,
        answer, onChangeAnswer, company, onChangeCompany, CompanyList, CheckCompany, sendInfo, onChangeSendInfo,
        isEmailAnswer, isInfo, userId, phone, defaultValue, onChangeContent, onSubmitSMS, onSubmitEmail, onSubmitHandler,
        isInfoContent, isAnswer, isContact, isCompany }=props



    return(
        <>
            <div style={{paddingTop:60,paddingBottom:180}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '800px',
                        width: '350px',
                        backgroundColor:'white',
                        borderRadius:'0.5rem',
                        marginTop:-4
                    }}>

                    <Logo isLogin={isLogin} srcAddress={srcAddress}/>

                    <Typography  color='grey' component="h4" variant="h7" sx={{marginTop:1}}>
                        1:1 문의하기 서비스 입니다.
                    </Typography>
                    <Typography  color='grey' component="h5" variant="h8" sx={{marginTop:2}}>
                        최대한 빠르게 검토 후 연락드리겠습니다.
                    </Typography>

                    <Contact isLogin={isLogin} onChangeContact={onChangeContact} contact={contact}
                             onChangeCompanyContact={onChangeCompanyContact} contactList={contactList}/>

                    <Answer answerList={answerList} answer={answer} onChangeAnswer={onChangeAnswer}/><br/>


                    <Company isLogin={isLogin} company={company} onChangeCompany={onChangeCompany}
                             CompanyList={CompanyList} CheckCompany={CheckCompany} /><br/>

                    <SendInfo isLogin={isLogin} sendInfo={sendInfo} onChangeSendInfo={onChangeSendInfo}
                              isEmailAnswer={isEmailAnswer} isInfo={isInfo} userId={userId} phone={phone}/>

                    <Content defaultValue={defaultValue} onChangeContent={onChangeContent}/>

                    <OnSubmit isEmailAnswer={isEmailAnswer} isLogin={isLogin} onSubmitSMS={onSubmitSMS} onSubmitEmail={onSubmitEmail} onSubmitHandler={onSubmitHandler} isInfo={isInfo} isInfoContent={isInfoContent}
                              isAnswer={isAnswer} isContact={isContact} isCompany={isCompany}/>
                </Box>
            </div>

        </>
    )
}