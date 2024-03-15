import '../../css/Card.css'
import React from "react";
import { Link } from 'react-router-dom';
function Card(props){
    return(
        <div className="Card">
            <h1>{props.name} available this week</h1>
            <p>{props.quantity}</p>
            {
                (props.name==="Products") ? <Link to="/products"><button className='dashboard_card_button'>{props.name} details</button></Link> : <Link to="/orders"><button className='dashboard_card_button'>{props.name} details</button></Link>
            }
            
        </div>
    )
}
export default Card;