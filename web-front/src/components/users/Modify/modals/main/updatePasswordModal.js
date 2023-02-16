import React from 'react'
import '../../../../../modals/styles/modal.css'
import PasswordModalComponent from "../component/PasswordModalComponent";
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";

export default function UpdatePasswordModal(props){

    const {open, close, header, userData, CheckCompany,srcAddress } = props;

    return (
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <>
                        <Desktop>
                            <section style={{marginTop:80}}>
                                <header>
                                    {header}
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                </header>
                                <main style={{alignItems: "center"}}><PasswordModalComponent userData={userData} CheckCompany={CheckCompany}
                                                                                             srcAddress={srcAddress}
                                                                                             style={{alignItems: "center"}}/></main>
                                <footer>
                                    <button className="close" onClick={close}>
                                        닫기
                                    </button>
                                </footer>
                            </section>
                        </Desktop>

                        <Tablet>
                            <sectionTablet style={{marginTop:80}}>
                                <header>
                                    {header}
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                </header>
                                <main style={{alignItems: "center"}}><PasswordModalComponent userData={userData} CheckCompany={CheckCompany}
                                                                                             srcAddress={srcAddress}
                                                                                             style={{alignItems: "center"}}/></main>
                                <footer>
                                    <button className="close" onClick={close}>
                                        닫기
                                    </button>
                                </footer>
                            </sectionTablet>
                        </Tablet>

                        <Mobile>
                            <sectionMobile>
                                <header>
                                    {header}
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                </header>
                                <main style={{alignItems: "center"}}><PasswordModalComponent userData={userData} CheckCompany={CheckCompany}
                                                                                             srcAddress={srcAddress}
                                                                                             style={{alignItems: "center"}}/></main>
                                <footer>
                                    <button className="close" onClick={close}>
                                        닫기
                                    </button>
                                </footer>
                            </sectionMobile>
                        </Mobile>
                    </>

                ) : null}
            </div>
        </>
    )
}