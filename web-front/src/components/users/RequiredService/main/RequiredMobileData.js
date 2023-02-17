import background from "../../../../images/bg_index.png";
import RequiredMobileDataComponent from "../component/RequiredMobileDataComponent";
import {Desktop, Mobile, Tablet} from "../../../../containers/Responsive/responsive";


export default function RequiredMobileData(){

    return(
        <>
            <Desktop>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:550
                }}>
                    <div style={{display: 'flex',
                        flexDirection:"column",
                        alignItems:"center"}}>
                        <RequiredMobileDataComponent />
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
                        <RequiredMobileDataComponent />
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div style={{
                    backgroundImage: `url(${background})`,paddingBottom:600
                }}>
                    <div style={{display: 'flex',
                        flexDirection:"column",
                        alignItems:"center"}}>
                        <RequiredMobileDataComponent />
                    </div>
                </div>
            </Mobile>

        </>
    )
}