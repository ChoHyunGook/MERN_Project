import styled from 'styled-components'
import {authLogout, logout, signAllCheck, signCheck} from "../../api";
import React, {useEffect, useState} from "react"
import AfterDesktopNav from "../components/DesktopNav/AfterDesktopNav";
import BeforeDesktopNav from "../components/DesktopNav/BeforeDesktopNav";
import { useMediaQuery } from 'react-responsive'
import BeforeTabletNav from "../components/TabletNav/BeforeTabletNav";
import AfterTabletNav from "../components/TabletNav/AfterTabletNav";
import BeforePhoneNav from "../components/PhoneNav/BeforePhoneNav";
import AfterPhoneNav from "../components/PhoneNav/AfterPhoneNav";
import {Desktop, Tablet, Mobile, MobileLandscape} from "../Responsive/responsive";

const Common = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`

const Home = styled.a`
    display: flex;
    align-items:center;
    margin: 10px;
    text-decoration: none;
    color: black;
    font-weight: bold;
  padding-left: 30px;
  padding-bottom: 20px;
`

const TabletHome = styled.a`
    display: flex;
    align-items:center;
    text-decoration: none;
  padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 5px;

`

const MobileHome = styled.a`
    display: flex;
    align-items:center;
    text-decoration: none;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 1px;

`


const LogoImg = styled.img`
    width:300px;
  margin-top: 8px;
`

const TabletLogoImg = styled.img`
    width:250px;
`

const MobileLogoImg = styled.img`
    width:200px;
`


const ContlorBox = styled.div`
    display: flex;
    align-items:center;
  
`

const Contlor = styled.a`
    margin:10px;
    text-decoration: none;
    color: black;
  padding-right: 30px;
`


const NavTop = styled.div`
  display: flex;
  align-items: unset;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: -30px;
  button {
    background: #004097;
    border: none;
  }
`;

const MobileNavTop = styled.div`
  display: flex;
  align-items: unset;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: -50px;
  button {
    background: #004097;
    border: none;
  }
`;


const styles = {
    width: '100%',
    maxWidth: '180px',
    bgcolor: '#f0f4fa',
    float: 'right',
    position:'sticky'
};





export default function Navbar(){

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



    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleBar, setToggleBar] = useState(true)

    const toggleChange = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
    }

    const onMenuClick = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
    }

    const [isLogout,setIsLogout] = useState(false)
    const [logoutUser,setLogoutUser] = useState({})
    const logoutButton =(e)=>{
        e.preventDefault()
        logout().then((res)=>{
            setIsLogout(true);
            setLogoutUser(res.data)
            alert('로그아웃 되셨습니다.')
            window.location.replace('/')
        })
            .catch((err)=>{
                alert(err.response.data)
            })

    }

    const [isAuthLogout,setIsAuthLogout]=useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        authLogout()
            .then((res)=>{
                setIsAuthLogout(res.data)
                alert('관리자 로그아웃 완료')
                window.location.replace('/')
            })
            .catch((err)=>{
                alert(err.response.data)
            })
    }

    const onSubmitNavJoin = (e)=>{
        e.preventDefault()
        signAllCheck()
            .then((res)=>{
                if(res.status === 200){
                    setIsLogin(true);
                    setUser(res.data)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        window.location.replace('/agreeRegister')
    }



    return(
        <>
            <Desktop>
                {isLogin ? (
                    <AfterDesktopNav Home={Home} LogoImg={LogoImg} Common={Common}
                                     ContlorBox={ContlorBox} Contlor={Contlor} logoutButton={logoutButton} />
                ):(
                    <BeforeDesktopNav Home={Home} LogoImg={LogoImg} Common={Common}
                                      ContlorBox={ContlorBox} Contlor={Contlor} onSubmit={onSubmit} onSubmitNavJoin={onSubmitNavJoin} />
                )}
            </Desktop>

            <Tablet>
                {isLogin ? (
                    <AfterTabletNav TabletHome={TabletHome} TabletLogoImg={TabletLogoImg} NavTop={NavTop}
                                    toggleChange={toggleChange} toggleBar={toggleBar}
                                    toggleMenu={toggleMenu} styles={styles} logoutButton={logoutButton} />
                ):(
                    <BeforeTabletNav TabletHome={TabletHome} TabletLogoImg={TabletLogoImg} NavTop={NavTop}
                                     toggleChange={toggleChange} toggleBar={toggleBar}
                                     toggleMenu={toggleMenu} styles={styles} onSubmit={onSubmit} onSubmitNavJoin={onSubmitNavJoin}/>
                    )}
            </Tablet>

            <Mobile>
                {isLogin ? (
                    <AfterPhoneNav MobileHome={MobileHome} MobileLogoImg={MobileLogoImg} MobileNavTop={MobileNavTop}
                                   toggleChange={toggleChange} toggleBar={toggleBar} toggleMenu={toggleMenu}
                                   styles={styles} logoutButton={logoutButton} />
                ):(
                    <BeforePhoneNav MobileHome={MobileHome} MobileLogoImg={MobileLogoImg} MobileNavTop={MobileNavTop}
                                    toggleChange={toggleChange} toggleBar={toggleBar} toggleMenu={toggleMenu}
                                    styles={styles} onSubmit={onSubmit} onSubmitNavJoin={onSubmitNavJoin}/>
                    )}
            </Mobile>


        </>
    )

}
