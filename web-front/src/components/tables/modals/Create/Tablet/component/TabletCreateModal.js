import React from 'react'
import '../../../../../../modals/styles/modal.css'
import TabletCreateTable from "../service/TabletCreateTable";

export default function TabletCreateModal(props){
    const {open, close, header} = props;

    return(
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section style={{width:'100%',marginTop:80}}>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main style={{alignItems:"center"}}><TabletCreateTable style={{alignItems:"center"}} /></main>
                    <footer>
                        <button className="close" onClick={close}>
                            닫기
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    )
}