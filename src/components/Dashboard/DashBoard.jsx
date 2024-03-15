import CardContainer from "./CardContainer";
import React from 'react';
import '../../css/DashBoard.css';

function DashBoard() {
    return (
        <div className="Dashboard">
            <h1>Dashboard</h1>
            <p>Here's a brief overview</p>

            <CardContainer />

        </div>
    )
}

export default DashBoard;