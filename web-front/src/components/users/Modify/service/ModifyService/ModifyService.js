import React, {useEffect, useState} from 'react'
import ModifyNameDesktop from "./Desktop/ModifyNameDesktop";
import ModifyUserIdDesktop from "./Desktop/ModifyUserIdDesktop";
import ModifyPhoneDesktop from "./Desktop/ModifyPhoneDesktop";
import ModifyPasswordDesktop from "./Desktop/ModifyPasswordDesktop";
import DeleteUserDesktop from "./Desktop/DeleteUserDesktop";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";
import ModifyNameTablet from "./Tablet/ModifyNameTablet";
import ModifyUserIdTablet from "./Tablet/ModifyUserIdTablet";
import ModifyPhoneTablet from "./Tablet/ModifyPhoneTablet";
import ModifyPasswordTablet from "./Tablet/ModifyPasswordTablet";
import DeleteUserTablet from "./Tablet/DeleteUserTablet";
import ModifyNameMobile from "./Mobile/ModifyNameMobile";
import ModifyUserIdMobile from "./Mobile/ModifyUserIdMobile";
import ModifyPhoneMobile from "./Mobile/ModifyPhoneMobile";
import ModifyPasswordMobile from "./Mobile/ModifyPasswordMobile";
import DeleteUserMobile from "./Mobile/DeleteUserMobile";


export default function ModifyService(props){

    const { userData,CheckCompany,srcAddress } = props;


    const [isCheck, setIsCheck] = useState(false)

    let useridMap = userData.map(item=>item.userid)


    useEffect(()=>{
        if(useridMap.length !== 1){
            setIsCheck(false)
            window.location.reload()
        }else {
            setIsCheck(true)
        }
    }, [useridMap])


    return(
        <>
            <Desktop>
                <div>
                    <ModifyNameDesktop userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <ModifyUserIdDesktop userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <ModifyPhoneDesktop userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <ModifyPasswordDesktop userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <DeleteUserDesktop userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                </div>
            </Desktop>

            <Tablet>
                <div>
                    <ModifyNameTablet userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <ModifyUserIdTablet userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <ModifyPhoneTablet userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <ModifyPasswordTablet userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <DeleteUserTablet userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                </div>
            </Tablet>

            <Mobile>
                <div>
                    <ModifyNameMobile userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <ModifyUserIdMobile userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <ModifyPhoneMobile userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <ModifyPasswordMobile userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                    <DeleteUserMobile userData={userData} CheckCompany={CheckCompany} srcAddress={srcAddress}/>
                </div>
            </Mobile>

        </>
    )
}