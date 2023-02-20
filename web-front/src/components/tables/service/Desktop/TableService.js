import CompanyHeaders from "../../event/Desktop/contents/headers";
import SearchTable from "../../event/Desktop/contents/SearchTable";
import CreateModalMain from "../../modals/Create/Desktop/main/CreateModalMain";
import UpdateModalMain from "../../modals/Update/Desktop/main/UpdateModalMain";
import DeleteTable from "../../event/Desktop/contents/DeleteTable";
import ExcelUpload from "../../event/Desktop/excel/ExcelUpload";
import ExcelDownload from "../../event/Desktop/excel/ExcelDownload";
import Reload from "../../event/Desktop/contents/Reload";
import DbTable from "../../event/Desktop/data/DbTable";
import React, { useState} from "react";



export default function TableService(props){

    const {CheckCompany, srcAddress} =props

    const [selectedData,setSelectedData]=useState('')
    const [editedData,setEditData]=useState('')
    const [downloadData, setDownloadData] = useState('')
    const [dbData,setDbData] = useState([])




    return (
        <>
                <CompanyHeaders srcAddress={srcAddress}/><br/><br/>
            <div style={{display:'flex', alignItems:'center',padding:10}}>
                <SearchTable setData={setDbData} CheckCompany={CheckCompany}/>
                <div style={{width:50}}/>
                        <CreateModalMain/>
                        <div style={{width:10}}/>
                        <UpdateModalMain editedData={editedData}/>
                <div style={{width:10}}/>
                        <DeleteTable selectedRowsData={selectedData}/>
                <div style={{width:10}}/>
                        <ExcelUpload/>
                <div style={{width:10}}/>
                        <ExcelDownload dbData={dbData} checkData={downloadData}/>
                <div style={{width:10}}/>
                        <Reload/>

            </div>

                <br/>

                        <DbTable setSelectedData={setSelectedData} dbData={dbData}
                                 setDbData={setDbData} setEditData={setEditData}
                                 setDownloadData={setDownloadData}/>

            </>
    )
}