import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom"


function Navbar(){
    return<>
    <nav>
        <ul>
           
            <Link className="hv" to="/"> <li>Healthy Food</li></Link>
            <Link className="hm" to="/home">  <li>Home</li></Link>
            <Link className="ab" to="/about">  <li>About</li></Link>
           <Link className="cn" to="/contact">   <li>Contact</li></Link>
            <Link className="he" to="/healthy"> <li>Healthy Foods</li></Link>
            
        </ul>
    </nav>
    </>
}
export default Navbar;