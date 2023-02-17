import background from "../../../../images/bg_index.png";
import RequiredMobileComponent from "../component/RequiredMobileComponent";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function RequiredMobile(){
    return(
        <>
            <Desktop>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:550
                }}>
                    <div style={{display: 'flex',
                        flexDirection:"column",
                        alignItems:"center"}}>
                        <RequiredMobileComponent />
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:750
                }}>
                    <div style={{display: 'flex',
                        flexDirection:"column",
                        alignItems:"center"}}>
                        <RequiredMobileComponent />
                    </div>
                </div>
            </Tablet>

        </>
    )
}