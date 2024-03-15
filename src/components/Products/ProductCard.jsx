import React, { useState } from "react";
import '../../css/ProductCard.css'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProductCard(props) {
    let[originalStock, setOriginalStock]=useState(props.stock)
    function removeStock(){
        setOriginalStock(originalStock-1);
    }
    return (
        <div className="ProductCard">
            <img src={props.pro_img} alt="product_img" className="pro_img" height={120} width={200} />
            <h3>{props.name}</h3>
            <p>Id: {props.pro_id}</p>
            <p>Brand: {props.brand}</p>
            <p>Category: {props.category}</p>
            <div className="control_stock">
                <p>Stock: {originalStock}</p>
                <button onClick={removeStock}><FontAwesomeIcon icon={faTrash}/></button>
            </div>

            <p>Price: {props.price}</p>

        </div>
    )
}

export default ProductCard;