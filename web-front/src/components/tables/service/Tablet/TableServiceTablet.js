import CompanyHeaders from "../../event/Desktop/contents/headers";
import React, {useState} from "react";
import TabletSearchTable from "../../event/Tablet/contents/TabletSearchTable";
import TabletCreateModal from "../../modals/Create/Tablet/component/TabletCreateModal";
import TabletUpdateModalMain from "../../modals/Update/Tablet/main/TabletUpdateModalMain";
import TabletDeleteTable from "../../event/Tablet/contents/TabletDeleteTable";
import TabletReload from "../../event/Tablet/contents/TabletReload";
import TabletExcelUpload from "../../event/Tablet/excel/TabletExcelUpload";
import TabletExcelDownload from "../../event/Tablet/excel/TabletExcelDownload";
import TabletDbTable from "../../event/Tablet/data/TabletDbTable";
import TabletCreateModalMain from "../../modals/Create/Tablet/main/TabletCreateModalMain";



export default function TableServiceTablet(){

    const [selectedData,setSelectedData]=useState('')
    const [editedData,setEditData]=useState('')
    const [downloadData, setDownloadData] = useState('')
    const [dbData,setDbData] = useState([])




    return (
        <>
            <CompanyHeaders/><br/>

            <TabletSearchTable setData={setDbData}/>

            <div style={{alignItems: 'center', display: 'flex', padding: 10}}>
                <TabletCreateModalMain/>
                <div style={{width: 20}}/>
                <TabletUpdateModalMain editedData={editedData}/>
                <div style={{width: 20}}/>
                <TabletDeleteTable selectedRowsData={selectedData}/>
                <div style={{width: 20}}/>
                <TabletReload/>

            </div>
            <div style={{alignItems: 'center', display: 'flex', padding: 5}}>
            <TabletExcelUpload/>
                <div style={{width: 20}}/>
            <TabletExcelDownload dbData={dbData} checkData={downloadData}/>
            </div>

            <br/>

            <TabletDbTable setSelectedData={setSelectedData} dbData={dbData}
                     setDbData={setDbData} setEditData={setEditData}
                     setDownloadData={setDownloadData}/>

        </>
    )
}