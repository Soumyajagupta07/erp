import React, { useState } from "react";
import '../../css/OrderTable.css'
import order_data from "../../utils/mock_data_orders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons";

function OrderTable() {
    const [orders, setOrders] = useState(order_data);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleUpdateStatus = (orderId) => {
        // Ask for confirmation
        const isDelivered = window.confirm(`Has order ${orderId} been delivered?`);

        // If confirmed, update the status
        if (isDelivered) {
            const updatedOrders = orders.map(order => {
                if (order.id === orderId && order.status !== "Delivered") {
                    return { ...order, status: "Delivered" };
                }
                return order;
            });

            // Update the state with the new order list
            setOrders(updatedOrders);
        }
    };

    const handleDeleteOrder = (orderId) => {
        // Filter out the order to be deleted
        const updatedOrders = orders.filter(order => order.id !== orderId);
        // Update the state with the new order list
        setOrders(updatedOrders);
    };

    const handleViewOrder = (orderId) => {
        // Find the selected order by its ID
        const order = orders.find(order => order.id === orderId);
        // Set the selected order to display its details
        setSelectedOrder(order);
    };

    const handleCloseOrderDetails = () => {
        // Clear the selected order
        setSelectedOrder(null);
    };

    return (
        <>
            {selectedOrder && (
                <div className="order-details-modal">
                    <div className="order-details">
                        <h2>Order Details</h2>
                        <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                        <p><strong>Customer Name:</strong> {selectedOrder.c_name}</p>
                        <p><strong>Order Date:</strong> {selectedOrder.order_date}</p>
                        <p><strong>Status:</strong> {selectedOrder.status}</p>
                        <button onClick={handleCloseOrderDetails} className="close_button">Close</button>
                    </div>
                </div>
            )}

            {orders.length === 0 ? (
                <p>There are no recent orders.</p>
            ) : (
                <>
                    <p>Here are the details of the recent orders in this month:</p>
                    <div className="table_container">
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Quantity Ordered(units)</th>
                                    <th>Customer Name</th>
                                    <th>Order Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.c_name}</td>
                                        <td>{order.order_date}</td>
                                        <td>
                                            {(order.status !== "Delivered") ?
                                                <div className="order_status">
                                                    {order.status}
                                                    <button onClick={() => handleUpdateStatus(order.id)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                                </div>
                                                :
                                                <div className="order_status">
                                                    <span>{order.status}</span>
                                                    <button onClick={() => handleDeleteOrder(order.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleViewOrder(order.id)}className="action_button"><FontAwesomeIcon icon={faEye}/></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    );
}

export default OrderTable;