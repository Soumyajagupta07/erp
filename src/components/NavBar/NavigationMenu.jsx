import DashBoard from '../Dashboard/DashBoard';
import ProductDetail from '../Products/ProductDetail'
import LeftNav from './LeftNav'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

import React, { useState } from "react";
import '../../css/NavigationMenu.css'
import FooterContainer from '../Footer/FooterContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
import OrderManagement from '../OrdersManage/OrderManagement';
import About from '../About';
import ContactUs from '../ContactUs';

function NavigationMenu() {
    let [showNav, setshowNav] = useState(false)
    function disNav() {
        setshowNav(true)
        setshow(true)
    }
    function hideNav() {
        setshowNav(false)
    }

    let [show, setshow] = useState(true)
    function hide() {
        setshow(false)
        setshowNav(false)
    }
    return (
        <Router>
            <div className='NavigationMenu'>

                <nav className='navbar'>
                    <LeftNav></LeftNav>
                    {
                        (showNav) ?
                            (<>
                                {
                                    (show) ?
                                        (<ul className="RightNav">
                                            <li><Link to="/" style={{ textDecoration: "none", color: "black" }} onClick={hide}>Dashboard</Link></li>

                                            <li><Link to="/products" style={{ textDecoration: "none", color: "black" }} onClick={hide}>Explore Products</Link></li>

                                            <li><Link to="/orders" style={{ textDecoration: "none", color: "black" }} onClick={hide}>Orders Management</Link></li>
                                        </ul>) : (<></>)
                                }
                                <button onClick={hideNav} className='nav_control_button'><FontAwesomeIcon icon={faX} style={{ color: "#3bac86", }} className='control_nav_img' />
                                </button>
                            </>) :
                            (<button className='nav_control_button' onClick={disNav}>
                                <FontAwesomeIcon icon={faBars} style={{ color: "#3bac86", }} className='control_nav_img' />
                            </button>)
                    }
                </nav>
                <Routes>
                    <Route path='/' element={<DashBoard />}></Route>
                    <Route path='/products' element={<ProductDetail />}></Route>
                    <Route path='/orders' element={<OrderManagement />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact-us' element={<ContactUs />}></Route>
                </Routes>

            </div>
            <FooterContainer></FooterContainer>
            
        </Router >
    )
}

export default NavigationMenu;