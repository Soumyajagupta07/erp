import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";
import React from "react";
import '../../css/FooterContainer.css'
function FooterContainer() {
    return (
        <div className="Footer">
            <div className="FooterContainer">
                <LeftFooter></LeftFooter>
                <RightFooter></RightFooter>
            </div>
            <p>© 2024, ERP Works Pvt. Ltd. All Rights Reserved.</p>
        </div>

    )
}
export default FooterContainer;