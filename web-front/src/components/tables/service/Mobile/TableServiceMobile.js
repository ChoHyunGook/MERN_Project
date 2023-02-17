import CompanyHeaders from "../../event/Desktop/contents/headers";
import React, { useState} from "react";
import CreateTableMobile from "../../event/Mobile/main/CreateTableMobile";
import SearchTableMobile from "../../event/Mobile/main/SearchTableMobile";



export default function TableServiceMobile(props){

    const {CheckCompany, srcAddress} =props

    const [selectedData,setSelectedData]=useState('')
    const [editedData,setEditData]=useState('')
    const [downloadData, setDownloadData] = useState('')
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