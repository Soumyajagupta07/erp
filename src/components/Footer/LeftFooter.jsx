import React from "react";
import logo from '../../utils/logo.jpeg'
import '../../css/LeftFooter.css'
function LeftFooter(){
    return(
        <div className="LeftFooter">
            <img src={logo} alt="logo_image" srcset="" height={200} width={300}/>
        </div>
    )
}

export default LeftFooter;