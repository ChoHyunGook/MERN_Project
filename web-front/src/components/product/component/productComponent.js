import React from "react";
import {Desktop,Tablet, Mobile} from "../../../containers/Responsive/responsive";
import ProductDesktop from "./Desktop/productDesktop";
import ProductTablet from "./Tablet/productTablet";
import ProductMobile from "./Mobile/productMobile";


export default function ProductComponent(){

    return(
        <>
            <Desktop>
                <ProductDesktop />
            </Desktop>

            <Tablet>
                <ProductTablet />
            </Tablet>

            <Mobile>
                <ProductMobile />
            </Mobile>

        </>
    )
}