import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../css/EmptyCard.css'
import React from "react";

function EmptyCard() {
    const handleClick = () => {
        const addProductSection = document.getElementById("AddProduct");
        if (addProductSection) {
            addProductSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="EmptyCard">
            <button onClick={handleClick}>
                <FontAwesomeIcon icon={faPlus} style={{ color: "rgb(59,172,134)", fontSize: "50px" }} />
            </button>
        </div>
    )
}

export default EmptyCard;