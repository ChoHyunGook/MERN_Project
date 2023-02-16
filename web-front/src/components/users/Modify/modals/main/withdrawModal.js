import React from "react";
import DeleteModalComponent from "../component/DeleteModalComponent";
import '../../../../../modals/styles/modal.css'
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";


const WithdrawModal = (props) =>{

    const {open, close, header, userData, CheckCompany,srcAddress } = props;


    return(
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                        <>
                            <Desktop>
                                <section>
                                    <header>
                                        {header}
                                        <button className="close" onClick={close}>
                                            &times;
                                        </button>
                                    </header>
                                    <main style={{alignItems: "center"}}><DeleteModalComponent userData={userData} CheckCompany={CheckCompany}
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
                                <sectionTablet>
                                    <header>
                                        {header}
                                        <button className="close" onClick={close}>
                                            &times;
                                        </button>
                                    </header>
                                    <main style={{alignItems: "center"}}><DeleteModalComponent userData={userData} CheckCompany={CheckCompany}
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
                                    <main style={{alignItems: "center"}}><DeleteModalComponent userData={userData} CheckCompany={CheckCompany}
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


export default WithdrawModal