import background from "../../../../images/bg_index.png";
import RequiredMobileComponent from "../component/RequiredMobileComponent";


export default function RequiredMobile(){
    return(
        <>
            <div style={{
                backgroundImage: `url(${background})`,paddingBottom:390
            }}>
                <div style={{display: 'flex',
                    flexDirection:"column",
                    alignItems:"center"}}>
                    <RequiredMobileComponent />
                </div>
            </div>
        </>
    )
}