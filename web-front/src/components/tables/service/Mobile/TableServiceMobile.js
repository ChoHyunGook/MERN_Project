import CompanyHeaders from "../../event/Desktop/contents/headers";
import React, { useState} from "react";
import CreateTableMobile from "../../event/Mobile/Main/CreateTableMobile";
import SearchTableMobile from "../../event/Mobile/Main/SearchTableMobile";



export default function TableServiceMobile(props){

    const {CheckCompany, srcAddress} =props

    const [dbData,setDbData] = useState([])



    return (
        <>
            <CompanyHeaders srcAddress={srcAddress}/><br/>
            <div style={{display: 'flex', alignItems: 'center', paddingBottom: 10}}>
                <CreateTableMobile/>
            </div>
                <SearchTableMobile setData={setDbData}/>
            <br/>
        </>
    )
}