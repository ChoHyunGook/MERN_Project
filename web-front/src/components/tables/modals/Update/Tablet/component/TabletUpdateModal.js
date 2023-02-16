import React from 'react'
import '../../../../../../modals/styles/modal.css'
import TableUpdateTable from "../Service/TableUpdateTable";

const TabletUpdateModal = (props) =>{
    const {open, close, header, editedData, data} = props;



    return (
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section style={{width:'100%',marginTop:80}}>
                        <header>
                            {header}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main style={{alignItems: "center"}}><TableUpdateTable data={data} editedData={editedData}
                                                                               style={{alignItems: "center"}}/></main>
                        <footer>
                            <button className="close" onClick={close}>
                                닫기
                            </button>
                        </footer>
                    </section>
                ) : null}
            </div>

        </>
    )
}
export default TabletUpdateModal