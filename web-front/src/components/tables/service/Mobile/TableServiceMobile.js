import CompanyHeaders from "../../event/Desktop/contents/headers";
import React, { useState} from "react";
import CreatedTablesMobile from "../../event/Mobile/main/CreatedTablesMobile";
import SearchTablesMobile from "../../event/Mobile/main/SearchTablesMobile";



export default function TableServiceMobile(props){

    const {CheckCompany, srcAddress} =props

    const [dbData,setDbData] = useState([])



    return (
        <>
            <CompanyHeaders srcAddress={srcAddress}/><br/>
            <div style={{display: 'flex', alignItems: 'center', paddingBottom: 10}}>
                <CreatedTablesMobile/>
            </div>
                <SearchTablesMobile setData={setDbData}/>
            <br/>
        </>
    )
}