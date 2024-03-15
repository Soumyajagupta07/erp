import React from "react";
import { Link } from "react-router-dom";
import '../../css/RightFooter.css'
function RightFooter() {
    return (
        <div className="RightFooter">
            <ul>
                <li><Link to="/" style={{color:"white", textDecoration:"none"}}>Home</Link></li>
                <li><Link to="/about" style={{color:"white", textDecoration:"none"}}>About Us</Link></li>
                <li><Link to="/contact-us" style={{color:"white", textDecoration:"none"}}>Contact Us</Link></li>
            </ul>
        </div>
    )
}
export default RightFooter;