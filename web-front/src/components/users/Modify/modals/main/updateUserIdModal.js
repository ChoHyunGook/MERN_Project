import React from "react";
import UserIdModalComponent from "../component/UserIdModalComponent";
import '../../../../../modals/styles/modal.css'
import {Desktop, Mobile, Tablet} from "../../../../../containers/Responsive/responsive";


export default function UpdateUserIdModal(props){
    const {open, close, header, userData, CheckCompany, srcAddress  } = props;

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
                                    <main style={{alignItems: "center"}}><UserIdModalComponent userData={userData} CheckCompany={CheckCompany}
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
                                    <main style={{alignItems: "center"}}><UserIdModalComponent userData={userData} CheckCompany={CheckCompany}
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
                                    <main style={{alignItems: "center"}}><UserIdModalComponent userData={userData} CheckCompany={CheckCompany}
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