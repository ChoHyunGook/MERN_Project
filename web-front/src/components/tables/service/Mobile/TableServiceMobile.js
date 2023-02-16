import CompanyHeaders from "../../event/Desktop/contents/headers";
import SearchTable from "../../event/Desktop/contents/SearchTable";
import UpdateModalMain from "../../modals/Update/Desktop/main/UpdateModalMain";
import DeleteTable from "../../event/Desktop/contents/DeleteTable";
import DbTable from "../../event/Desktop/data/DbTable";
import React, { useState} from "react";
import CreateTableMobile from "../../event/Mobile/Main/CreateTableMobile";
import UpdateTableMobile from "../../event/Mobile/Main/UpdateTableMobile";



export default function TableServiceMobile(props){

    const {CheckCompany, srcAddress} =props

    const [selectedData,setSelectedData]=useState('')
    const [editedData,setEditData]=useState('')
    const [downloadData, setDownloadData] = useState('')
    const [dbData,setDbData] = useState([])



    return (
        <>
                <CompanyHeaders srcAddress={srcAddress}/><br/>
            <div style={{display:'flex',alignItems:'center'}}>
                <CreateTableMobile />
                <div style={{width:10}}/>
                <UpdateTableMobile editedData={editedData}/>
                <div style={{width:10}}/>
                <DeleteTable selectedRowsData={selectedData}/>
            </div>
                <SearchTable setData={setDbData}/>

            <br/>

            <DbTable setSelectedData={setSelectedData} dbData={dbData}
                     setDbData={setDbData} setEditData={setEditData}
                     setDownloadData={setDownloadData}/>



        </>
    )
}