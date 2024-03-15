import Card from "./Card";
import '../../css/CardContainer.css';
import product_data from "../../utils/mock_data_products";
import order_data from "../../utils/mock_data_orders";
import React from "react";

function CardContainer() {
    let sum_products = 0;
    product_data.map((product) => sum_products += product.stock)
    let sum_orders = 0;
    order_data.map((order) => sum_orders += order.quantity)

    return (
        <div className="CardContainer">
            <Card name="Products" quantity={sum_products}></Card>
            <Card name="Orders" quantity={sum_orders}></Card>
        </div>
    )
}

export default CardContainer;