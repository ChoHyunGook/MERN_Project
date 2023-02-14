import styled from 'styled-components'
import {logout, signCheck} from "../../api";
import React, {useEffect, useState} from "react"
import AfterDesktopNav from "../components/DesktopNav/AfterDesktopNav";
import BeforeDesktopNav from "../components/DesktopNav/BeforeDesktopNav";
import { useMediaQuery } from 'react-responsive'
import BeforeTabletNav from "../components/TabletNav/BeforeTabletNav";
import AfterTabletNav from "../components/TabletNav/AfterTabletNav";
import BeforePhoneNav from "../components/PhoneNav/BeforePhoneNav";
import AfterPhoneNav from "../components/PhoneNav/AfterPhoneNav";


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
    width:250px;
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
    maxWidth: 360,
    bgcolor: 'background.paper',
    float: 'right',
};




const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}




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


    return(
        <>
            <Desktop>
                {isLogin ? (
                    <AfterDesktopNav Home={Home} LogoImg={LogoImg} Common={Common}
                                     ContlorBox={ContlorBox} Contlor={Contlor} logoutButton={logoutButton} />
                ):(
                    <BeforeDesktopNav Home={Home} LogoImg={LogoImg} Common={Common}
                                      ContlorBox={ContlorBox} Contlor={Contlor} />
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
                                     toggleMenu={toggleMenu} styles={styles} />
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
                                    styles={styles} />
                    )}
            </Mobile>


        </>
    )

}
