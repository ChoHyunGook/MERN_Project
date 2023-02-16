import {DataGrid} from "@mui/x-data-grid";
import React from "react";





export default function MobileDbDataTable(props){

    const { dbData, setDbData, setSelectedData, setEditData } =props

    const columns = [
        {headerName:'정보',width:170},
    ]

    const onRowsSelectionHandler = (ids) => {
        const selectedRowsData = ids.map((id) => dbData.find((row) => row.id === id));
        setSelectedData(selectedRowsData)
        setEditData(selectedRowsData)
    };



    return(
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={dbData}
                columns={columns}
                pageSize={11}
                rowsPerPageOptions={[1]}
                checkboxSelection
                onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
            />
        </div>
    )
}