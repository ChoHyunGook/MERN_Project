


export default function ProductTablet(){
    return(
        <>
            <div style={{paddingTop:30 ,paddingBottom:150,backgroundColor:'white'}}>
                <div style={{display: 'flex',
                    flexDirection: "column",
                    alignItems: "center",}}>
                    <img alt="No Images" src="images/doorbell_hard.png"
                         style={{
                             width:700
                         }}/>
                    <div style={{display:'flex',alignItems:'center'}}>
                    <img alt="No Images" src="images/doorbell_text.png"
                         style={{
                             width:200
                         }}/>
                    <img alt="No Images" src="images/doorbell_point.png"
                         style={{
                             width:500
                         }}/>
                    </div>
                </div>
            </div>
        </>
    )
}